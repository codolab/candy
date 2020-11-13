import { createProps, hasOwnProperty } from "./createProps";

let h;

export function setup(pragma) {
  h = pragma;
}

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
    return h(type, _props, ...children);
  }
  const props = createProps(type, _props);

  return h(type, props, ...children);
}
