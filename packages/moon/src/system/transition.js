import { system } from "candy-system";

export const config = {
  transition: true,
  transitionDuration: true,
  transitionDelay: true,
  transitionProperty: true,
  transitionTimingFunction: true,
};

export const transition = system(config);
export default transition;
