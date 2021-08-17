import { promises } from "fs";
import { join } from "path";

export default (fileName: string): Promise<{ html: Buffer; fileName: string }> =>
	promises.readFile(join(__dirname, "../../guides", fileName)).then((html) => ({ html, fileName }));
