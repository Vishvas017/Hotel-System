import { combineReducers } from "redux";
import roomReducer from "./roomReducer";
import reservationReducer from "./reservationReducer";

const rootReducer = combineReducers({
  rooms: roomReducer,
  reservations: reservationReducer,
});

export default rootReducer;
