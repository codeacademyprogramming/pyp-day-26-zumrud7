export interface IReservation {
  id: number;
  roomId: number;
  reservedBy: string;
  from: string; // Date
  to: string; // Date
  notes: string;
}

export interface IRoom {
  id: number;
  reservations: IReservation[];
}

export interface IRoomState{
  rooms:{
    data: [
      {rooms:object}
    ]
  }
}