export const FETCH_ROOMS_SUCCESS = "FETCH_ROOMS_SUCCESS";
export const FETCH_ROOMS_FAILURE = "FETCH_ROOMS_FAILURE";

export const fetchRooms = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/rooms");
    const rooms = await res.json();
    dispatch({ type: FETCH_ROOMS_SUCCESS, payload: rooms });
  } catch (error) {
    dispatch({ type: FETCH_ROOMS_FAILURE, error: error.message });
  }
};
