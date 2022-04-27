"use strict";

// SchemaType class definition
class SchemaType {
  // Force function "call" to exist
  constructor() {
    if(!this.call || typeof this.call !== "function")
      throw new Error("Cannot create new instance of SchemaType without function 'call'");
  }

  // A function that checks either a value is defined or undefined/null/NaN
  defined(val) {
    if(val === undefined ||
      val === null ||
      typeof val === "number" && isNaN(val))
      return false;
    return true;
  }
}
// Default toString function
SchemaType.prototype.toString = function toString() {
  return `[${this.constructor.name} SchemaType]`
}

// Export
module.exports = SchemaType;
