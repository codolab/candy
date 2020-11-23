const converter = (array, prop) => {
  return array.reduce((acc, val) => ({ ...acc, [val]: prop }), {});
};

const convert2Config = (arr) =>
  Object.keys(arr).reduce((acc, key) => {
    return {
      ...acc,
      ...converter(arr[key], key),
    };
  }, {});

const display = [
  "block",
  "inline-block",
  "inline",
  "flex",
  "inline-flex",
  "table",
  "table-caption",
  "table-cell",
  "table-column",
  "table-column-group",
  "table-footer-group",
  "table-header-group",
  "table-row-group",
  "table-row",
  "flow-root",
  "grid",
  "inline-grid",
  "contents",
  "hidden",
];

const layout = ["container", "visible", "invisible"];

const position = ["static", "fixed", "absolute", "relative", "sticky"];

const direction = ["ltr", "rtl"];

const flexShrink = ["flex-shrink"];

const flexGrow = ["flex-grow"];

const fontSmoothing = ["antialiased", "subpixel-antialiased"];

const fontStyle = ["italic", "not-italic"];

const fontVariantNumeric = [
  "normal-nums",
  "ordinal",
  "slashed-zero",
  "lining-nums",
  "oldstyle-nums",
  "proportional-nums",
  "tabular-nums",
  "diagonal-fractions",
  "stacked-fractions",
];

const textDecoration = [
  "underline", 
  "line-through", 
  "no-underline",
  // rn
  "no-decoration",
  "underline-double",
  "line-through-double",
  "underline-dotted",
  "line-through-dotted",
  "underline-dashed",
  "line-through-dashed",
];

const textTransform = ["uppercase", "lowercase", "capitalize", "normal-case"];

const verticalAlign = [
  "align-baseline",
  "align-top",
  "align-middle",
  "align-bottom",
  "align-text-top",
  "align-text-bottom",
];

const textOverflow = ["truncate", "overflow-ellipsis", "overflow-clip"];

const workBreak = ["break-normal", "break-words", "break-all"];

const bgAttachment = ["bg-fixed", "bg-local", "bg-scroll"];

const bgPosition = [
  "bg-bottom",
  "bg-center",
  "bg-left",
  "bg-left-bottom",
  "bg-left-top",
  "bg-right",
  "bg-right-bottom",
  "bg-right-top",
  "bg-top",
];

const bgRepeat = [
  "bg-repeat",
  "bg-no-repeat",
  "bg-repeat-x",
  "bg-repeat-y",
  "bg-repeat-round",
  "bg-repeat-space",
];

const bgImage = ["bg-none"];

const radii = {
  rounded: ["rounded"],
  roundedT: ["rounded-t"],
  roundedTl: ["rounded-tl"],
  roundedTr: ["rounded-tr"],
  roundedB: ["rounded-b"],
  roundedBl: ["rounded-bl"],
  roundedBr: ["rounded-br"],
  roundedL: ["rounded-l"],
  roundedR: ["rounded-r"],
  // rn
  roundedE: ["rounded-e"],
  roundedS: ["rounded-s"],
  roundedBs: ["rounded-bs"],
  roundedBe: ["rounded-be"],
  roundedTs: ["rounded-ts"],
  roundedTe: ["rounded-te"],
};

const borders = {
  border: ["border"],
  borderT: ["border-t"],
  borderL: ["border-l"],
  borderR: ["border-r"],
  borderB: ["border-b"],
  // rn
  borderE: ["border-e"],
  borderS: ["border-s"],
};

const divide = {
  divideX: ["divide-x"],
  divideY: ["divide-y"],
};

const ring = ["ring"];

const shadow = ["shadow"];

const textShadow = ["text-shadow"];

const fontPadding = ["font-padding"];

const transition = ["transition"];

const transform = ["transform"];

const resize = ["resize"];

const sr = ["sr-only", "not-sr-only"];

