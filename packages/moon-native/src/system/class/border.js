import { system, getValue } from "candy-system";

export const config = borders.reduce((acc, { name, prefix, properties }) => {
  return {
    ...acc,
    [name]: {
      properties,
      scale: "borderWidth",
      transform(val, scale, _props) {
        const finalVal = val === prefix ? "base" : val;
        const n = getValue(finalVal, scale, _props);
        return n;
      },
    },
  };
}, {});

export const border = system(config);
export default border;
