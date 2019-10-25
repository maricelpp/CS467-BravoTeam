import * as actionTypes from "../actions/actionTypes";

// Initial state set up
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

// Reducer switch case helper functions here

// Reducer definitions here
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return;
    case actionTypes.AUTH_SUCCESS:
      return;
    case actionTypes.AUTH_FAIL:
      return;
    default:
      return state;
  }
};

export default reducer;
