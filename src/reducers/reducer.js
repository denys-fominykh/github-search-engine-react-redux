const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERNAME_ACCOUNT':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
