import { system, get } from "candy-system";

export const config = {
  layout: {
    transform(value, _scale, _props) {
      switch (value) {
        case "container":
          const screensScale = get(_props.theme, "screens");
          const center = get(_props.theme, "container.center");
          return {
            classic: {
              container: Object.assign(
                {
                  width: "100%",
                },
                center ? { marginRight: "auto", marginLeft: "auto" } : {},
                Object.keys(screensScale).reduce((acc, prop) => {
                  const val = screensScale[prop];
                  return {
                    ...acc,
                    [`@media (min-width: ${val})`]: {
                      maxWidth: val,
                    },
                  };
                }, {})
              ),
            },
          };
        case "invisible":
          return { visibility: "hidden" };
        case "visible":
          return { visibility: "visible" };
        default:
          return null;
      }
    },
    translate(val) {
      return val;
    },
  },
  break: {
    transform(value) {
      switch (value) {
        case "break-normal":
          return {
            classic: {
              "break-normal": {
                overflowWrap: "normal",
                wordBreak: "normal",
              },
            },
          };
        case "break-words":
          return { overflowWrap: "break-word" };
        case "break-all":
          return { wordBreak: "break-all" };
        default:
          return null;
      }
    },
    translate(val) {
      return val;
    },
  },
  sr: {
    transform(value) {
      switch (value) {
        case "sr-only":
          return {
            classic: {
              "sr-only": {
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
              },
            },
          };
        case "not-sr-only":
          return {
            classic: {
              "not-sr-only": {
                position: "static",
                width: "auto",
                height: "auto",
                padding: 0,
                margin: 0,
                overflow: "visible",
                clip: "auto",
                whiteSpace: "normal",
              },
            },
          };
        default:
          return null;
      }
    },
    translate(val) {
      return val;
    },
  },
  fontSmoothing: {
    transform(value) {
      switch (value) {
        case "antialiased":
          return {
            classic: {
              antialiased: {
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
              },
            },
          };
        case "subpixel-antialiased":
          return {
            classic: {
              "subpixel-antialiased": {
                "-webkit-font-smoothing": "auto",
                "-moz-osx-font-smoothing": "auto",
              },
            },
          };
        default:
          return null;
      }
    },
    translate(val) {
      return val;
    },
  },
};

export const others = system(config);
export default others;
