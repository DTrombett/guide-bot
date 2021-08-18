"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const readGuide_1 = tslib_1.__importDefault(require("./readGuide"));
exports.default = (fileNames) => Promise.all(fileNames.filter((fileName) => fileName.endsWith(".md")).map(readGuide_1.default));
