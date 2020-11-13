import * as ReactJSXRuntimeDev from "react/jsx-dev-runtime";
import { createProps, hasOwnProperty } from "./createProps";

export const Fragment = ReactJSXRuntimeDev.Fragment;

export function jsxDEV(type, _props, key, isStaticChildren, source, self) {
  if (
    _props == null ||
    (!hasOwnProperty.call(_props, "cls") &&
      !hasOwnProperty.call(_props, "sx") &&
      !hasOwnProperty.call(_props, "css"))
  ) {
    return ReactJSXRuntimeDev.jsxDEV(
      type,
      _props,
      key,
      isStaticChildren,
      source,
      self
    );
  }
  const props = createProps(type, _props);

  return ReactJSXRuntimeDev.jsxDEV(type, props, key, isStaticChildren, source, self);
}
