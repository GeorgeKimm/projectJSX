import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { ElementPolygon } from "./elementPolygon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export function ListPolygon({ data }) {
  const { locations } = data;
  const classes = useStyles();

  return (
    <>
      {locations.map((location, index) => {
        return (
          <ElementPolygon
            className={classes.root}
            key={location.id}
            location={location}
            index={index}
          />
        );
      })}
    </>
  );
}
