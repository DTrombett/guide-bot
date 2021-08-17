"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const highlight_js_1 = tslib_1.__importDefault(require("highlight.js"));
const highlight = (str, lang) => {
    if (lang && highlight_js_1.default.getLanguage(lang))
        try {
            return highlight_js_1.default.highlight(str, { language: lang }).value;
        }
        catch (err) {
            console.error(err);
        }
    try {
        return highlight_js_1.default.highlightAuto(str).value;
    }
    catch (err) {
        console.error(err);
    }
    return "";
};
exports.default = highlight;
