"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const highlight_1 = tslib_1.__importDefault(require("./highlight"));
const Options = {
    html: true,
    typographer: true,
    xhtmlOut: true,
    highlight: highlight_1.default,
};
exports.default = Options;
