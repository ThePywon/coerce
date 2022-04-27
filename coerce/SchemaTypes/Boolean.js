"use strict";

// Import
const SchemaType = require("../SchemaType");

// _Boolean_ class definition
class _Boolean_ extends SchemaType {
  // Initialisation
  constructor() { super() }

  // Conversion
  call(val) { if(super.defined(val)) return !!val }
}
// Simple toString function override
_Boolean_.prototype.toString = function toString() {
  return "Boolean";
}

// Export
module.exports = _Boolean_;
