"use strict";

// Import
const _Number_ = require("./Number");

// Integer class definition
class Integer extends _Number_ {
    // Initialization
    constructor() {
        super();
    }

    // Conversion
    call(val) {
        val = super.call(val);

        if(val === undefined) return;

        return Number.isInteger(val) ? val : parseInt(val);
    }
}
// Simple toString function override
Integer.prototype.toString = function toString() {
    return "Integer";
}

// Export
module.exports = Integer;
