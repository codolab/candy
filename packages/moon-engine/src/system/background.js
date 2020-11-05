import { system } from "@candy/system";
import { getColorConfig } from "./util";

const config = {
  bg: getColorConfig("background"),
  bgColor: getColorConfig("backgroundColor"),
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
