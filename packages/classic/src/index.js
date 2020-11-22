import { stringify, createClassName } from "candy-utils";
import sheet from "candy-sheet";

import obj2css from "./obj2css";

const media = (style) =>
  Object.keys(style)[0] &&
  typeof Object.keys(style)[0] === "string" &&
  /^@/.test(Object.keys(style)[0]);

export default function classic(style, name) {
  const ctx = this || {};
  const className = createClassName("css-", name, stringify(style), "");
  const css = obj2css(style, {
    selector: `.${className}`,
  });
  const rules = `.${className}${css}`;
  sheet.insert(rules, media(style), ctx.append);
  return className;
}
