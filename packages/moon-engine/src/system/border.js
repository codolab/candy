import { system } from "candy-system";
import { getColorConfig } from "./util";

export const config = {
  border: true,
  borderWidth: true,
  borderStyle: true,
  borderColor: getColorConfig("borderColor", "--border-opacity"),
  //
  borderTop: true,
  borderTopWidth: {
    property: "borderTopWidth",
    scale: "borderWidth",
  },
  borderTopStyle: true,
  borderTopColor: getColorConfig("borderTopColor", "--border-opacity"),
  //
  borderRight: true,
  borderRightWidth: {
    property: "borderRightWidth",
    scale: "borderWidth",
  },
  borderRightStyle: true,
  borderRightColor: getColorConfig("borderRightColor", "--border-opacity"),
  //
  borderBottom: true,
  borderBottomWidth: {
    property: "borderBottomWidth",
    scale: "borderWidth",
  },
  borderBottomStyle: true,
  borderBottomColor: getColorConfig("borderBottomColor", "--border-opacity"),
  //
  borderLeft: true,
  borderLeftWidth: {
    property: "borderLeftWidth",
    scale: "borderWidth",
  },
  borderLeftStyle: true,
  borderLeftColor: getColorConfig("borderLeftColor", "--border-opacity"),
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
