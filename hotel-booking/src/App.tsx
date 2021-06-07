import React from "react";
import "./App.css";
import { Rooms } from "./components/index";
import { RoomDetail } from "./components/RoomDetail";
import {
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Rooms} />
      {/* <Route path="/room-detail/:id" render={(props) => <RoomDetail id={props}/>} /> */}
      <Route path="/room-detail/:id" component={RoomDetail}/>
    </BrowserRouter>
  );
}

export default App;
