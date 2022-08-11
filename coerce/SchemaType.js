"use strict";

// Imports
const util = require("util");

// SchemaType class definition
class SchemaType {

  // Initialization
  constructor() {
    // Throw error if 'call' is not a function
    if(typeof this.call !== "function" || util.inspect((this.call.prototype||this.call)
    .constructor).startsWith("[class"))
      throw new Error("Invalid value at property 'call', expected function");
  }
}
// Default toString function
SchemaType.prototype.toString = function toString() {
  return `[SchemaType ${this.constructor.name}]`;
}

// Export
module.exports = Object.freeze(SchemaType);
