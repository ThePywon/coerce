"use strict";

// Import
const SchemaType = require("../SchemaType");

// _Number_ class definition
class _Number_ extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) {
    if(typeof val !== "number" || isNaN(val)) {
      val = parseInt(val);
      return !isNaN(val) ? val : undefined;
    }
    return val;
  }
}
// Simple toString function override
_Number_.prototype.toString = function toString() {
  return "Number";
}

// Export
module.exports = _Number_;
