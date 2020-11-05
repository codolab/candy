import { system } from "@candy/system";
import { getColorConfig } from "./util";

export const config = {
  border: true,
  borderWidth: true,
  borderStyle: true,
  borderColor: getColorConfig("borderColor"),
  //
  borderTop: true,
  borderTopWidth: {
    property: "borderTopWidth",
    scale: "borderWidth",
  },
  borderTopStyle: true,
  borderTopColor: getColorConfig("borderTopColor"),
  //
  borderRight: true,
  borderRightWidth: {
    property: "borderRightWidth",
    scale: "borderWidth",
  },
  borderRightStyle: true,
  borderRightColor: getColorConfig("borderRightColor"),
  //
  borderBottom: true,
  borderBottomWidth: {
    property: "borderBottomWidth",
    scale: "borderWidth",
  },
  borderBottomStyle: true,
  borderBottomColor: getColorConfig("borderBottomColor"),
  //
  borderLeft: true,
  borderLeftWidth: {
    property: "borderLeftWidth",
    scale: "borderWidth",
  },
  borderLeftStyle: true,
  borderLeftColor: getColorConfig("borderLeftColor"),
  //
  borderX: {
    properties: ["borderLeft", "borderRight"],
  },
  borderY: {
    properties: ["borderTop", "borderBottom"],
  },
  //
  borderOpacity: {
    property: "--border-opacity",
    scale: "opacity",
  },
};

export const border = system(config);
export default border;
