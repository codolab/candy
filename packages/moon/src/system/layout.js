import { system } from "candy-system";

export const config = {
  // box-sizing
  boxSizing: true,
  // display
  display: true,
  // floats
  float: true,
  // clear
  clear: true,
  // object
  objectFit: true,
  objectPosition: true,
  // overflow
  overflowX: true,
  overflowY: true,
  overflow: true,
  scrolling: {
    property: "-webkit-overflow-scrolling",
  },
  // overscroll
  overscrollX: {
    property: "overscrollBehaviorX",
  },
  overscrollY: {
    property: "overscrollBehaviorY",
  },
  overscroll: {
    property: "overscrollBehavior",
  },
};

export const layout = system(config);
export default layout;
