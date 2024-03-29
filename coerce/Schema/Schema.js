"user strict";

// Imports
const { deepClone, deepFreeze } = require("@protagonists/deep");
const SchemaType = require("../SchemaType");

const Parser = require("./Coerce");

////////// MODEL CONVERSION //////////


function iterate(obj, path) {
  // Get properties
  const props = Object.getOwnPropertyNames(obj);

  // Loop through each property
  for(let i = 0; i < props.length; i++) {
    const name = props[i];
    const prop = obj[name];

    // Check if it is an object to iterate over
    if(typeof prop == "object") {

      // Check if it is an array
      if(Array.isArray(prop)) {

        // Make sure it is not empty
        if(prop.length === 0)
          throw new Error("Schema array must contain at least one element at " + path);

        obj[name] = [];

        // Validate each element
        for(let j = 0; j < prop.length; j++) {

          // Check if that property is a SchemaType
          // and assign a new instance of it to the final model
          if(prop instanceof SchemaType)
            obj[name][j] = new prop.constructor();
          else if(prop.prototype instanceof SchemaType)
            obj[name][j] = new prop();
          // Illegal use!
          else throw new Error(`Invalid Schema Type at ${path}.${name}[${j}]`);
        }
      }
      // Check if that property is a SchemaType
      // and assign a new instance of it to the final model
      else if(prop instanceof SchemaType)
        obj[name] = new prop.constructor();
      else if(prop.prototype instanceof SchemaType)
        obj[name] = new prop();
      // Otherwise, treat as any other object
      else {
        // Make sure it contains at least one property
        if(Object.getOwnPropertyNames(prop).length === 0)
          throw new Error(`Schema object must contain at least one property at ${path}.${name}`);

        obj[name] = iterate(prop, path + '.' + name);
      }
    }
    // If it is a Schema, simply take the existing model
    else if(prop instanceof Schema)
      obj[name] = prop.raw;
    // Otherwise, simply parse the property to a corresponding SchemaType
    if(prop instanceof SchemaType)
      obj[name] = new prop.constructor();
    else if(prop.prototype instanceof SchemaType)
      obj[name] = new prop();
    // Illegal use!
    else throw new Error(`Invalid Schema Type at ${path}.${name}`);
  }

  return obj;
}


function coerceModel(obj) { return iterate(obj, "root") }

////////// END OF MODEL CONVERSION //////////

const Schemas = [];

function Schema(model) {
  // Make sure this function is called from a new instance
  if(!new.target)
    throw new Error("Schema constructor called without keyword 'new'.");

  // Convert the passed model
  model = coerceModel(model);
  deepFreeze(model);

  let defaults = Parser.Coerce(model, {});

  // Create the resulting convertion function
  const result = function Coerce(obj) {
    if(!obj || typeof obj !== "object")
      throw new Error("Invalid passed value for convertion. Expected Object");

    return Parser.Coerce(model, obj, defaults);
  }

  // Define properties
  Object.defineProperties(result, {
    "raw": {
      enumerable: true,
      value: model
    },
    "defaults": {
      enumerable: true,
      get: () => defaults
    },
    "setDefaults": {
      enumerable: true,
      value: function setDefaults(newDefs) { defaults = Parser.Coerce(model, newDefs) }
    }
  });

  // Return the conversion function
  Schemas.push(result);
  return result;
}
Object.defineProperties(Schema, {
  [Symbol.hasInstance]: {
    value: function hasInstance(instance) {
      return instance === Schema || Schemas.indexOf(instance) != -1;
    }
  },
  "isDefault": { value: Parser.isDefault } 
});

module.exports = Schema;
