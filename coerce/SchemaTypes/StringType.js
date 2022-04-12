// Import
const SchemaType = require("../SchemaType");

// Check if value is valid (not undefined, null or NaN)
function isValid(val) {
  return !(val === undefined || val === null ||
           typeof val === "number" && isNaN(val));
}

// StringType class definition
class StringType extends SchemaType {
  // Initialization
  constructor() { super() }

  // Conversion
  call(val) { if(isValid(val)) return val.toString() }
}
// Simple toString function override
StringType.prototype.toString = function toString() {
  return "String";
}

// Export
module.exports = StringType;
