import {
  cls as clsFunc,
  sx as sxFunc,
  css as cssFunc,
} from "candy-moon-native";

export function createProps(type, _props) {
  const { cls, sx, css, ...props } = _props;
  const prevClass = _props.style || type.style || {};
  const clsClass = cls ? clsFunc(cls) : null;
  const sxClass = sx ? sxFunc(sx) : null;
  const cssClass = css ? cssFunc(css) : null;
  props.style = [cssClass, clsClass, sxClass, ...prevClass];
  return props;
}

export const hasOwnProperty = Object.hasOwnProperty;
