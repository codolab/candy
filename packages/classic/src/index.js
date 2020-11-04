import { stringify, createClassName, sheet } from "@candy/utils";
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
