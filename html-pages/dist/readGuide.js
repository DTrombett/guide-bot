"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.default = (fileName) => fs_1.promises.readFile(path_1.join(__dirname, "../../guides", fileName)).then((html) => ({ html, fileName }));
