import { promises } from "fs";
import { join } from "path";
import { Remarkable } from "remarkable";
import { linkify } from "remarkable/linkify";
import Options from "./Options";
import readFiles from "./readFiles";
import writeFiles from "./writeFiles";

const startDate = Date.now();
const md = new Remarkable(Options).use(linkify);

promises
	.readdir(join(__dirname, "../../guides"))
	.then(readFiles)
	.then(writeFiles(md))
	.then(() => {
		console.log(`Completed in ${Date.now() - startDate}ms`);
	})
	.catch(console.error);
