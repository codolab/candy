import { system } from "candy-system";
import { getColorConfig } from "./util";

export const config = {
  backface: {
    property: "backfaceVisibility",
  },
  backfaceVisibility: true,
  resize: {
    property: "resizeMode",
  },
  resizeMode: true,
  tint: getColorConfig("tintColor", "--tint-opacity"),
  tintOpacity: {
    property: "--tint-opacity",
    scale: "opacity",
  },
  overlay: getColorConfig("overlayColor", "--overlay-opacity"),
  overlayOpacity: {
    property: "--overlay-opacity",
    scale: "opacity",
  },
};

export const image = system(config);
export default image;
