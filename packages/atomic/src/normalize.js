import { hyphenateStyleName } from "candy-utils";

export const normalizeSelByProp = (selector, property) => {
  let out = selector;
  if (/^@/.test(property) && !/&/g.test(property)) {
    return out;
  }
  if (property && selector) {
    out = selector.replace(/([^,])+/g, (sel) => {
      return property.replace(/([^,])+/g, (prop) => {
        if (/&/g.test(prop)) return prop.replace(/&/g, sel);
        return sel ? sel + " " + prop : prop;
      });
    });
  }
  return out;
};
