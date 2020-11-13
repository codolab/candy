import * as React from "react";
import { createProps, hasOwnProperty } from "./createProps";

export function jsx(type, _props, ...children) {
  if (!h) {
    throw new Error("You must to setup pragma to use jsx");
  }
  if (
    _props == null ||
    (!hasOwnProperty.call(_props, "cls") &&
      !hasOwnProperty.call(_props, "sx") &&
      !hasOwnProperty.call(_props, "css"))
  ) {
    return React.createElement(type, _props, ...children);
  }
  const props = createProps(type, _props);

  return React.createElement(type, props, ...children);
}
