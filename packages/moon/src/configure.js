import { Configuration } from "candy-moon-engine";
import _classic from "candy-classic";

import sx from "./sx";

const classic = _classic.bind({ global: true, append: true });

function configure(configuration = {}) {
  Configuration.init(configuration);
  const baseStyles = Configuration.option("base");
  const parsed = sx.raw(baseStyles);
  classic(parsed);
}

export default configure;