// x
export const utilityClassType1 = {
  ...converter(display, "display"),
  ...converter(layout, "layout"),
  ...converter(position, "position"),
  ...converter(direction, "direction"),
  ...converter(flexShrink, "flex"),
  ...converter(flexGrow, "flex"),
  ...converter(fontSmoothing, "fontSmoothing"),
  ...converter(fontStyle, "fontStyle"),
  ...converter(fontVariantNumeric, "fontVariantNumeric"),
  ...converter(textDecoration, "textDecoration"),
  ...converter(textTransform, "textTransform"),
  ...converter(fontPadding, "fontPadding"),
  ...converter(textOverflow, "textOverflow"),
  ...converter(verticalAlign, "verticalAlign"),
  ...converter(workBreak, "break"),
  ...converter(bgAttachment, "bgAttachment"),
  ...converter(bgPosition, "bgPosition"),
  ...converter(bgRepeat, "bgRepeat"),
  ...converter(bgImage, "bgImage"),
  ...convert2Config(radii),
  ...convert2Config(borders),
  ...convert2Config(divide),
  ...converter(ring, "ring"),
  ...converter(shadow, "shadow"),
  ...converter(textShadow, "textShadow"),
  ...converter(transition, "transition"),
  ...converter(transform, "transform"),
  ...converter(resize, "resize"),
  ...converter(sr, "sr"),
};

// x-y => x: "y"
// const utilityClassType2 = [
//   "box",
//   "float",
//   "clear",
//   "object",
//   "overflow",
//   "overscroll",
//   "inset",
//   "top",
//   "right",
//   "bottom",
//   "left",
//   "z",
//   "flex",
//   "order",
//   "col",
//   "row",
//   "gap",
//   "justify",
//   "content",
//   "items",
//   "self",
//   "p",
//   "px",
//   "py",
//   "m",
//   "mx",
//   "my",
//   "-m",
//   "-mx",
//   "-my",
//   "w",
//   "h",
//   "font",
//   "text",
//   "font",
//   "tracking",
//   "leading",
//   "list",
//   "placeholder",
//   "align",
//   "whitespace",
//   "break",
//   "bg",
//   "from",
//   "rounded",
//   "border",
//   "divide",
//   "table",
//   "shadow",
//   "opacity",
//   "transition",
//   "duration",
//   "ease",
//   "delay",
//   "animate",
//   "scale",
//   "rotate",
//   "-rotate",
//   "origin",
//   "appearance",
//   "cursor",
//   "outline",
//   "resize",
//   "select",
//   "fill",
//   "stroke",
// ];

// x-y-z => xY: "z"
export const utilityClassType3 = [
  "overflow-y",
  "overflow-x",
  "overscroll-y",
  "overscroll-x",
  "inset-y",
  "inset-x",
  "flex-grow",
  "flex-shrink",
  "grid-cols",
  "col-span",
  "col-start",
  "col-end",
  "grid-rows",
  "row-span",
  "row-start",
  "row-end",
  "grid-flow",
  "auto-cols",
  "auto-rows",
  "gap-x",
  "gap-y",
  "justify-items",
  "justify-self",
  "place-content",
  "place-items",
  "place-self",
  "space-y",
  "space-x",
  "-space-y",
  "-space-x",
  "min-w",
  "min-h",
  "max-w",
  "max-h",
  "placeholder-opacity",
  "text-opacity",
  "bg-clip",
  "bg-opacity",
  "bg-gradient",
  "rounded-t",
  "rounded-r",
  "rounded-b",
  "rounded-l",
  "rounded-s",
  "rounded-e",
  "rounded-tl",
  "rounded-tr",
  "rounded-ts",
  "rounded-te",
  "rounded-bl",
  "rounded-br",
  "rounded-bs",
  "rounded-be",
  "border-t",
  "border-r",
  "border-b",
  "border-l",
  "border-s",
  "border-e",
  "border-opacity",
  "divide-y",
  "divide-x",
  "divide-opacity",
  "ring-opacity",
  "ring-offset",
  "scale-y",
  "scale-x",
  "translate-x",
  "translate-y",
  "-translate-x",
  "-translate-y",
  "skew-x",
  "skew-y",
  "-skew-x",
  "-skew-y",
  "pointer-events",
  // rn
  "text-shadow",
  "text-align",
  "decoration-opacity",
  "font-padding",
  "tint-opacity",
  "overlay-opacity",
];
