import { ROOM_ACTIONS } from "./const";
import { IRoom } from "../interface";
import { Action } from "../redux/roomActionType";

export const roomsReducer = (state: Array<IRoom> = [], action: Action) => {
  switch (action.type) {
    case ROOM_ACTIONS.GET_ROOM:
      return {
        ...state,
        data: [],
      };
    case `${ROOM_ACTIONS.GET_ROOM}_SUCCESS`:
      return {
        ...state,
        data: action.payload,
      };
    case `${ROOM_ACTIONS.GET_ROOM}_ERROR`:
      return {
        ...state,
        data: [],
      };
    case `${ROOM_ACTIONS.ADD_RESERVATION}`:
      return {
        ...state,
        data: [],
      };
    case `${ROOM_ACTIONS.ADD_RESERVATION}_SUCCESS`:
      return {
        ...state,
        data: [
          ...state,
          {
            id: action.payload.id,
            reservations: action.payload,
          },
        ],
      };
    case `${ROOM_ACTIONS.ADD_RESERVATION}_ERROR`:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};
