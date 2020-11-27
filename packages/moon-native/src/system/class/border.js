import { system, get } from "candy-system";

const borders = [
  { name: "borderS", prefix: "border-s", properties: ["borderStartWidth"] },
  { name: "borderE", prefix: "border-e", properties: ["borderEndWidth"] },
];

export const config = borders.reduce((acc, { name, prefix, properties }) => {
  return {
    ...acc,
    [name]: {
      properties,
      scale: "borderWidth",
      transform(val, scale, _props) {
        const finalVal = val === prefix ? "base" : val;
        const n = get(scale, finalVal, null);
        if (!n) return null;
        return n;
      },
    },
  };
}, {});

export const border = system(config);
export default border;
