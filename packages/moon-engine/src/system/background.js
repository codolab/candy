import { system } from "candy-system";
import { getColorConfig } from "./util";

const config = {
  bg: getColorConfig("background", "--bg-opacity"),
  bgColor: getColorConfig("backgroundColor", "--bg-opacity"),
  backgroundAttachment: true,
  bgAttachment: {
    property: "backgroundAttachment",
  },
  backgroundClip: true,
  bgClip: {
    property: "backgroundClip",
  },
  backgroundPosition: true,
  bgPosition: {
    property: "backgroundPosition",
  },
  backgroundRepeat: true,
  bgRepeat: {
    property: "backgroundRepeat",
  },
  backgroundImage: true,
  bgImage: {
    property: "backgroundImage",
  },
  bgOpacity: {
    property: "--bg-opacity",
    scale: "opacity",
  },
};

config.backgroundColor = config.bgColor;
config.backgroundOpacity = config.bgOpacity;

export const background = system(config);
export default background;
