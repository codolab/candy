export const mergeStyles = (acc, prop, translated) => ({
  ...acc,
  [prop]: {
    ...(acc[prop] || {}),
    ...translated,
  },
});

/* 
  &:hover
  {
    &::after {
      
    }
  }
  => {
    &:hover::after {

    }
  }
  &:hover 
  {
    color:
    ---text
    &::after {

    }
  } => {
    &:hover {

    }
    &:hover::after {

    }
  }
*/
export const normalizeByVariant = (style, property) => {
  if (/^@/.test(property) && !/&/g.test(property)) {
    return { [property]: style };
  }

  return Object.keys(style).reduce((acc, key) => {
    const out = key.replace(/([^,])+/g, (prop) => {
      if (/&/g.test(prop) && /&/g.test(property))
        return prop.replace(/&/g, property);
      return property;
    });
    const replaced = out !== property;
    return {
      ...acc,
      [out]: {
        ...acc[out],
        ...(replaced ? style[key] : { [key]: style[key] }),
      },
    };
  }, {});
};

// eg: container : { width: "100%" } => container : { prop1: { prop2: { width: "100%" }}}
export const wrapByProps = (obj, props) => {
  const result = Object.keys(obj).reduce((acc, key) => {
    const val = obj[key];
    const res = props.reduceRight((v, k) => ({ ...normalizeByVariant(v, k) }), val);

    return {
      ...acc,
      [key]: res,
    };
  }, {});
  return result;
};
