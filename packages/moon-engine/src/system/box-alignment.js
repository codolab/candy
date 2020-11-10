import { system } from "candy-system";

export const config = {
  justifyContent: true,
  justifyItems: true,
  justifySelf: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  placeContent: true,
  placeItems: true,
  placeSelf: true,
};

export const boxAlignment = system(config);
export default boxAlignment;
