// Imports
const deepClone = require("./deepClone");
const SchemaType = require("./SchemaType");
const SchemaTypes = require("./SchemaTypes");


function toSchema(obj) {
  
  // Iterator
  const iterate = function(parent, path) {
    // Parser
    const parse = function(elem, name, isArray) {
      const types = Object.getOwnPropertyNames(SchemaTypes);
      
      // Check if it is an existing SchemaType
      if(elem.prototype instanceof SchemaType)
        return new elem();

      // Check if it is a similar value type
      switch(elem) {
        case Boolean:
          return new SchemaTypes.BooleanType();
          break;

        case Number:
          return new SchemaTypes.NumberType();
          break;
          
        case String:
          return new SchemaTypes.StringType();
          break;
          
        case Date:
          return new SchemaTypes.DateType();
          break;
      }

      // Check if it is an object to iterate over
      if(typeof elem === "object")
        if(!isArray)
          return iterate(elem, path+'.'+name);
        else throw new Error(`Illegal use of Schema at ${path}[${name}], cannot process Object nested inside an Array\nUse SchemaType instead`);
      else throw new Error(`Invalid Schema Type at ${isArray ? path+'['+name+']' : path+'.'+name}`);
    }

    // Iterable value is an array
    if(Array.isArray(parent)) {
      // Check if empty
      if(parent.length === 0)
        throw new Error("Schema array must contain at least one element at "+path);

      const result = [];

      // Parse each element
      for(let i = 0; i < parent.length; i++) {
        const child = parent[i];
        
        result[i] = parse(child, i, true);
      }

      return result;
    }
    // Iterable value is an object
    else {
      const props = Object.getOwnPropertyNames(parent);

      // Check is empty
      if(props.length === 0)
        throw new Error(`Schema object must contain at least one property at `+path);

      const result = {};

      // Parse each property
      for(let i = 0; i < props.length; i++) {
        const prop = parent[props[i]];
        const name = props[i];
        
        result[name] = parse(prop, name);
      }

      return result;
    }
  }

  return iterate(obj, "root");
}



function coerceSchema(schema, obj) {

  // Iterator
  const iterate = function(schemaParent, parent, path) {
    // Iterable value is an array
    if(Array.isArray(parent)) {
      const result = [];

      if(typeof schemaParent === "object" && !Array.isArray(schemaParent))
        throw new Error(`Invalid passed value at ${path}, expected Object`);

      // Loop through each element
      for(let i = 0; i < parent.length; i++) {
        let valid = false;

        // Parse each element
        for(let j = 0; j < schemaParent.length; j++) {
          const val = schemaParent[j].call(parent[i]);
          if(val !== undefined) {
            valid = true;
            result.push(val);
            break;
          }
        }

        if(!valid)
          throw new Error(`Invalid value at ${path}, expected [${schemaParent.map(s => s.toString()).join(', ')}]`);
      }

      return result;
    }
    else {
      
      const result = {};
      const props = Object.getOwnPropertyNames(schemaParent);

      // Iterable value is not an object
      if(typeof parent !== "object")
        // Loop through schema properties
        for(let i = 0; i < props.length; i++) {
          const schemaProp = schemaParent[props[i]];
          const name = props[i];

          // Parse from empty value
          if(schemaProp instanceof SchemaType)
            result[name] = schemaProp.call();
          else if(Array.isArray(schemaProp))
            result[name] = [];
          else result[name] = iterate(schemaProp, {}, path+'.'+name);

          if(result[name] === undefined)
            throw new Error(`Invalid value at ${path}.${name}, expected ${schemaProp.toString()}`);
        }
      // Iterable value is an object
      else
        // Loop through schema properties
        for(let i = 0; i < props.length; i++) {
          const schemaProp = schemaParent[props[i]];
          const parentProp = parent[props[i]];
          const name = props[i];

          // Parse each values
          if(schemaProp instanceof SchemaType)
            result[name] = schemaProp.call(parentProp);
          else if(Array.isArray(schemaProp))
            if(Array.isArray(parentProp))
              result[name] = iterate(schemaProp, parentProp, path+'.'+name);
            else result[name] = iterate(schemaProp, [parentProp], path+'.'+name);
          else result[name] = iterate(schemaProp, parentProp, path+'.'+name);

          if(result[name] === undefined)
            throw new Error(`Invalid value at ${path}.${name}, expected ${schemaProp.toString()}`);
        }
      
      return result;
    }
  }

  return iterate(schema, obj, "root");
}



const Schemas = {};

function Schema(obj) {
  // Handle parameters
  if(!obj || typeof obj !== "object")
    throw new Error("Invalid passed value for parameter 'obj', expected Object.");

  // Convert the passed object into a proper schema
  obj = Object.freeze(toSchema(obj));

  // Define properties
  Object.defineProperty(this, "raw", {
    enumerable:true,
    value:obj,
    writable:false
  });

  // Define functions
  Object.defineProperty(this, "from", {
    enumerable:true,
    value:function from(val) {
      if(!val || typeof val !== "object")
        throw new Error("Invalid passed value for parameter 'val', expected Object.");

      return coerceSchema(obj, val);
    },
    writable:false
  });
}
Object.defineProperty(Schema.prototype, "toString", {
  value:function toString() { return this.raw },
  writable:false
});

module.exports = { Schema, Schemas };
