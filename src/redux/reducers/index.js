import { headerReducer } from "./HeaderReducer";
import { combineReducers } from "redux";
import { cardsReducer } from "./CardsReducer";
import { modalReducer } from "./ModalReducer";

export const RootReducer = combineReducers({
  header: headerReducer,
  card: cardsReducer,
  modal: modalReducer,
});
