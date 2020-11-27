import memoize from "fast-memoize";
import { camelToKebab } from "./util";
import { Configuration } from "./Configuration";

const noop = () => null;

const createLookup = (val) => val;

export const createStyleParser = (
  processSystem = noop,
  _lookupWithVariant = noop
) => {
  // lookup and lookupWithVariant is processSystem and processVariant
  const lookup = createLookup(processSystem);
  const lookupWithVariant = _lookupWithVariant;

  return memoize(
    (styles) => {
      const translate = (property, value) => {
        const config = Configuration.get();
        const { theme } = config;
        if (property.startsWith("_")) {
          const processedProperty = lookupWithVariant({
            variant: camelToKebab(property.slice(1)),
            config,
          });
          if (!processedProperty) return { [property]: translateStyles(value) };
          return {
            [processedProperty[0]]: translateStyles(value),
          };
        }
        if (typeof value === "object")
          return { [property]: translateStyles(value) };
        const translated = lookup({ theme, property, value });
        return translated;
      };

      const translateStyles = (obj) => {
        return Object.keys(obj).reduce((acc, property) => {
          const value = obj[property];
          const translation = translate(property, value);
          return { ...acc, ...translation };
        }, {});
      };

      return translateStyles(styles);
    },
    {
      strategy: memoize.strategies.variadic,
    }
  );
};
