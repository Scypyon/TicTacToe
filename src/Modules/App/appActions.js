import * as appTypes from "./appTypes";

export const chooseMode = mode => ({
  type: appTypes.CHOOSE_MODE,
  payload: mode
});
