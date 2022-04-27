"use strict";

// Import
const SchemaType = require("../SchemaType");

// _Date_ class definition
class _Date_ extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) {
    const result = new Date(val);
    if(!isNaN(result))
      return result;
  }
}
// Simple toString function override
_Date_.prototype.toString = function toString() {
  return "Date";
}

// Export
module.exports = _Date_;
