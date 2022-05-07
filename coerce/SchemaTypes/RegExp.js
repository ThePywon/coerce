"use strict";

// Import
const _String_ = require("./String");

// _RegExp_ class definition
class _RegExp_ extends _String_ {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) {
    if(val instanceof RegExp) return val;

    val = super.call(val);

    if(val === undefined) return;

    try {
      const regexp = new RegExp(val);
      if(regexp.toString() === "/(?:)/" &&
         val != "(?:)")
        return;
      return regexp;
    } catch(e) {}
  }
}
// Simple toString function override
_RegExp_.prototype.toString = function toString() { return "RegExp" }

// Export
module.exports = _RegExp_;
