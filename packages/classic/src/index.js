import { stringify, createClassName } from "candy-utils";
import sheet from "candy-sheet";

import obj2css from "./obj2css";
import cache from "./cache";

const media = (style) =>
  Object.keys(style)[0] &&
  typeof Object.keys(style)[0] === "string" &&
  /^@/.test(Object.keys(style)[0]);

export default function classic(style, name) {
  const ctx = this || {};
  const stringifiedStyle = stringify(style);
  const className = createClassName("css-", name, stringifiedStyle, "");
  const cached = cache.get(className, stringifiedStyle);
  if (cached) {
    sheet.insert(cached.rules, media(style), ctx.append);
    return cached.className;
  }

  const css = obj2css(style, {
    selector: `.${className}`,
  });
  const rules = ctx.global ? css.slice(1, -1) : `.${className}${css}`;
  cache.set(className, stringifiedStyle, {
    rules,
    className,
  });
  sheet.insert(rules, media(style), ctx.append);
  return className;
}
