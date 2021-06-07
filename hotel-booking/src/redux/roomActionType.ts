import { ROOM_ACTIONS } from "./const";
import {IRoom} from '../interface/index'

interface GET_ROOM {
    type: ROOM_ACTIONS.GET_ROOM;
    payload: IRoom
}

export type Action = GET_ROOM
