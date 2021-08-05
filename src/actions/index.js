import {
  SET_CURRENT_LOCAL,
} from './types.js';

export function setCurrentLocal (currLocale) {
  return {
      type: SET_CURRENT_LOCAL,
      data: currLocale
  };
}




