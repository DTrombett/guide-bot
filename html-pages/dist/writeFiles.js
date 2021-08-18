"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const writeHTML_1 = tslib_1.__importDefault(require("./writeHTML"));
exports.default = (md) => async (files) => Promise.all(files.map(writeHTML_1.default(md)));
