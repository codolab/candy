import { prefixProperty, prefixValue } from "tiny-css-prefixer";

export const createBlock = (prop, val) => {
  let declaration = "";
  if (Array.isArray(val)) {
    declaration = val.map((v) => `${prop}:${v}`).join(";");
  } else declaration = `${prop}:${val}`;
  let block = declaration;
  const flag = prefixProperty(prop);
  if (flag & 0b001) block += `;-ms-${declaration}`;
  if (flag & 0b010) block += `;-moz-${declaration}`;
  if (flag & 0b100) block += `;-webkit-${declaration}`;
  return block;
};

export const createBlocks = (styles) => {
  const blocks = Object.keys(styles)
    .map((property) => {
      return createBlock(property, styles[property]);
    })
    .sort()
    .join(";");

  return `{${blocks};}`;
};

const createRule = (property, val, selector, media) => {
  let block = `{${createBlock(property, val)};}`;
  if (Array.isArray(media)) {
    const before = media.join("{") + "{";
    const after = media.map(() => "}").join("");
    return `${before}${selector}${block}${after}`;
  }
  return `${selector}${block}`;
};

export default createRule;
