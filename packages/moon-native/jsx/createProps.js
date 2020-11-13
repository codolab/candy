import { cx as cxFunc, sx as sxFunc, css as cssFunc } from "candy-moon-native";

export function createProps(type, _props) {
  const { cx, sx, css, ...props } = _props;
  const prevClass = _props.style || type.style || {};
  const cxClass = cx ? cxFunc(cx) : null;
  const sxClass = sx ? sxFunc(sx) : null;
  const cssClass = css ? cssFunc(css) : null;
  props.style = [cssClass, cxClass, sxClass, ...prevClass];
  return props;
}

export const hasOwnProperty = Object.hasOwnProperty;
