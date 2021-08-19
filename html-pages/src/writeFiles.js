"use strict";

const writeHTML = require("./writeHTML");

/**
 * Map all files, convert into HTML and write them into the pages directory, than return a promise.
 * @param {import("remarkable").Remarkable} md - A Remarkable class to convert markdown into HTML
 * @returns {(files: import("./readGuide").FileData[]) => Promise<any[]>} The function to map, convert and write files
 */
module.exports = (md) => async (files) => Promise.all(files.map(writeHTML(md)));
