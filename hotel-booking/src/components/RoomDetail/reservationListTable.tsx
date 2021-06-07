import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  progress: {
    display: "flex",
    width: "100px",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export const ReservationListTable= (props: { data: object }) => {
  const classes = useStyles();
  const roomReservations = props.data;

  return (
    <>
      {Array.isArray(roomReservations) && roomReservations.length  ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Reserved By:</b>
                </TableCell>
                <TableCell>
                  <b>From:</b>
                </TableCell>
                <TableCell>
                  <b>To:</b>
                </TableCell>
                <TableCell>
                  <b>Notes:</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roomReservations.map((reservationList) => {
                return reservationList.reservations.map((reserve: any) => {
                  return (
                    <TableRow key={reserve.id}>
                      <TableCell>
                        <b>{reserve.user}</b>
                      </TableCell>
                      <TableCell>
                        <b>{reserve.from}</b>
                      </TableCell>
                      <TableCell>
                        <b>{reserve.to}</b>
                      </TableCell>
                      <TableCell>
                        <b>{reserve.notes}</b>
                      </TableCell>
                    </TableRow>
                  );
                });
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="progressContainer">
          <CircularProgress
            className={classes.progress}
            size={70}
            color="primary"
          />
        </div>
      )}
    </>
  );
};
