import {
  SET_LANGUAGE
} from '../actions/actionTypes';

const initialState = {
  lang: 'ru',
  list: [
    'ru',
    'en'
  ]
};

const locale = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {
  case SET_LANGUAGE:
    return {
      ...state.locale,
      lang: action.payload,
      list: [
        action.payload,
        ...state.locale.list.slice(0,1)
      ]
    };

  default:
    return state.locale;
  }
};

export default locale;
