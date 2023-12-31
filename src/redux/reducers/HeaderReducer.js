import {
  TOGGLE_CHECKED_SAVE_BOARD,
} from "../types/HeaderActionTypes";

const initState = {
  toggleSaveBoard: false,

  toggleWidget: false,
  toggleWorkplace: false,
  toggleShare: false,
  toggleUpdate: false,
  toggleAutomation: false,
  toggleFilter: false,
  toggleMenu: false,
};

export const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKED_SAVE_BOARD:
    
      return {...state, toggleSaveBoard:action.payload}

    default:
      return state;
  }
};
