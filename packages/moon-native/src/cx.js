import {
  parse,
  setup,
  getDefaultConfig,
  globalTheme,
  processSystem,
} from "@candy-moon/engine";
// import css2rn from "css-to-react-native";

const defaultConfig = getDefaultConfig(globalTheme);

setup({
  theme: defaultConfig.theme,
  processSystem,
});

const cx = (...args) => {
  const parsed = parse(...args);
  const styles = Object.keys(parsed).reduce((acc, prop) => {
    const newVal = [prop, parsed[prop] + ""];
    acc.push(newVal);
    return [...acc];
  }, []);

  // const stylesRN = css2rn(styles);
  console.log({
    parsed,
    styles,
    // stylesRN,
  });
  return "";
};

export default cx;
