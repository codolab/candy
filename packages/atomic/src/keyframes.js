import { stringify, createClassName } from "candy-utils";
import sheet from "candy-sheet";

import css2obj from "./css2obj";
import { createBlocks } from "./rule";
import { cache } from "./cache";

export default function keyframes(val, ...exprs) {
  const ctx = this || {};
  const keyframe = Array.isArray(val) ? css2obj(val, exprs) : val;
  const _key = `keyframes.${ctx.name || ""}`;
  const valueString = stringify(keyframe);
  const cached = cache.get(_key, valueString);
  if (cached) {
    sheet.insert(cached.rule, true);
    return cached.className;
  }
  const className = ctx.name || createClassName("_", _key, valueString, "");
  const steps =
    "{" +
    Object.keys(keyframe)
      .map((step) => {
        const rule = keyframe[step];
        const block = createBlocks(rule);
        return `${step}${block}`;
      })
      .join("") +
    "}";
  const rule = `@keyframes ${className}${steps}`;
  cache.set(_key, valueString, {
    selector: null,
    rule,
    className,
    val: valueString,
  });
  sheet.insert(rule, true);
  return className;
}
