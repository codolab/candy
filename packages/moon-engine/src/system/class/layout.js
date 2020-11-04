import { system } from "@candy/system";

export const config = {
  display: {
    property: "display",
    transform(val) {
      return val === "hidden" ? "none" : val;
    }
  },
};

export const layout = system(config);
export default layout;
