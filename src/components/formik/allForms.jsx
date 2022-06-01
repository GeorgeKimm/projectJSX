import React from "react";
import { Grid } from "@material-ui/core";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import { FirstFormik } from "./firstFormik";
import { LoginFormFormik } from "./loginFormFormik";

export function AllForms() {
  return (
    <Grid container direction="column" spacing={10}>
      <Grid item>
        <FirstFormik />
      </Grid>
      <Grid item>
        <LoginFormFormik />
      </Grid>
    </Grid>
  );
}
