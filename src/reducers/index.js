import locale from './locale';
import page from './page';

const reducer = (state, action) => {

  return {
    locale: locale(state, action),
    page: page(state, action)
  };
};

export default reducer;
