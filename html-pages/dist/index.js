"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const path_1 = require("path");
const remarkable_1 = require("remarkable");
const linkify_1 = require("remarkable/linkify");
const Options_1 = tslib_1.__importDefault(require("./Options"));
const readFiles_1 = tslib_1.__importDefault(require("./readFiles"));
const writeFiles_1 = tslib_1.__importDefault(require("./writeFiles"));
const startDate = Date.now();
const md = new remarkable_1.Remarkable(Options_1.default).use(linkify_1.linkify);
fs_1.promises
    .readdir(path_1.join(__dirname, "../../guides"))
    .then(readFiles_1.default)
    .then(writeFiles_1.default(md))
    .then(() => {
    console.log(`Completed in ${Date.now() - startDate}ms`);
})
    .catch(console.error);
