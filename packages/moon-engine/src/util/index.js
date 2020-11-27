export const camelCase = str =>
  str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });

export const camelToKebab = (str) =>
  str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

export { default as merge } from "./merge";
export { default as warn } from "./warn";

export * from "./alpha";
