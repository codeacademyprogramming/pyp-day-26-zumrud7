import { Box, makeStyles, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { IRoom } from "../interface";
import { getRooms } from "../redux/roomActions";
import { FloorPlan } from "./FloorPlan/index";
import { IRoomState } from "../interface";
import "./index.scss";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #34e89e 30%, #0f3443 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: "100%",
    minHeight: "100vh",
    padding: "0 30px",
  },
  container: {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "50px 0",
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginBottom: "40px",
    fontWeight: "bold",
    maxWidth: "300px",
  },
  indicatorTitle: {
    marginBottom: "20px",
    display: "block",
    textAlign: "left",
  },
  indicator: {
    width: "100%",
    maxWidth: "580px",
  },
});

export const Rooms: React.FC<IRoomState> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data } = useSelector((state: IRoomState) => state.rooms);

  useEffect(() => {
    getRooms(dispatch);
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h4" className={classes.title}>
          Room availability management
        </Typography>
        <Box className={classes.indicator}>
          <Typography variant="inherit" className={classes.indicatorTitle}>
            Room availability color indicator
          </Typography>
          <div className="label-wrap">
            <label className="occupied">Occupied</label>
            <label className="vacant">Vacant</label>
          </div>
        </Box>
        <Box>
          <FloorPlan data={data} />
        </Box>
      </Grid>
    </Box>
  );
};
