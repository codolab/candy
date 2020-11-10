import { system, getValue } from "candy-system";

const scales = [
  { name: "scale", properties: ["--transform-scale-x", "--transform-scale-y"] },
  { name: "scaleX", properties: ["--transform-scale-x"] },
  { name: "scaleY", properties: ["--transform-scale-y"] },
];

const translates = [
  { name: "translateX", properties: ["--transform-translate-x"] },
  { name: "translateY", properties: ["--transform-translate-y"] },
];

const skews = [
  { name: "skewX", properties: ["--transform-skew-x"] },
  { name: "skewY", properties: ["--transform-skew-y"] },
];

const convert2Config = (arr, scale) =>
  arr.reduce((acc, { name, properties }) => {
    return {
      ...acc,
      [name]: {
        properties,
        scale,
        transform(val, scale, _props) {
          const n = getValue(val, scale, _props);
          return `${n} !important`;
        },
      },
    };
  }, {});

export const config = {
  transform: {
    transform(val) {
      if (val === "transform") {
        return {
          classic: {
            transform: {
              "--transform-translate-x": "0",
              "--transform-translate-y": "0",
              "--transform-rotate": "0",
              "--transform-skew-x": "0",
              "--transform-skew-y": "0",
              "--transform-scale-x": "1",
              "--transform-scale-y": "1",
              transform: [
                "translateX(var(--transform-translate-x))",
                "translateY(var(--transform-translate-y))",
                "rotate(var(--transform-rotate))",
                "skewX(var(--transform-skew-x))",
                "skewY(var(--transform-skew-y))",
                "scaleX(var(--transform-scale-x))",
                "scaleY(var(--transform-scale-y))",
              ].join(" "),
            },
          },
        };
      }
      return { transform: val };
    },
    translate(val) {
      return val;
    },
  },
  ...convert2Config(scales, "scale"),
  ...convert2Config(translates, "translate"),
  ...convert2Config(skews, "skew"),
  rotate: {
    properties: ["--transform-rotate"],
    scale: "rotate",
    transform(val, scale, _props) {
      const n = getValue(val, scale, _props);
      return `${n} !important`;
    },
  },
  origin: {
    properties: ["transformOrigin"],
    scale: "transformOrigin",
  },
};

export const transform = system(config);
export default transform;
