import { HttpClient } from "../httpClient/index";

class RoomsService extends HttpClient {
  constructor() {
    super("https://60bb9c3542e1d00017620e20.mockapi.io");
  }

  async getRooms() {
    return this.get("reservation/v1/reservation");
  }

  async getRoomsById(id: string) {
    return this.get(`reservation/v1/reservation/${id}`);
  }

  // async updateReservation(id:string, data: object) {
  //   return this.put(`https://60bb9c3542e1d00017620e20.mockapi.io/reservation/v1/reservation${id}`, data);
  // }

  async addReservation(data: object) {
    return this.post(
      `https://60bb9c3542e1d00017620e20.mockapi.io/reservation/v1/reservation`,
      data
    );
  }
}

export const roomsService = new RoomsService();
