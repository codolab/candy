import { system } from "candy-system";

export const config = {
  gap: true,
  gridGap: {
    property: "gridGap",
    scale: "space",
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
  placeItems: true,
};

export const grid = system(config);
export default grid;
