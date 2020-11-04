import { system } from "@candy/system";

const config = {
  bg: {
    property: "background",
    scale: "colors",
  },
  bgColor: {
    property: "backgroundColor",
    scale: "colors",
  },
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
};

config.backgroundColor = config.bgColor;

export const background = system(config);
export default background;
