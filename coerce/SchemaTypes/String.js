"use strict";

// Import
const SchemaType = require("../SchemaType");

// _String_ class definition
class _String_ extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) {
    if(super.defined(val) && typeof val.toString === "function") {
      const str = val.toString();
      if(typeof str === "string") return str;
    }
  }
}
// Simple toString function override
_String_.prototype.toString = function toString() {
  return "String";
}

// Export
module.exports = _String_;
