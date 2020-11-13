import { cls as clsFunc, sx as sxFunc, css as cssFunc, clsx } from "candy-moon";

export function createProps(type, _props) {
  const { cls, sx, css, ...props } = _props;
  const prevClass = _props.className || type.className;
  const cssClass = css ? cssFunc(css) : "";
  const clsClass = cls ? clsFunc(cls) : "";
  const sxClass = sx ? sxFunc(sx) : "";
  props.className = clsx(cssClass, clsClass, sxClass, prevClass);

  return props;
}

export const hasOwnProperty = Object.hasOwnProperty;
