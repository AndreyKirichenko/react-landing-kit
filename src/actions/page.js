import {
  SET_PAGE_HEIGHT,
  SET_PAGE_WIDTH,
  SET_VIEWPORT_HEIGHT,
  SET_VIEWPORT_WIDTH,
  SET_SCROLL_POSITION_Y,
} from './actionTypes';

export const setViewportHeight = (viewportHeight) => {
  return {
    type: SET_VIEWPORT_HEIGHT,
    payload: viewportHeight,
  };
};

export const setViewportWidth = (viewportWidth) => {
  return {
    type: SET_VIEWPORT_WIDTH,
    payload: viewportWidth,
  };
};

export const setPageHeight = (documentHeight) => {
  return {
    type: SET_PAGE_HEIGHT,
    payload: documentHeight,
  };
};

export const setPageWidth = (documentWidth) => {
  return {
    type: SET_PAGE_WIDTH,
    payload: documentWidth,
  };
};

export const setScrollPositionY = (y) => {
  return {
    type: SET_SCROLL_POSITION_Y,
    payload: y,
  };
};
