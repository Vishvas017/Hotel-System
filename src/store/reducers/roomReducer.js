import { FETCH_ROOMS_SUCCESS, FETCH_ROOMS_FAILURE } from "../actions/roomActions";

const initialState = {
  rooms: [],
  loading: true,
  error: null,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS_SUCCESS:
      return { ...state, rooms: action.payload, loading: false };
    case FETCH_ROOMS_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default roomReducer;
