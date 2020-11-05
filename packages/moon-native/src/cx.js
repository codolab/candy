import {
  createClassParser,
  setup,
  getDefaultConfig,
  globalTheme,
  processClassSystem as processSystem,
} from "@candy-moon/engine";
import css2rn from "css-to-react-native";
import css from "./css";

const defaultConfig = getDefaultConfig(globalTheme);
const parse = createClassParser(processSystem);

setup({
  theme: defaultConfig.theme,
  variants: {},
});

const cx = (...args) => {
  const parsed = parse(...args);
  const styles = Object.keys(parsed).reduce((acc, prop) => {
    const newVal = [prop, parsed[prop] + ""];
    acc.push(newVal);
    return [...acc];
  }, []);

  const stylesRN = css2rn(styles);
  console.log({
    parsed,
    styles,
    // stylesRN,
  });
  return css(stylesRN);
};

export default cx;
