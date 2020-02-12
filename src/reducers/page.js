import {
  SET_DOCUMENT_HEIGHT,
  SET_DOCUMENT_WIDTH,
  SET_VIEWPORT_HEIGHT,
  SET_VIEWPORT_WIDTH,
  SET_SCROLL_POSITION_Y,
  SET_MOBILE_MENU_OPENED,
  TOGGLE_MOBILE_MENU_OPENED,
} from '../actions/actionTypes';

const initialState = {
  documentHeight: 0,
  documentWidth: 0,
  viewportHeight: 0,
  viewportWidth: 0,
  isMobileMenuOpened: false
};

const page = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {

  case SET_DOCUMENT_HEIGHT:
    return {
      ...state.page,
      documentHeight: action.payload,
    };

  case SET_DOCUMENT_WIDTH:
    return {
      ...state.page,
      documentWidth: action.payload,
    };

  case SET_VIEWPORT_HEIGHT:
    return {
      ...state.page,
      viewportHeight: action.payload,
    };

  case SET_VIEWPORT_WIDTH:
    return {
      ...state.page,
      viewportWidth: action.payload,
    };

  case SET_SCROLL_POSITION_Y:
    return {
      ...state.page,
      scrollY: action.payload,
    };

  case TOGGLE_MOBILE_MENU_OPENED:
    return {
      ...state.page,
      isMobileMenuOpened: !state.page.isMobileMenuOpened,
    };

  case SET_MOBILE_MENU_OPENED:
    return {
      ...state.page,
      isMobileMenuOpened: action.payload,
    };

  default:
    return state.page;
  }
};

export default page;
