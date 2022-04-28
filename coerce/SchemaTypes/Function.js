"use strict";

// Import
const SchemaType = require("../SchemaType");
const util = require("util");

const originalToString = String.toString;

// Create _Function_ class
class _Function_ extends SchemaType {
  // Initialization
  constructor() {
    super();
  }

  // Conversion
  call(val) {
    if(typeof originalToString !== "function" ||
       util.types.isProxy(originalToString) ||
       originalToString.name === '' || 
       originalToString.hasOwnProperty("prototype"))
      throw new Error("String.toString is non-native");
    try {
      void originalToString.arguments;
    }
    catch(e) {
      originalToString.toString = (function(){}).toString;
      if(originalToString.toString() !== "function toString() { [native code] }")
        throw new Error("String.toString is non-native");

      if(typeof val === "function") {
        (val.prototype||val).constructor.toString = originalToString;
        if(!(val.prototype||val).constructor
           .toString().startsWith('class'))
          return val;
      }
    }
  }
}
// Simple toString function override
_Function_.prototype.toString = function toString() {
  return "Function";
}

// Export
module.exports = _Function_;
