// Import
const SchemaType = require("../SchemaType");

// Check if value is valid (not undefined, null or NaN)
function isValid(val) {
  return !(val === undefined || val === null ||
           typeof val === "number" && isNaN(val));
}

// BooleanType class definition
class BooleanType extends SchemaType {
  // Initialisation
  constructor() { super() }

  // Conversion
  call(val) { if(isValid(val)) return !!val }
}
// Simple toString function override
BooleanType.prototype.toString = function toString() {
  return "Boolean";
}

// Export
module.exports = BooleanType;
