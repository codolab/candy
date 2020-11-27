export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { default as merge } from "./merge";
export { default as warn } from "./warn";

export * from "./alpha";
