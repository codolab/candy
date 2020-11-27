import { get } from "candy-system";

const clsTransform = (val, scale) => {
  return get(scale, val, null);
}

export default clsTransform;