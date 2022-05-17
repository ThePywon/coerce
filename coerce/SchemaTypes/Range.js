"use strict";

// Import
const _Number_ = require("./Number");
const validator = new _Number_();

/**
 * @param {number} min
 * @param {number} max
 * @returns {typeof _Number_}
 */
function Range(min, max) {
  // Parse parameters
  min = validator.call(min);
  max = validator.call(max);

  // Validate parameters
  if(min === undefined)
    throw new Error("Invalid passed value for parameter 'min', expected Number.");
  if(max === undefined)
    throw new Error("Invalid passed value for parameter 'max', expected Number.");
  if(min > max)
    throw new Error("Invalid passed value for parameter 'min', must not be higher than parameter 'max'");

  // Create temp class
  const result = class RangeInstance extends _Number_ {
    // Initialization
    constructor() { super() }

    // Conversion
    call(val) {
      super.call(val);

      if(val === undefined) return;

      if(val >= min && val <= max)
        return val;
    }
  }
  result.prototype.toString = function toString() { return "Range" }

  // Return temp class
  return result;
}

module.exports = Range;
