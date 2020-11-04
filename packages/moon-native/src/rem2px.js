export const rem2px = (value) =>
  value.endsWith("rem") ? `${Number.parseFloat(value) * 16}px` : value;
