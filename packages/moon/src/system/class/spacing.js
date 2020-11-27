import { system, get } from "candy-system";

const config = {
  // space-between
  spaceX: {
    scale: "space",
    transform(value, scale) {
      const n = get(scale, value, null);
      if (!n) return null;
      
      if (value === "reverse") {
        return {
          "& > :not([hidden]) ~ :not([hidden])": {
            "--space-x-reverse": "1 !important",
          },
        };
      }
      return {
        classic: {
          [`space-x-${value}`]: {
            ["& > :not([hidden]) ~ :not([hidden])"]: {
              "--space-x-reverse": "0",
              marginRight: `calc(${n} * var(--space-x-reverse))`,
              marginLeft: `calc(${n} * calc(1 - var(--space-x-reverse)))`,
            },
          },
        },
      };
    },
    translate(val) {
      return val;
    },
  },
  spaceY: {
    scale: "space",
    transform(value, scale) {
      if (value === "reverse") {
        return {
          "& > :not([hidden]) ~ :not([hidden])": {
            "--space-y-reverse": "1 !important",
          },
        };
      }
      const n = get(scale, value, null);
      if (!n) return null;

      return {
        classic: {
          [`space-y-${value}`]: {
            ["& > :not([hidden]) ~ :not([hidden])"]: {
              "--space-y-reverse": "0",
              marginTop: `calc(${n} * calc(1 - var(--space-y-reverse)))`,
              marginBottom: `calc(${n} * var(--space-y-reverse))`,
            },
          },
        },
      };
    },
    translate(val) {
      return val;
    },
  },
};

export const spacing = system(config);
export default spacing;
