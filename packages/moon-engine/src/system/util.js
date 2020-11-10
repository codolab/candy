import { getValue } from "candy-system";
import { transformColor } from "../util";

export const getColorConfig = (property, variable) => ({
  property,
  scale: "colors",
  transform(val, scale, _props) {
    const color = getValue(val, scale, _props);
    return transformColor({ color, property, variable });
  },
  translate(val) {
    if (typeof val === "object") return val;
    return null;
  },
});