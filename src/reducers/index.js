import mobileMenu from './mobileMenu';
import page from './page';

const reducer = (state, action) => {

  return {
    page: page(state, action),
    mobileMenu: mobileMenu(state, action)
  };
};

export default reducer;
