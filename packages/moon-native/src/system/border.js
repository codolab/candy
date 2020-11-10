import { system } from "candy-system";
import { getColorConfig } from "./util";

export const config = {
  borderStart: true,
  borderStartWidth: {
    property: "borderStartWidth",
    scale: "borderWidth",
  },
  borderStartStyle: true,
  borderStartColor: getColorConfig("borderTopColor", "--border-opacity"),
  //
  borderEnd: true,
  borderEndWidth: {
    property: "borderEndWidth",
    scale: "borderWidth",
  },
  borderEndStyle: true,
  borderEndColor: getColorConfig("borderEndColor", "--border-opacity"),
};

export const border = system(config);
export default border;
