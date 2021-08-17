import hljs from "highlight.js";

const highlight = (str: string, lang: string): string => {
	if (lang && hljs.getLanguage(lang))
		try {
			return hljs.highlight(str, { language: lang }).value;
		} catch (err: unknown) {
			console.error(err);
		}
	try {
		return hljs.highlightAuto(str).value;
	} catch (err: unknown) {
		console.error(err);
	}
	return "";
};

export default highlight;
