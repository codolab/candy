import { system } from "candy-system";
import matchAll from "match-all";

const FONT_VARIANT_REGEX = /(oldstyle-nums|lining-nums|tabular-nums|proportional-nums)/g;

export const config = {
  fontVariantNumeric: {
    property: "fontVariant",
    transform(val) {
      const matches = matchAll(val, FONT_VARIANT_REGEX).toArray();
      if (matches.length > 0) {
        return matches;
      }
      return null;
    },
  },
  fontPadding: {
    property: "includeFontPadding",
    transform(val) {
      if (val === "font-padding") return true;
      return false;
    },
  },
};

export const typography = system(config);
export default typography;
