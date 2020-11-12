import * as React from "react";
import { cx as cxFunc, sx as sxFunc, css as cssFunc } from "candy-moon-native";

const hasOwnProperty = Object.hasOwnProperty;

function createProps(type, _props) {
  const { cx, sx, css, ...props } = _props;
  const prevClass = _props.style || type.style || {};
  const cxClass = cx ? cxFunc(cx) : null;
  const sxClass = sx ? sxFunc(sx) : null;
  const cssClass = css ? cssFunc(css) : null;
  props.style = [cssClass, cxClass, sxClass, ...prevClass];
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
    return React.createElement.apply(undefined, args);
  }
  const props = createProps(type, _props);

  return React.createElement(type, props, ...children);
}
