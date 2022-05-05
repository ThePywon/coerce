"use strict";

const Schema = require("./Schema");
const SchemaType = require("../SchemaType");

/**
 * Coerces an object following a model to create default values
 * @param {Schema} schema 
 * @param {Object} obj 
 * @returns {SchemaDefaultObject} Coerced object
 */
function createDefaults(schema, obj) {
  
    // Iterator
    const iterate = function(schemaParent, parent, path) {
      // Iterable value is an array
      if(Array.isArray(parent)) {
        const result = [];
  
        if(typeof schemaParent === "object" && !Array.isArray(schemaParent))
          return [];
  
        // Loop through each element
        for(let i = 0; i < parent.length; i++) {
  
          // Parse each element
          for(let j = 0; j < schemaParent.length; j++) {
            const val = schemaParent[j].call(parent[i]);
            if(val !== undefined) {
              result.push(val);
              break;
            }
          }
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
                result[name] = iterate(schemaProp, parentProp);
              else result[name] = iterate(schemaProp, [parentProp]);
            else result[name] = iterate(schemaProp, parentProp);
          }
        
        return result;
      }
    }
  
    return iterate(schema, obj, "root");
}

module.exports = createDefaults;
