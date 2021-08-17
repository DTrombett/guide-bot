import { promises } from "fs";
import { join } from "path";
import type { Remarkable } from "remarkable";
import type { FileData } from "./readFiles";

export default (
		md: Remarkable
	): ((value: FileData, index: number, array: FileData[]) => Promise<void>) =>
	({ fileName, html }) =>
		promises.writeFile(
			join(__dirname, "../../pages", [...fileName.split(".").slice(0, -1), "html"].join(".")),
			md
				.render(html.toString())
				.replace(/<code>/gu, '<code style="padding: 3px 5px; background: #f0f0f0; color: #444;">')
				.replace(
					/<code class="language-js">/gu,
					'<code style="background: #f0f0f0; color: #444; padding: 1em; overflow-x: auto; display: block;">'
				)
				.replace(/<span class="hljs-comment(| [a-zA-Z]+_)">/gu, '<span style="color: #888">')
				.replace(
					/<span class="hljs-(punctuation|tag)(| [a-zA-Z]+_)">/gu,
					'<span style="color: #444a">'
				)
				.replace(/<span class="hljs-attr(| [a-zA-Z]+_)">/gu, '<span style="color: #444">')
				.replace(
					/<span class="hljs-name(| [a-zA-Z]+_)">/gu,
					'<span style="color: #444; font-weight: 700;">'
				)
				.replace(
					/<span class="hljs-(attribute|doctag|keyword|selector-tag)(| [a-zA-Z]+_)">/gu,
					'<span style="font-weight: 700;">'
				)
				.replace(
					/<span class="hljs-meta(| [a-zA-Z]+_)">/gu,
					'<span style="font-weight: 700; color: #1f7199;">'
				)
				.replace(
					/<span class="hljs-(deletion|number|quote|selector-class|selector-id|string|template-tag|type)(| [a-zA-Z]+_)">/gu,
					'<span style="color: #800;">'
				)
				.replace(
					/<span class="hljs-(section|title)(| [a-zA-Z]+_)">/gu,
					'<span style="color: #800; font-weight: 700;">'
				)
				.replace(
					/<span class="hljs-(link|operator|regexp|selector-attr|selector-pseudo|symbol|template-variable|variable)(| [a-zA-Z]+_)">/gu,
					'<span style="color: #bc6060;">'
				)
				.replace(/<span class="hljs-literal(| [a-zA-Z]+_)">/gu, '<span style="color: #78a960;">')
				.replace(
					/<span class="hljs-(addition|built_in|bullet|code)(| [a-zA-Z]+_)">/gu,
					'<span style="color: #397300;">'
				)
				.replace(
					/<span class="hljs-emphasis(| [a-zA-Z]+_)">/gu,
					'<span style="font-style: italic;">'
				)
				.replace(/<span class="hljs-strong(| [a-zA-Z]+_)">/gu, '<span style="font-weight: 700;">')
		);
