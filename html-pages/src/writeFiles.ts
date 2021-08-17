import type { Remarkable } from "remarkable";
import type { FileData } from "./readFiles";
import writeHTML from "./writeHTML";

export default (md: Remarkable) =>
	async (files: FileData[]): Promise<void[]> =>
		Promise.all(files.map(writeHTML(md)));
