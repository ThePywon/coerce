// SchemaType class definition
class SchemaType {
  // Force function "call" to exist
  constructor() {
    if(!this.call || typeof this.call !== "function")
      throw new Error("Cannot create new instance of SchemaType without function 'call'");
  }
}
// Default toString function
SchemaType.prototype.toString = function toString() {
  return `[${this.constructor.name} SchemaType]`
}

// Export
module.exports = SchemaType;
