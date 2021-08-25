"use strict";

const {
	promises: { readFile },
} = require("fs");
const { join } = require("path");

/**
 * Data for a file, containing the content and the name.
 * @typedef {{ content: Buffer; fileName: string; }}  FileData
 */

/**
 * Read a guide content from its file name.
 * @param {string} fileName - The name of the file
 * @returns {Promise<FileData>} A promise with the data of the file
 */
module.exports = (fileName) =>
	readFile(join(__dirname, "../../guides", fileName)).then((content) => ({ content, fileName }));
