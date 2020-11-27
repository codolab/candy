import { Configuration, warn } from "candy-moon-engine";
import _classic from "candy-classic";

import cls from "./cls";
import sx from "./sx";

const classic = _classic.bind({ append: true });

const obj2class = (styles) => {
  const parsed = typeof styles === "object" ? sx.raw(styles) : cls.raw(styles);
  const { classic: c, ...finalStyles } = parsed;
  let classicClass = "";
  for (let i in c) {
    classicClass += classic(c[i], i) + " ";
  }
  return (classicClass || "") + classic(finalStyles);
};

const getStylesCreator = (stylesOrCreator, props) => {
  if (typeof stylesOrCreator === "function") {
    return obj2class(stylesOrCreator(props));
  }
  return obj2class(stylesOrCreator);
};

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
    warn(`Can't find component ${key}`);
    return styles;
  }

  const { variants = {}, ...component } = _component;
  for (let k in component) {
    if (Array.isArray(options.keys) && !options.keys.includes(k)) {
      continue;
    }
    const stylesOrCreator = component[k];
    const stylesCreator = getStylesCreator(stylesOrCreator, options.props);
    styles[k] = stylesCreator;
  }

  for (let k in variants) {
    if (Array.isArray(options.keys) && !options.keys.includes(k)) {
      continue;
    }
    const stylesOrCreator = variants[k][options.props[k]];
    if (!stylesOrCreator) {
      warn(`Can't find variant ${k}.${options.props[k]} in ${key}`);
      continue;
    }
    const stylesCreator = getStylesCreator(stylesOrCreator, options.props);
    styles[k] = stylesCreator;
  }
  return styles;
}

const makeStyles = (key) => {
  return (props, keys) => useStyles(key, props, keys);
};

export default makeStyles;
