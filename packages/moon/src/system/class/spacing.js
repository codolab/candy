import { system, getValue } from "@candy/system";

const config = {
  // padding
  // margin
  // space-between
  spaceX: {
    scale: "space",
    transform(value, scale, _props) {
      const n = getValue(value, scale, _props);
      if (value === "reverse") {
        return {
          "& > :not(template) ~ :not(template)": {
            "--space-x-reverse": "1 !important",
          },
        };
      }
      return {
        classic: {
          [`space-x-${value}`]: {
            ["& > :not(template) ~ :not(template)"]: {
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
    transform(value, scale, _props) {
      if (value === "reverse") {
        return {
          "& > :not(template) ~ :not(template)": {
            "--space-y-reverse": "1 !important",
          },
        };
      }
      const n = getValue(value, scale, _props);
      return {
        classic: {
          [`space-y-${value}`]: {
            ["& > :not(template) ~ :not(template)"]: {
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
