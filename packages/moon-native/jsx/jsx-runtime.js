import * as ReactJSXRuntime from "react/jsx-runtime";
import { createProps, hasOwnProperty } from "./createProps";

export const Fragment = ReactJSXRuntime.Fragment;

export function jsx(type, _props, key) {
  if (
    _props == null ||
    (!hasOwnProperty.call(_props, "cls") &&
      !hasOwnProperty.call(_props, "sx") &&
      !hasOwnProperty.call(_props, "css"))
  ) {
    return ReactJSXRuntime.jsx(type, _props, key);
  }
  const props = createProps(type, _props);

  return ReactJSXRuntime.jsx(type, props, key);
}

export function jsxs(type, _props, key) {
  if (
    _props == null ||
    (!hasOwnProperty.call(_props, "cls") &&
      !hasOwnProperty.call(_props, "sx") &&
      !hasOwnProperty.call(_props, "css"))
  ) {
    return ReactJSXRuntime.jsxs(type, _props, key);
  }
  const props = createProps(type, _props);

  return ReactJSXRuntime.jsxs(type, props, key);
}
