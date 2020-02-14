import {
  SET_MOBILE_MENU_OPENED,
  TOGGLE_MOBILE_MENU_OPENED,
} from './actionTypes';

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
