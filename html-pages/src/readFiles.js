"use strict";

// Import the custom function to read a guide file
const readGuide = require("./readGuide");

/**
 * Filter only markdown files and read all of them, then wrap everything into a Promise.
 * @param {string[]} fileNames - An array of file names in the guides directory
 * @returns {Promise<import("./readGuide").FileData[]>} A promise with an array of files
 */
module.exports = (fileNames) =>
	Promise.all(fileNames.filter((fileName) => fileName.endsWith(".md")).map(readGuide));
