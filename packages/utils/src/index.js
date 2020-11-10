import hash from "./hash";

export { default as hyphenateStyleName } from "./hyphenate-style-name";

// export const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
export const IS_NON_DIMENSIONAL = /^(-|f[lo].*?[^se]$|g.{6,}[^ps]$|z|o[pr]|(-w.{6})?li.*?(t|mp)$|an|(bo|s).{5}im|sca|m.{7}[ds]|ta|c.*?[st]$|wido|ini)/;

export const px = (val, property) => {
  if (typeof val === "number" && !IS_NON_DIMENSIONAL.test(property)) {
    return `${val}px`;
  }
  return val;
};

export const createClassName = (prefix, name, value, key) => {
  const hashedString = hash(key + value).toString(36);
  return `${prefix}${hashedString}`;
};

export const minifier = (string) => string.replace(/\s+/g, "").trim();

export const stringify = (obj) =>
  Object.keys(obj).reduce(
    (acc, key) =>
      (acc +=
        key + (typeof obj[key] === "object" ? stringify(obj[key]) : obj[key])),
    ""
  );
