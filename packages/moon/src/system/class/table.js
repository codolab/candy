import { system } from "candy-system";

export const config = {
  table: {
    transform(val, scale, _props) {
      return { tableLayout: val };
    },
    translate(val) {
      return val;
    },
  },
};

export const table = system(config);
export default table;
