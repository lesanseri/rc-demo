import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => readFileSync(path.join(root, name), "utf8");
let html = read("index.html");
function replaceBlock(start, end, value, legacyStart, legacyEnd) {
  const marked = html.includes(start);
  const from = marked ? html.indexOf(start) : html.lastIndexOf(legacyStart);
  const to = marked ? html.indexOf(end, from) + end.length : html.indexOf(legacyEnd, from);
  if (from < 0 || to < from) throw new Error(`Cannot locate ${start}`);
  html = html.slice(0, from) + start + "\n" + value + "\n" + end + html.slice(to);
}
replaceBlock("/* AIGC_EDITOR_START */", "/* AIGC_EDITOR_END */", read("src/editor.js"), "function xi({", "function wi({values:");
replaceBlock("/* AIGC_BRAND_CONTROLS_START */", "/* AIGC_BRAND_CONTROLS_END */", read("src/brand-controls.js"), "function Ti({", "var Ei=");
replaceBlock("/* AIGC_APP_START */", "/* AIGC_APP_END */", read("src/aigc-layout.js") + "\n" + read("src/strategy-detail.js").replace("__AIGC_REFERENCE_PREVIEW__", "data:image/jpeg;base64," + readFileSync(path.join(root, "assets/remix-reference-preview.jpg")).toString("base64")) + "\n" + read("src/app.js"), "function Jd(){", "(0,we.createRoot)");
const css = `<style id="aigc-creation-layout">\n${read("src/aigc-layout.css")}\n</style>`;
html = html.includes('<style id="aigc-creation-layout">')
  ? html.replace(/<style id="aigc-creation-layout">[\s\S]*?<\/style>/, css)
  : html.replace("</head>", css + "</head>");
writeFileSync(path.join(root, "index.html"), html);
console.log("Updated standalone index.html from src/.");
