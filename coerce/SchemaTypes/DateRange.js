"use strict";

// Import
const _Date_ = require("./Date");

const validator = new _Date_();

function DateRange(min, max) {
  // Parse parameters
  min = validator.call(min);
  max = validator.call(max);

  // Validate parameters
  if(min === undefined)
    throw new Error("Invalid passed value for parameter 'min', expected Date.");
  if(max === undefined)
    throw new Error("Invalid passed value for parameter 'max', expected Date.");
  if(min > max)
    throw new Error("Invalid passed value for parameter 'min', must not be higher than parameter 'max'");

  // Create temp class
  const result = class extends _Date_ {
    // Initialization
    constructor() {
      super();
    }

    // Conversion
    call(val) {
      val = super.call(val);

      if(val === undefined) return;

      if(val >= min && val <= max)
        return val;
    }
  }
  result.prototype.toString = function toString() {
    return `DateRange(${min}, ${max})`;
  }

  // Return temp class
  return result;
}

module.exports = DateRange;
