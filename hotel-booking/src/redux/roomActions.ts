import { ROOM_ACTIONS } from "./const";
import { roomsService } from "../service/roomService";
import { Dispatch } from "redux";

export function getRooms(dispatch: Dispatch) {
  dispatch({
    type: ROOM_ACTIONS.GET_ROOM,
  });
  roomsService
    .getRooms()
    .then((res) => {
      let { data } = res;
      dispatch({
        type: `${ROOM_ACTIONS.GET_ROOM}_SUCCESS`,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: `${ROOM_ACTIONS.GET_ROOM}_ERROR`,
        error: err,
      });
    });
}

export function getRoomsById(dispatch: Dispatch, id: string) {
  dispatch({
    type: ROOM_ACTIONS.GET_ROOM,
  });
  roomsService
    .getRoomsById(id)
    .then((res) => {
      let { data } = res;
      dispatch({
        type: `${ROOM_ACTIONS.GET_ROOM}_SUCCESS`,
        payload: [data],
      });
    })
    .catch((err) => {
      dispatch({
        type: `${ROOM_ACTIONS.GET_ROOM}_ERROR`,
        error: err,
      });
    });
}

export function addReservation(dispatch: Dispatch) {
  return function (data: object) {
    dispatch({ type: ROOM_ACTIONS.ADD_RESERVATION });
    roomsService
      .addReservation(data)
      .then((resp) => {
        let { data } = resp;
        dispatch({
          type: `${ROOM_ACTIONS.ADD_RESERVATION}_SUCCESS`,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: `${ROOM_ACTIONS.ADD_RESERVATION}_ERROR`,
          error: err,
        })
      );
  };
}
