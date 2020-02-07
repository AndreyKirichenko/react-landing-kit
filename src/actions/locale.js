import {
  SET_LANGUAGE
} from './actionTypes';

export const setLanguage = (lang) => {
  return {
    type: SET_LANGUAGE,
    payload: lang
  };
};
