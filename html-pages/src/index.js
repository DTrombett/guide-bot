"use strict";

// Import built-in modules
const {
	promises: { readdir },
} = require("fs");
const { join } = require("path");

// Import the Remarkable module
const { Remarkable } = require("remarkable");
const { linkify } = require("remarkable/linkify");

// Import the utilities functions
const Options = require("./Options");
const readFiles = require("./readFiles");
const writeFiles = require("./writeFiles");

// Start a timer for the operation
console.time("Deploy HTML pages");

// Create a new Remarkable object with the linkify plugin
const md = new Remarkable(Options).use(linkify);

// Read the name of all guides
readdir(join(__dirname, "../../guides"))
	// Read all the files
	.then(readFiles)
	// Convert all the markdown files to html and write them to the pages directory
	.then(writeFiles(md))
	// Log the total time of the process
	.then(() => {
		console.timeEnd("Deploy HTML pages");
	});
