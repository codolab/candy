import { system } from "@candy/system";

export const config = {
  justify: {
    transform(val) {
      switch (val) {
        case "center":
          return { justifyContent: "center" };
        case "start":
          return { justifyContent: "flex-start" };
        case "end":
          return { justifyContent: "flex-end" };
        case "between":
          return { justifyContent: "space-between" };
        case "around":
          return { justifyContent: "space-around" };
        case "evenly":
          return { justifyContent: "space-evenly" };
        default:
          return val;
      }
    },
    translate(transformedVal) {
      if (typeof transformedVal === "object") return transformedVal;
      return null;
    },
  },
  content: {
    transform(val) {
      switch (val) {
        case "center":
          return { alignContent: "center" };
        case "start":
          return { alignContent: "flex-start" };
        case "end":
          return { alignContent: "flex-end" };
        case "between":
          return { alignContent: "space-between" };
        case "around":
          return { alignContent: "space-around" };
        case "evenly":
          return { alignContent: "space-evenly" };
        default:
          return val;
      }
    },
    translate(transformedVal) {
      if (typeof transformedVal === "object") return transformedVal;
      return null;
    },
  },
  items: {
    transform(val) {
      switch (val) {
        case "center":
          return { alignItems: "center" };
        case "start":
          return { alignItems: "flex-start" };
        case "end":
          return { alignItems: "flex-end" };
        case "baseline":
          return { alignItems: "baseline" };
        case "stretch":
          return { alignItems: "stretch" };
        default:
          return val;
      }
    },
    translate(transformedVal) {
      if (typeof transformedVal === "object") return transformedVal;
      return null;
    },
  },
  self: {
    transform(val) {
      switch (val) {
        case "center":
          return { alignSelf: "center" };
        case "start":
          return { alignSelf: "flex-start" };
        case "end":
          return { alignSelf: "flex-end" };
        case "auto":
          return { alignSelf: "auto" };
        case "stretch":
          return { alignSelf: "stretch" };
        default:
          return val;
      }
    },
    translate(transformedVal) {
      if (typeof transformedVal === "object") return transformedVal;
      return null;
    },
  },
  placeContent: {
    transform(val) {
      switch (val) {
        case "center":
          return { placeContent: "center" };
        case "start":
          return { placeContent: "start" };
        case "end":
          return { placeContent: "end" };
        case "between":
          return { placeContent: "space-between" };
        case "around":
          return { placeContent: "space-around" };
        case "evenly":
          return { placeContent: "space-evenly" };
        case "stretch":
          return { placeContent: "stretch" };
        default:
          return val;
      }
    },
    translate(transformedVal) {
      if (typeof transformedVal === "object") return transformedVal;
      return null;
    },
  },
};

export const boxAlignment = system(config);
export default boxAlignment;
