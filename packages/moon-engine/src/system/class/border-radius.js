import { system, get } from "candy-system";

const radii = [
  { name: "rounded", prefix: "rounded", properties: ["borderRadius"] },
  {
    name: "roundedT",
    prefix: "rounded-t",
    properties: ["borderTopLeftRadius", "borderTopRightRadius"],
  },
  {
    name: "roundedTl",
    prefix: "rounded-tl",
    properties: ["borderTopLeftRadius"],
  },
  {
    name: "roundedTr",
    prefix: "rounded-tr",
    properties: ["borderTopRightRadius"],
  },
  {
    name: "roundedB",
    prefix: "rounded-b",
    properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
  },
  {
    name: "roundedBl",
    prefix: "rounded-bl",
    properties: ["borderBottomLeftRadius"],
  },
  {
    name: "roundedBr",
    prefix: "rounded-br",
    properties: ["borderBottomRightRadius"],
  },
  {
    name: "roundedL",
    prefix: "rounded-L",
    properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
  },
  {
    name: "roundedR",
    prefix: "rounded-r",
    properties: ["borderTopRightRadius", "borderBottomRightRadius"],
  },
];

export const config = radii.reduce((acc, { name, prefix, properties }) => {
  return {
    ...acc,
    [name]: {
      properties,
      scale: "borderRadius",
      transform(val, scale, _props) {
        const finalVal = val === prefix ? "base" : val;
        const n = get(scale, finalVal, null);
        return n;
      },
    },
  };
}, {});

export const borderRadius = system(config);
export default borderRadius;
