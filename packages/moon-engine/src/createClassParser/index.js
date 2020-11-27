import clsx from "clsx";
import memoize from "fast-memoize";

import { createLookup } from "./lookup";
import warn from "../util/warn";

const noop = () => null;

const checkIsTag = (val, ...rest) =>
  !!(
    Array.isArray(val) &&
    val.raw &&
    val.raw.length === val.length &&
    Object.isFrozen(val) &&
    rest.length + 1 === val.length
  );

export const createClassParser = (
  processSystem = noop,
  _lookupWithVariant = noop
) => {
  const lookup = createLookup(processSystem);
  const lookupWithVariant = _lookupWithVariant;

  return memoize(
    function parse(values, ...exprs) {
      let strings = values;
      const isTag = checkIsTag(values, ...exprs);
      if (!isTag) {
        strings = [clsx(values, ...exprs)];
      }
      
      const rules = strings
        .reduce(
          (str, rule, i) =>
            (str += [rule || "", (isTag && exprs[i]) || "" || ""].join("")),
          ""
        )
        .replace(/\s\s+/g, " ")
        .trim()
        .split(" ");

      const alreadySeen = {};
      const styles = rules.reduce((acc, val) => {
        if (!val) return acc;
        const variant = val.match(/.*:/g) ? val.match(/.*:/g)[0] : "";
        const className = val.replace(variant, "");
        if (alreadySeen[val]) 
          warn(`Duplicate class "${val}"`);

        alreadySeen[val] = true;
        const translated = lookup(className);
        if (!translated || Object.keys(translated).length === 0) 
          warn(`Can't translate "${className}"`);

        const translatedWithVariant = lookupWithVariant(
          variant,
          translated,
          acc
        );

        if (translatedWithVariant) return translatedWithVariant;

        return { ...acc, ...translated };
      }, {});

      return styles;
    },
    {
      strategy: memoize.strategies.variadic,
    }
  );
};
