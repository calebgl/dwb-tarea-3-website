import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("csharp", csharp);

// An exceptionally useful comment
export const highlight = () => {
	hljs.highlightAll();
};

export const hola: string = "";
