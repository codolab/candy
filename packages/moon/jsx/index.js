import { cx as cxFunc, sx as sxFunc, css as cssFunc, clsx } from "candy-moon";

const hasOwnProperty = Object.hasOwnProperty;
let h;

export function setup(pragma) {
  h = pragma;
}

function createProps(type, _props) {
  const { cx, sx, css, ...props } = _props;
  const prevClass = _props.className || type.className;
  const cssClass = css ? cssFunc(css) : "";
  const cxClass = cx ? cxFunc(cx) : "";
  const sxClass = sx ? sxFunc(sx) : "";
  props.className = clsx(cssClass, cxClass, sxClass, prevClass);

  return props;
}

export function jsx(type, _props, ...children) {
  if (!h) {
    throw new Error("You must to setup pragma to use jsx");
  }
  if (
    _props == null ||
    (!hasOwnProperty.call(_props, "cx") &&
      !hasOwnProperty.call(_props, "sx") &&
      !hasOwnProperty.call(_props, "css"))
  ) {
    const args = arguments;
    // $FlowFixMe
    return h.apply(undefined, args);
  }
  const props = createProps(type, _props);

  return h(type, props, ...children);
}
