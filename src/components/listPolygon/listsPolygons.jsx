import React from "react";
import { Grid, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { ListPolygon } from "./listPolygon";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "450px",
  },
  calibrator: {
    display: "flex",
    flexGrow: 1,
    flexWrap: "nowrap",
    padding: "10px",
    color: "#ffffff",
    background: "rgba(80, 167, 217, 0.6)",
    borderRadius: "4px",
  },
  numCalibrator: {
    fontWeight: "700",
    flexGrow: "0",
    fontSize: "20px",
  },

  nameCalibrator: {
    fontWeight: "400",
    flexGrow: "1",
    fontSize: "20px",
  },

  listPolygon: {
    display: "flex",
  },
}));

export function ListsPolygons({ arr }) {
  const classes = useStyles();

  return arr.map((item) => {
    const { id, calibrator, speedTestUser } = item;
    return (
      <Grid container direction="column" key={id} className={classes.root}>
        <Grid item className={classes.calibrator}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography className={classes.numCalibrator}>
                {speedTestUser.carNumber}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.nameCalibrator}>
                {calibrator.fullName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ListPolygon className={classes.listPolygon} data={item} />
        </Grid>
      </Grid>
    );
  });
}
