import { merge } from "./util";

const noop = () => null;

let _configuration = {
  theme: {},
  variants: {},
};

export function setup(_config) {
  _configuration = merge(_configuration, _config, { clone: true });
}

export class Configuration {
  static init(configuration) {
    const { theme = {}, variants = {} } = configuration;
    configuration.theme = merge(_configuration.theme, theme);
    configuration.variants = merge(_configuration.variants, variants);
    Object.keys(configuration).forEach((key) => {
      this.set(key, configuration[key]);
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

// user configure
function configure(configuration = {}) {
  Configuration.init(configuration);
}

export default configure;
