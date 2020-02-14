import {
  SET_MOBILE_MENU_OPENED,
  TOGGLE_MOBILE_MENU_OPENED,
} from '../actions/actionTypes';

const initialState = {
  isMobileMenuOpened: false
};

const mobileMenu = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {

  case TOGGLE_MOBILE_MENU_OPENED:
    return {
      ...state.mobileMenu,
      isMobileMenuOpened: !state.mobileMenu.isMobileMenuOpened,
    };

  case SET_MOBILE_MENU_OPENED:
    return {
      ...state.mobileMenu,
      isMobileMenuOpened: action.payload,
    };

  default:
    return state.mobileMenu;
  }
};

export default mobileMenu;
