"use strict";

// Imports
const { deepClone, deepFreeze } = require("@protagonists/deep");
const SchemaType = require("../SchemaType");
const SchemaTypes = require("../SchemaTypes");

// Function imports
const coerceSchema = require("./coerceSchema");
const createDefaults = require("./createDefaults");

/**
 * Creates the raw model used inside the Schema class
 * @param {Object} obj
 * @returns {Model} raw Schema model
 */
function toSchema(obj) {

  // Iterator
  const iterate = function(parent, path) {
    // Parser
    const parse = function(elem, name, isArray) {
      const types = Object.getOwnPropertyNames(SchemaTypes);
        
      // Check if it is an existing SchemaType
      if(Schemas.indexOf(elem) != -1)
        if(!isArray)
          return elem.raw;
        else throw new Error(`Illegal use of Schema at ${path}[${name}], cannot process Object nested inside an Array\nUse SchemaType instead`);
      else if(elem instanceof SchemaType)
        return new elem.constructor();
      else if(elem.prototype instanceof SchemaType)
        return new elem();
  
      // Check if it is a similar value type
      switch(elem) {
        case Boolean:
          return new SchemaTypes._Boolean_();
  
        case Number:
          return new SchemaTypes._Number_();
            
        case String:
          return new SchemaTypes._String_();
            
        case Date:
          return new SchemaTypes._Date_();

        case Function:
          return new SchemaTypes._Function_();

        case RegExp:
          return new SchemaTypes._RegExp_();
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

const Schemas = [];


const SchemaInstances = [];

/**
 * Creates a small temp function that coerces objects into the passed model
 * @param {Object} obj
 * @returns {SchemaInstance} a schema parsing function
 */
function Schema(obj) {
  // Handle parameters
  if(!obj || typeof obj !== "object")
    throw new Error("Invalid passed value for parameter 'obj', expected Object.");

  // Convert the passed object into a proper schema
  obj = toSchema(obj);
  deepFreeze(obj);

  // Initialize resulting class
  const result = function SchemaInstance(val) {
    if(!val || typeof val !== "object")
      throw new Error("Invalid passed value for parameter 'val', expected Object.");

    return coerceSchema(obj, val, defaults);
  }

  // Define properties
  Object.defineProperty(result, "raw", {
    enumerable: true,
    value: obj,
    writable: false
  });

  let defaults = createDefaults(obj, {});

  Object.defineProperty(result, "defaults", {
    enumerable: true,
    get: ()=>{return deepClone(defaults)}
  });

  // Define functions
  Object.defineProperty(result, "setDefaults", {
    enumerable: true,
    value: function setDefaults(val) {
      if(!val || typeof val !== "object")
        throw new Error("Invalid passed value for parameter 'val', expected Object.");

      defaults = createDefaults(obj, val);
    },
    writable: false
  });

  Object.defineProperty(result, "toString", {
    value: function toString() { return result.raw },
    writable: false
  });

  SchemaInstances.push(result);
  return result;
}
Object.defineProperty(Schema, Symbol.hasInstance, {
  value: function hasInstance(instance) {
    return instance === Schema || SchemaInstances.indexOf(instance) != -1;
  }
});

module.exports = Schema;
