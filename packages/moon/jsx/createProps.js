import { cx as cxFunc, sx as sxFunc, css as cssFunc, clsx } from "candy-moon";

export function createProps(type, _props) {
  const { cx, sx, css, ...props } = _props;
  const prevClass = _props.className || type.className;
  const cssClass = css ? cssFunc(css) : "";
  const cxClass = cx ? cxFunc(cx) : "";
  const sxClass = sx ? sxFunc(sx) : "";
  props.className = clsx(cssClass, cxClass, sxClass, prevClass);

  return props;
}

export const hasOwnProperty = Object.hasOwnProperty;
