"use strict";

/**
 * @type {import("highlight.js").default}
 */
// @ts-ignore
const highlightjs = require("highlight.js");

const { highlightAuto, getLanguage, highlight } = highlightjs;

/**
 * Highlight all code blocks with highlight.js classes.
 * @param {string} str - The codeblock
 * @param {string} language - The language of the codeblock
 * @returns {string} The highlighted codeblock
 */
const renderCodeBlocks = (str, language) => {
	if (language && getLanguage(language))
		try {
			return highlight(str, { language }).value;
		} catch (err) {
			console.error(err);
		}
	try {
		return highlightAuto(str).value;
	} catch (err) {
		console.error(err);
	}
	return "";
};

module.exports = renderCodeBlocks;
