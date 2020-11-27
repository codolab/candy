import { system } from "candy-system";

const config = {
  bgAttachment: {
    transform(value) {
      return { backgroundAttachment: value.replace("bg-", "") };
    },
    translate(val) {
      return val;
    },
  },
  bgClip: {
    transform(value) {
      switch (value) {
        case "border":
          return { backgroundClip: "border-box" };
        case "padding":
          return { backgroundClip: "padding-box" };
        case "content":
          return { backgroundClip: "content-box" };
        case "text":
          return { backgroundClip: "text" };
        default:
          return null;
      }
    },
    translate(val) {
      return val;
    },
  },
  bgPosition: {
    transform(val) {
      return { backgroundPosition: val.replace("bg-", "").replace("-", " ") };
    },
    translate(val) {
      return val;
    },
  },
  bgRepeat: {
    transform(val) {
      switch (val) {
        case "bg-repeat-round":
        case "bg-repeat-space":
          return { backgroundRepeat: val.replace("bg-repeat-", "") };
        default:
          return { backgroundRepeat: val.replace("bg-", "") };
      }
    },
    translate(val) {
      return val;
    },
  },
  bgImage: {
    transform(val) {
      return { backgroundImage: val.replace("bg-", "").replace("-", " ") };
    },
    translate(val) {
      return val;
    },
  },
};

export const background = system(config);
export default background;
