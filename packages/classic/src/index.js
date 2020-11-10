import { stringify, createClassName } from "candy-utils";
import sheet from "candy-sheet";

import obj2css from "./obj2css";

export default function classic(style, name) {
  const className = createClassName("css-", name, stringify(style), "");
  const css = obj2css(style, {
    selector: `.${className}`,
  });
  const rules = `.${className}${css}`;
  sheet.insert(rules);
  return className;
}
