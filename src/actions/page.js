import {
  SET_SCROLL_POSITION_Y,
  SET_BROWSER_HEIGHT,
  SET_BROWSER_WIDTH,
  TOGGLE_MENU,
} from './actionTypes';

export const setBrowserHeight = (height) => {
  return {
    type: SET_BROWSER_HEIGHT,
    payload: height
  };
};

export const setBrowserWidth = (width) => {
  return {
    type: SET_BROWSER_WIDTH,
    payload: width
  };
};

export const setScrollPositionY = (x) => {
  return {
    type: SET_SCROLL_POSITION_Y,
    payload: x
  };
};

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU
  };
};
