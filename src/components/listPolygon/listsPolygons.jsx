import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ListPolygon } from "./listPolygon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  container: {
    height: "82vh",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#F0F0F0",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#50A7D9",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#427c9d",
    },
    scrollbarWidth: "auto",
    scrollbarColor: "#50A7D9 #F0F0F0",
  },
  calibrator: {
    display: "flex",
    flexGrow: 1,
    flexWrap: "nowrap",
    padding: theme.spacing(1),
    color: "#ffffff",
    background: "rgba(80, 167, 217, 0.6)",
    borderRadius: "4px",
  },
  box: {
    justifyContent: "space-between",
    flexWrap: "wrap",
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

  return (
    <Box className={classes.root}>
      <Box style={{ width: "200px", height: "200px", padding: 20 }}>hello</Box>
      <Box className={classes.container}>
        {arr.map((item) => {
          const { id, calibrator, speedTestUser } = item;
          return (
            <Grid container direction="column" key={id}>
              <Grid item className={classes.calibrator}>
                <Grid container spacing={1} className={classes.box}>
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
        })}
      </Box>
    </Box>
  );
}
