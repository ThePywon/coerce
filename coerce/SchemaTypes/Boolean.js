"use strict";

// Import
const SchemaType = require("../SchemaType");

// _Boolean_ class definition
class _Boolean_ extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) { return super.defaultCheck(val) ? val : undefined }
}
// Simple toString function override
_Boolean_.prototype.toString = function toString() { return "Boolean" }

// Export
module.exports = _Boolean_;
