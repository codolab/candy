import css2rn from "css-to-react-native";

const rem2px = (value) =>
  value.endsWith("rem") ? `${Number.parseFloat(value) * 16}px` : value;

const useVariables = (obj) => {
  const styles = {};

  for (const [key, value] of Object.entries(obj)) {
    if (!key.startsWith("--")) {
      if (typeof value === "string") {
        styles[key] = value.replace(/var\(([a-zA-Z-]+)\)/, (_, name) => {
          return obj[name];
        });
      } else {
        styles[key] = value;
      }
    }
  }

  return styles;
};

export const getStylesRN = (parsed) => {
  if (parsed.letterSpacing) {
    if (!parsed.fontSize) {
      throw new Error(
        "Font size is required when applying letter spacing, e.g. 'text-lg tracking-tighter'"
      );
    }

    parsed.letterSpacing =
      Number.parseFloat(parsed.letterSpacing) *
      Number.parseFloat(rem2px(parsed.fontSize + ""));
  }

  const styles = Object.keys(parsed)
    .filter((prop) => {
      if (prop === "lineHeight" && !parsed[prop].endsWith("rem")) {
        return false;
      }
      if (prop === "shadowOffset" || prop === "textShadowOffset") {
        return false;
      }

      return true;
    })
    .reduce((acc, prop) => {
      const newVal = [prop, rem2px(parsed[prop] + "")];
      acc.push(newVal);
      return [...acc];
    }, []);

  const stylesRN = useVariables(css2rn(styles));
  if (parsed.shadowOffset) stylesRN.shadowOffset = parsed.shadowOffset;
  if (parsed.textShadowOffset)
    stylesRN.textShadowOffset = parsed.textShadowOffset;
    
  return stylesRN;
};
