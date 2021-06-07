import React, { useCallback } from "react";
import { Box, makeStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addReservation } from "../../redux/roomActions";
import { useDispatch } from "react-redux";
import { stringify } from "querystring";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginBottom: "30px",
  },
  dateInputWrap: {
    width: "100%",
    display: "flex",
    marginBottom: "20px",
  },
}));

const uuid = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const BookingForm = (props: { id: string }) => {
  const classes = useStyles();
  let today = new Date();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = React.useState<Date | null>(today);
  const [endDate, setEndDate] = React.useState<Date | null>(today);
  const [formState, setFormState] = React.useState({
    from: startDate?.toLocaleDateString("en-GB"),
    to: endDate?.toLocaleDateString("en-GB"),
    id: uuid(),
    roomId: props.id,
  });

  const handleSave = () => {
    const addReservationDispatch = addReservation(dispatch);

    addReservationDispatch({
      id: props.id,
      reservations: [formState],
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleStartDate = (date: Date) => {
    setStartDate(date);
    setFormState({
      ...formState,
      from: date.toLocaleDateString("en-GB"),
    });
  };
  const handleEndDate = (date: Date) => {
    setEndDate(date);
    setFormState({
      ...formState,
      to: date.toLocaleDateString("en-GB"),
    });
  };

  return (
    <Box>
      <form style={{ marginBottom: "30px" }} noValidate autoComplete="off">
        <Box className={classes.formWrapper}>
          <Box className={classes.dateInputWrap}>
            <DatePicker
              className="date-picker"
              selected={startDate}
              onChange={handleStartDate}
              name="from"
              dateFormat="dd/MM/yyyy"
            />

            <DatePicker
              className="date-picker"
              selected={endDate}
              onChange={handleEndDate}
              name="to"
              dateFormat="dd/MM/yyyy"
            />
          </Box>
          <Box
            className={classes.dateInputWrap}
            style={{ justifyContent: "space-between" }}
          >
            <TextField
              style={{ width: "30%" }}
              id="standard-basic"
              label="User"
              name="reservedBy"
              onChange={handleChange}
            />
            <TextField
              style={{ width: "calc(70% - 40px)" }}
              id="standard-basic"
              label="Notes"
              name="notes"
              multiline
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Button
          type="button"
          onClick={handleSave}
          variant="contained"
          color="primary"
        >
          Add Booking
        </Button>
      </form>
    </Box>
  );
};
