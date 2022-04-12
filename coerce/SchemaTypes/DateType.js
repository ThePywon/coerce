// Import
const SchemaType = require("../SchemaType");

// DateType class definition
class DateType extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) {
    const result = new Date(val);
    return !isNaN(result) ? result : undefined;
  }
}
// Simple toString function override
DateType.prototype.toString = function toString() {
  return "Date";
}

// Export
module.exports = DateType;
