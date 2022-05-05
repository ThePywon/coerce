"use strict";

const Schema = require("./Schema");
const SchemaType = require("../SchemaType");

/**
 * Coerces an object following a model
 * @param {Schema} schema 
 * @param {Object} obj 
 * @param {SchemaDefaultObject} defaults 
 * @returns {Object} Coerced object
 */
function coerceSchema(schema, obj, defaults) {

    // Iterator
    const iterate = function(schemaParent, parent, defaultParent, path) {
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
  
        return result.length > 0 ? result : defaultParent || result;
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
              result[name] = defaultParent[name] !== undefined ? defaultParent[name] : schemaProp.call();
            else if(Array.isArray(schemaProp))
              result[name] = defaultParent[name] || [];
            else result[name] = iterate(schemaProp, {}, defaultParent[name], path+'.'+name);
  
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
            if(schemaProp instanceof SchemaType) {
              const value = schemaProp.call(parentProp);
              result[name] = value !== undefined ? value : defaultParent[name];
            }
            else if(Array.isArray(schemaProp))
              if(Array.isArray(parentProp))
                result[name] = iterate(schemaProp, parentProp, defaultParent[name], path+'.'+name);
              else result[name] = iterate(schemaProp, 
  parentProp !== undefined ? [parentProp] : [], defaultParent[name], path+'.'+name);
            else result[name] = iterate(schemaProp, parentProp, defaultParent[name], path+'.'+name);
  
            if(result[name] === undefined)
              throw new Error(`Invalid value at ${path}.${name}, expected ${schemaProp.toString()}`);
          }
        
        return result;
      }
    }
  
    return iterate(schema, obj, defaults, "root");
}

module.exports = coerceSchema;
