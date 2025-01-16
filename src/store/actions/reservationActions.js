export const ADD_RESERVATION = "ADD_RESERVATION";
export const FETCH_RESERVATIONS = "FETCH_RESERVATIONS";

export const fetchReservations = () => async (dispatch) => {
  const res = await fetch("http://localhost:5000/reservations");
  const reservations = await res.json();
  dispatch({ type: FETCH_RESERVATIONS, payload: reservations });
};

export const addReservation = (reservation) => async (dispatch) => {
  const res = await fetch("http://localhost:5000/reservations", {
    method: "POST",
    body: JSON.stringify(reservation),
    headers: { "Content-Type": "application/json" },
  });
  const newReservation = await res.json();
  dispatch({ type: ADD_RESERVATION, payload: newReservation });
};
