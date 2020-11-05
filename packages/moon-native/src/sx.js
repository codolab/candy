import {
  setup,
  getDefaultConfig,
  globalTheme,
  processStyleSystem as processSystem,
  createStyleParser,
} from "@candy-moon/engine";
import css2rn from "css-to-react-native";
import css from "./css";

const defaultConfig = getDefaultConfig(globalTheme);
const parse = createStyleParser(processSystem);

setup({
  theme: defaultConfig.theme,
  variants: {},
});

const sx = (obj) => {
  const parsed = parse(obj);
  const styles = Object.keys(parsed).reduce((acc, prop) => {
    const newVal = [prop, parsed[prop] + ""];
    acc.push(newVal);
    return [...acc];
  }, []);

  const stylesRN = css2rn(styles);
  // const styles = css(stylesRN);
  console.log({
    parsed,
    styles,
    // stylesRN,
  });
  return "";
};

export default cx;
