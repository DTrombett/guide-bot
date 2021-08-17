import type { Remarkable } from "remarkable";
import highlight from "./highlight";

const Options: Remarkable.Options = {
	html: true,
	typographer: true,
	xhtmlOut: true,
	highlight,
};
export default Options;
