import { minifier, createClassName, hyphenateStyleName, px } from "candy-utils";
import sheet from "candy-sheet";

import keyframes from "./keyframes";
import createRule from "./rule";
import { cache } from "./cache";
import { normalizeSelByProp } from "./normalize";

const noop = (val) => val;
/**
 *
 * Compile css style object into a class
 * @param {Object} obj
 * @param {String} parent
 * @param {Array|null} media
 * @returns {String} classes
 */
export const createCompile = (sort = noop) => (
  obj,
  parent = "",
  media = null
) => {
  return sort(Object.keys(obj))
    .map((key) => {
      const val = obj[key];
      if (val === null || val === undefined) return "";
      if (key === "keyframes") {
        for (let name in val) {
          keyframes.call({ name }, val[name]);
        }
        return "";
      }
      if (key.startsWith("@keyframes")) {
        const name = key.split(" ")[1];
        keyframes.call({ name }, val);
        return "";
      }
      if (typeof val === "object") {
        const media2 = /^@/.test(key) ? [...(media || []), key] : null;
        const parent2 = media2 ? parent : parent + key;
        return compile(val, parent2, media2 || media);
      }
      const prop = hyphenateStyleName(key);
      const normalizedVal = px(val, prop);

      const _key = minifier(
        (Array.isArray(media) ? media.join("") : "") + parent + prop
      );

      const cached = cache.get(_key, val);
      if (cached) {
        sheet.insert(cached.rule, !!media);
        return cached.className;
      }

      const className = createClassName("_", prop, normalizedVal, _key);
      const selector = normalizeSelByProp(`.${className}`, parent);
      const rule = createRule(prop, normalizedVal, selector, media);
      cache.set(_key, val, {
        selector,
        rule,
        className,
        val: normalizedVal,
      });
      sheet.insert(rule, !!media);
      return className;
    })
    .join(" ");
};

export const compile = createCompile();
