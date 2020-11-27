import { merge } from "./util";

let _configuration = {
  theme: {},
  variants: {},
  base: {},
  components: {},
  strict: true,
};

export function setup(_config) {
  _configuration = merge(_configuration, _config, { clone: true });
}

const mergeConfiguration = (presets, config) => {
  presets.forEach((preset) => {
    const {
      theme = {},
      variants = {},
      base = {},
      components = {},
      presets: p,
    } = preset;
    if (Array.isArray(p)) {
      mergeConfiguration(p, config);
    }
    config.theme = merge(config.theme, theme);
    config.variants = merge(config.variants, variants);
    config.base = merge(config.base, base);
    config.components = merge(config.components, components);
  });
};

export class Configuration {
  static init(configuration) {
    const preset = configuration;
    const newConfig = { theme: {}, variants: {}, base: {}, components: {} };
    mergeConfiguration([preset], newConfig);
    const { theme = {}, variants = {}, base = {}, components = {} } = newConfig;
    newConfig.theme = merge(_configuration.theme, theme);
    newConfig.variants = merge(_configuration.variants, variants);
    newConfig.base = merge(_configuration.base, base);
    newConfig.components = merge(_configuration.components, components);
    newConfig.strict = typeof configuration.strict === "boolean" 
      ? configuration.strict 
      : _configuration.strict;

    Object.keys(newConfig).forEach((key) => {
      if (key === "presets") return;
      this.set(key, newConfig[key]);
    });
  }
  static set(key, value) {
    _configuration[key] = value;
  }
  static get() {
    return _configuration;
  }
  static option(key) {
    return _configuration[key];
  }
}
