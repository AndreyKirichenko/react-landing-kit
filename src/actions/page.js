import {
  SET_DOCUMENT_HEIGHT,
  SET_DOCUMENT_WIDTH,
  SET_VIEWPORT_HEIGHT,
  SET_VIEWPORT_WIDTH,
  SET_SCROLL_POSITION_Y,
  SET_MOBILE_MENU_OPENED,
  TOGGLE_MOBILE_MENU_OPENED,
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

export const setDocumentHeight = (documentHeight) => {
  return {
    type: SET_DOCUMENT_HEIGHT,
    payload: documentHeight,
  };
};

export const setDocumentWidth = (documentWidth) => {
  return {
    type: SET_DOCUMENT_WIDTH,
    payload: documentWidth,
  };
};

export const setScrollPositionY = (y) => {
  return {
    type: SET_SCROLL_POSITION_Y,
    payload: y,
  };
};

export const toggleMobileMenuOpened = () => {
  return {
    type: TOGGLE_MOBILE_MENU_OPENED,
  };
};

export const setMobileMenuOpened = (value) => {
  return {
    type: SET_MOBILE_MENU_OPENED,
    payload: value,
  };
};
