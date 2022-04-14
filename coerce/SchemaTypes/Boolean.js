"use strict";

// Import
const SchemaType = require("../SchemaType");

// Check if value is valid (not undefined, null or NaN)
function isValid(val) {
  return !(val === undefined || val === null ||
           typeof val === "number" && isNaN(val));
}

// _Boolean_ class definition
class _Boolean_ extends SchemaType {
  // Initialisation
  constructor() { super() }

  // Conversion
  call(val) { if(isValid(val)) return !!val }
}
// Simple toString function override
_Boolean_.prototype.toString = function toString() {
  return "Boolean";
}

// Export
module.exports = _Boolean_;
