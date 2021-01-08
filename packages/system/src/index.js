/* Fork from: https://github.com/styled-system/styled-system/blob/master/packages/core/src/index.js */
export const getValue = (n, scale) => get(scale, n, n);

export const get = (obj, key, def, p, undef) => {
  if (obj && obj[key]) return obj[key];
  key = Array.isArray(key) ? key : key && key.split ? key.split(".") : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj && typeof obj === "object" ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

const createStyleFunction = ({
  properties,
  property,
  scale,
  transform = getValue,
  translate,
  defaultScale,
}) => {
  properties = properties || [property];
  const sx = (value, scale, _props) => {
    const result = {};
    const n = transform(value, scale, _props);
    if (!n) return;
    if (typeof translate === "function") {
      const rs = translate(n, properties);
      if (rs) return rs;
    }
    properties.forEach((prop) => {
      result[prop] = n;
    });
    return result;
  };
  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
};

export const createParser = (config, strict = false) => {
  let cache = {};
  const parse = (props) => {
    let styles = {};
    const { property, value } = props;
    if (!config[property]) {
      if (strict) return {};
      return { [property]: value };
    }
    const sx = config[property];
    const raw = value;
    const scale = get(props.theme, sx.scale, sx.defaults);

    return Object.assign(styles, sx(raw, scale, props));
  };
  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;

  const keys = Object.keys(config).filter((k) => k !== "config");
  if (keys.length > 1) {
    keys.forEach((key) => {
      parse[key] = createParser({ [key]: config[key] });
    });
  }

  return parse;
};

export const system = (args = {}) => {
  const config = {};
  Object.keys(args).forEach((key) => {
    const conf = args[key];
    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key,
      });
      return;
    }
    if (typeof conf === "function") {
      config[key] = conf;
      return;
    }
    config[key] = createStyleFunction(conf);
  });
  const parser = createParser(config);
  return parser;
};

export function compose(...parsers) {
  const ctx = this || {};
  let config = {};
  parsers.forEach((parser) => {
    if (!parser || !parser.config) return;
    Object.assign(config, parser.config);
  });
  const parser = createParser(config, ctx.strict);

  return parser;
}
