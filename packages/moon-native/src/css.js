import { stringify, createClassName } from "candy-utils";
const rn = require("react-native");

const sheet = rn.StyleSheet;
const cache = {};

export default function css(style) {
  const className = createClassName("rn-", "", stringify(style), "");
  if (cache[className]) return cache[className];

  const styles = sheet.create({
    generated: style,
  });
  cache[className] = styles.generated;
  return styles.generated;
}
