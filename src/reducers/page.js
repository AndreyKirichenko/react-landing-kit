import {
  SET_BROWSER_HEIGHT,
  SET_BROWSER_WIDTH,
  SET_SCROLL_POSITION_Y,
  TOGGLE_MENU
} from '../actions/actionTypes';

const initialState = {
  browserHeight: 0,
  browserWidth: 0,
  isMenuVisible: false
};

const page = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {

  case SET_BROWSER_HEIGHT:
    return {
      ...state.page,
      height: action.payload
    };

  case SET_BROWSER_WIDTH:
    return {
      ...state.page,
      width: action.payload
    };

  case SET_SCROLL_POSITION_Y:
    return {
      ...state.page,
      scrollY: action.payload
    };

  case TOGGLE_MENU:
    return {
      ...state.page,
      isMenuVisible: !state.page.isMenuVisible
    };

  default:
    return state.page;
  }
};

export default page;
