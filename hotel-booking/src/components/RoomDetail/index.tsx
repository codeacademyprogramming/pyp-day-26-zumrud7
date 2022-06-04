import React, { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import "date-fns";
import { useParams } from "react-router";
import { IRoomState } from "../../interface/index";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsById } from "../../redux/roomActions";
import {ReservationListTable} from "./reservationListTable";
import {BookingForm} from "./bookingForm";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FFEFBA 30%, #FFFFFF 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: "100%",
    minHeight: "100vh",
    padding: "0 30px",
  },
  container: {
    width: '100%',
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "50px 0",
  },
  title: {
    fontWeight: "bold",
    color: "#000",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    width: "100%",
  },
  formWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
}));

export const RoomDetail: React.FC = () => {
  const classes = useStyles();
  const [bookingForm, setBookingForm] = useState(false);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    getRoomsById(dispatch, id);
  }, [dispatch, id]);

  const { data } = useSelector((state: IRoomState) => state.rooms);

  const handleNewBooking = () => {
    setBookingForm(!bookingForm);
  };

  return (
    <Box className={classes.root}>
      <Grid className={classes.container}>
        <Box className={classes.wrapper}>
          <Typography className={classes.title} variant="h4">
            Room Nº {id}
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "#f8b500", color: "#FFF" }}
            onClick={handleNewBooking}
          >
            NEW BOOKING
          </Button>
        </Box>
        {bookingForm && (
         <BookingForm id={id}/>
        )}
        <ReservationListTable data={data}/>
      </Grid>
    </Box>
  );
};
