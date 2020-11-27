import { system } from "candy-system";

export const config = {
  justify: {
    property: "justifyContent",
    transform(val) {
      switch (val) {
        case "center":
          return "center";
        case "start":
          return "flex-start";
        case "end":
          return "flex-end";
        case "between":
          return "space-between";
        case "around":
          return "space-around"
        case "evenly":
          return "space-evenly";
        default:
          return null;
      }
    },
  },
  content: {
    property: "alignContent",
    transform(val) {
      switch (val) {
        case "center":
          return "center";
        case "start":
          return "flex-start";
        case "end":
          return "flex-end";
        case "between":
          return "space-between";
        case "around":
          return "space-around"
        case "evenly":
          return "space-evenly";
        default:
          return null;
      }
    },
  },
  items: {
    property: "alignItems",
    transform(val) {
      switch (val) {
        case "center":
          return "center";
        case "start":
          return "flex-start";
        case "end":
          return "flex-end";
        case "baseline":
          return "baseline";
        case "stretch":
          return "stretch";
        default:
          return null;
      }
    }
  },
  self: {
    property: "alignSelf",
    transform(val) {
      switch (val) {
        case "center":
          return "center";
        case "start":
          return"flex-start";
        case "end":
          return "flex-end";
        case "auto":
          return "auto";
        case "stretch":
          return "stretch";
        default:
          return null;
      }
    }
  },
  placeContent: {
    property: "placeContent",
    transform(val) {
      switch (val) {
        case "center":
          return "center";
        case "start":
          return "start";
        case "end":
          return "end";
        case "between":
          return "space-between";
        case "around":
          return "space-around";
        case "evenly":
          return "space-evenly";
        case "stretch":
          return "stretch";
        default:
          return null;
      }
    }
  },
};

export const boxAlignment = system(config);
export default boxAlignment;
