import { system } from "@candy/system";

export const config = {
  border: true,
  borderWidth: true,
  borderStyle: true,
  borderColor: {
    property: "borderColor",
    scale: "colors",
  },
  //
  borderTop: true,
  borderTopWidth: {
    property: "borderTopWidth",
    scale: "borderWidth",
  },
  borderTopStyle: true,
  borderTopColor: {
    property: "borderTopColor",
    scale: "colors",
  },
  //
  borderRight: true,
  borderRightWidth: {
    property: "borderRightWidth",
    scale: "borderWidth",
  },
  borderRightStyle: true,
  borderRightColor: {
    property: "borderRightColor",
    scale: "colors",
  },
  //
  borderBottom: true,
  borderBottomWidth: {
    property: "borderBottomWidth",
    scale: "borderWidth",
  },
  borderBottomStyle: true,
  borderBottomColor: {
    property: "borderBottomColor",
    scale: "colors",
  },
  //
  borderLeft: true,
  borderLeftWidth: {
    property: "borderLeftWidth",
    scale: "borderWidth",
  },
  borderLeftStyle: true,
  borderLeftColor: {
    property: "borderLeftColor",
    scale: "colors",
  },
  //
  borderX: {
    properties: ["borderLeft", "borderRight"],
  },
  borderY: {
    properties: ["borderTop", "borderBottom"],
  },
};

export const border = system(config);
export default border;
