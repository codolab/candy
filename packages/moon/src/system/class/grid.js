import { system, get } from "candy-system";

const transform = (val, scale) => {
  return get(scale, val, null);
}

export const config = {
  // class syntax
  gridCols: {
    property: "grid-template-columns",
    scale: "gridTemplateColumns",
    transform,
  },
  col: {
    property: "grid-column",
    scale: "gridColumn",
    transform,
  },
  colSpan: {
    property: "grid-column",
    scale: "gridColumn",
    transform,
  },
  colStart: {
    property: "grid-column-start",
    scale: "gridColumn",
    transform,
  },
  colEnd: {
    property: "grid-column-end",
    scale: "gridColumn",
    transform,
  },
  gridRows: {
    property: "grid-template-rows",
    scale: "gridTemplateRows",
    transform,
  },
  row: {
    property: "grid-row",
    scale: "gridRow",
    transform,
  },
  rowSpan: {
    property: "grid-row",
    scale: "gridRow",
    transform,
  },
  rowStart: {
    property: "grid-row-start",
    scale: "gridRow",
    transform,
  },
  rowEnd: {
    property: "grid-row-end",
    scale: "gridRow",
    transform,
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
          return null;
      }
    },
  },
  autoCols: {
    property: "grid-auto-columns",
    scale: "gridAutoColumns",
    transform,
  },
  autoRows: {
    property: "grid-auto-rows",
    scale: "gridAutoRows",
    transform,
  },
  gapX: {
    property: "column-gap",
    scale: "gap",
    transform,
  },
  gapY: {
    property: "row-gap",
    scale: "gap",
    transform,
  },
  gap: {
    property: "gap",
    scale: "gap",
    transform,
  },
};

export const grid = system(config);
export default grid;
