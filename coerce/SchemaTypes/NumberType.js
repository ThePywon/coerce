// Import
const SchemaType = require("../SchemaType");

// NumberType class definition
class NumberType extends SchemaType {
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
NumberType.prototype.toString = function toString() {
  return "Number";
}

// Export
module.exports = NumberType;
