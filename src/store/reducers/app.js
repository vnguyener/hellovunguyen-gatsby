const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';

const initialState = {
  isDarkMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode };
    default:
      return state;
  }
};
