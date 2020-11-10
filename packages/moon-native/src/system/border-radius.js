import { system } from "candy-system";

const radii = [
  {
    name: "roundedS",
    prefix: "rounded-s",
    properties: ["borderTopStartRadius", "borderBottomStartRadius"],
  },
  {
    name: "roundedE",
    prefix: "rounded-e",
    properties: ["borderTopEndRadius", "borderBottomEndRadius"],
  },
  {
    name: "roundedTs",
    prefix: "rounded-ts",
    properties: ["borderTopStartRadius"],
  },
  {
    name: "roundedTe",
    prefix: "rounded-te",
    properties: ["borderTopEndRadius"],
  },
  {
    name: "roundedBs",
    prefix: "rounded-bs",
    properties: ["borderBottomStartRadius"],
  },
  {
    name: "roundedBe",
    prefix: "rounded-te",
    properties: ["borderBottomEndRadius"],
  },
];

export const config = {
  roundedTopStart: {
    property: "borderTopStartRadius",
    scale: "borderRadius",
  },
  roundedTopEnd: {
    property: "borderTopEndRadius",
    scale: "borderRadius",
  },
  roundedBottomStart: {
    property: "borderBottomStartRadius",
    scale: "borderRadius",
  },
  roundedBottomEnd: {
    property: "borderBottomEndRadius",
    scale: "borderRadius",
  },
  //
  roundedStart: {
    properties: ["borderTopStartRadius", "borderBottomStartRadius"],
    scale: "borderRadius",
  },
  roundedEnd: {
    properties: ["borderTopEndRadius", "borderBottomEndRadius"],
    scale: "borderRadius",
  },
};

config.borderTopStartRadius = config.roundedTopStart;
config.borderTopEndRadius = config.roundedTopEnd;
config.borderBottomStartRadius = config.roundedBottomStart;
config.borderBottomEndRadius = config.roundedBottomEnd;
//
config.borderStartRadius = config.roundedStart;
config.borderEndRadius = config.roundedEnd;

export const borderRadius = system(config);
export default borderRadius;
