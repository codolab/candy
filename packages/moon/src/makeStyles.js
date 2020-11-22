import { Configuration } from "candy-moon-engine";
import _classic from "candy-classic";

import cls from "./cls";

const classic = _classic.bind({ append: true });

export function omit(object, keys) {
  const result = {};

  Object.keys(object).forEach((key) => {
    if (keys.includes(key)) result[key] = object[key];
    return;
  });

  return result;
}

const obj2class = (styles) => {
  const parsed = cls.raw(styles);
  const { classic: c, ...finalStyles } = parsed;
  let classicClass = "";
  for (let i in c) {
    classicClass += classic(c[i], i) + " ";
  }
  return (classicClass || "") + classic(finalStyles);
}

function useStyles(key, props, keys) {
  const config = Configuration.get();
  const styles = {};
  const options = {};
  if (Array.isArray(props) && !keys) {
    options.props = {};
    options.keys = props;
  } else {
    options.props = props || {};
    options.keys = keys;
  }
  const _component = config.components[key];
  if (!_component) {
    console.warn(`Can't find component ${key}`);
    return styles;
  }

  const { variants = {}, ...component } = _component;
  for (let k in component) {
    const styleCreator = component[k];
    if (typeof styleCreator === "function") {
      styles[k] = obj2class(styleCreator(options.props));
    } else styles[k] = obj2class(styleCreator);
  }

  for (let k in variants) {
    const styleCreator = variants[k][props[k]];
    if (!styleCreator) {
      console.warn(`Can't find variant ${k}.${props[k]} in ${key}`);
      continue;
    }
    if (typeof styleCreator === "function") {
      styles[k] = obj2class(styleCreator(options.props));
    } else styles[k] = obj2class(styleCreator);
  }
  if (options.keys) return omit(styles, options.keys);
  return styles;
}

const makeStyles = (key) => {
  return (props, keys) => useStyles(key, props, keys);
};

export default makeStyles;
