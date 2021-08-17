import readGuide from "./readGuide";

export type FileData = {
	html: Buffer;
	fileName: string;
};

export default (fileNames: string[]): Promise<FileData[]> =>
	Promise.all(fileNames.filter((fileName) => fileName.endsWith(".md")).map(readGuide));
