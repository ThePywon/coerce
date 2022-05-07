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
      const parsed = parseInt(val);
      if(!isNaN(parsed)) return parsed;

      if(SchemaType.defaultCheck(val) && typeof val.valueOf === "function") {
        const valOf = parseInt(val.valueOf());
        if(!isNaN(valOf)) return valOf;
      }
    }
    else return val;
  }
}
// Simple toString function override
_Number_.prototype.toString = function toString() { return "Number" }

// Export
module.exports = _Number_;
