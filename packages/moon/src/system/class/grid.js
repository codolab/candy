import { system } from "candy-system";

export const config = {
  // class syntax
  gridCols: {
    property: "grid-template-columns",
    scale: "gridTemplateColumns",
  },
  col: {
    property: "grid-column",
    scale: "gridColumn",
  },
  colSpan: {
    property: "grid-column",
    scale: "gridColumn",
  },
  colStart: {
    property: "grid-column-start",
    scale: "gridColumn",
  },
  colEnd: {
    property: "grid-column-end",
    scale: "gridColumn",
  },
  gridRows: {
    property: "grid-template-rows",
    scale: "gridTemplateRows",
  },
  row: {
    property: "grid-row",
    scale: "gridRow",
  },
  rowSpan: {
    property: "grid-row",
    scale: "gridRow",
  },
  rowStart: {
    property: "grid-row-start",
    scale: "gridRow",
  },
  rowEnd: {
    property: "grid-row-end",
    scale: "gridRow",
  },
  gridFlow: {
    property: "grid-auto-flow",
    transform(val) {
      switch (val) {
        case "row-dense":
          return "row dense";
        case "col-dense":
          return "column dense";
        case "col":
          return "column";
        case "row":
          return "row";
        default:
          return val;
      }
    },
  },
  autoCols: {
    property: "grid-auto-columns",
    scale: "gridAutoColumns",
  },
  autoRows: {
    property: "grid-auto-rows",
    scale: "gridAutoRows",
  },
  gapX: {
    property: "column-gap",
    scale: "gap",
  },
  gapY: {
    property: "row-gap",
    scale: "gap",
  },
};

export const grid = system(config);
export default grid;
