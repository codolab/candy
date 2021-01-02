import { hyphenateStyleName, px } from "candy-utils";

const toObj = (a) => (key) => ({
  key: key,
  prop: hyphenateStyleName(key),
  value: a[key],
});
const toArr = (obj) => Object.keys(obj).map(toObj(obj));

const formatNested = (values, opts) =>
  opts.newline ? `\n  ${values.split("\n").join("\n  ")}\n` : values;

const obj2css = (style = {}, opts = {}) =>
  toArr(style)
    .filter((s) => s.value !== null)
    .map((s) =>
      typeof s.value === "object"
        ? {
            parent: s.prop,
            value: obj2css(s.value, opts),
          }
        : s
    )
    .map(({ parent, prop, key, value }) => {
      if (parent && /^@/.test(parent)) {
        return `${parent}{${opts.selector}${formatNested(value, opts)}}`;
      }
      return parent
        ? `${parent}${formatNested(value, opts)}`
        : `${prop}:${px(value, key)};`;
    })
    .reduce(
      (acc, val) => {
        let accc = [...acc];
        if (/&/.test(val)) {
          accc.push(val.replace(/&/, opts.selector || ""));
          return accc;
        }
        if (/^@/.test(val)) {
          accc.push(val);
          return accc;
        }
        accc[0].push(val);
        return accc;
      },
      [[]]
    )
    .map((val) => {
      return Array.isArray(val)
        ? "{" + val.join(opts.newline ? "\n" : "") + "}"
        : val;
    })
    .join(opts.newline ? "\n" : "");

export default obj2css;
