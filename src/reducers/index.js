import page from './page';

const reducer = (state, action) => {

  return {
    page: page(state, action)
  };
};

export default reducer;
