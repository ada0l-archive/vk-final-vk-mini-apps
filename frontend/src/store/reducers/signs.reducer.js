const initialState = {
  signs: [],
};

const signs = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SIGNS":
      return {
        ...state,
        signs: action.payload,
      };

    default:
      return state;
  }
};

export default signs;
