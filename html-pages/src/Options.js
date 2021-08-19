"use strict";

// Import the custom function to render codeblocks
const highlight = require("./renderCodeBlocks");

/**
 * Options to convert markdown into html
 * @type {import("remarkable/lib").Options}
 */
const Options = {
	// Allow HTML tags
	html: true,
	// Enable prettier
	typographer: true,
	// Close single tags
	xhtmlOut: true,
	// Highlight codeblocks
	highlight,
};

module.exports = Options;
