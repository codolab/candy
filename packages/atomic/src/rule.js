export const createBlock = (prop, val) => {
  if (Array.isArray(val)) {
    return val.map((v) => `${prop}:${v}`).join(";");
  }
  return `${prop}:${val}`;
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
