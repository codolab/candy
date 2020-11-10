import { system, getValue } from "candy-system";

const radii = [
  {
    name: "roundedS",
    prefix: "rounded-s",
    properties: ["borderTopStartRadius", "borderBottomStartRadius"],
  },
  {
    name: "roundedE",
    prefix: "rounded-e",
    properties: ["borderTopEndRadius", "borderBottomEndRadius"],
  },
  {
    name: "roundedTs",
    prefix: "rounded-ts",
    properties: ["borderTopStartRadius"],
  },
  {
    name: "roundedTe",
    prefix: "rounded-te",
    properties: ["borderTopEndRadius"],
  },
  {
    name: "roundedBs",
    prefix: "rounded-bs",
    properties: ["borderBottomStartRadius"],
  },
  {
    name: "roundedBe",
    prefix: "rounded-te",
    properties: ["borderBottomEndRadius"],
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
        const n = getValue(finalVal, scale, _props);
        return n;
      },
    },
  };
}, {});

export const borderRadius = system(config);
export default borderRadius;
