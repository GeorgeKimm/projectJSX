import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExpandMore from "@material-ui/icons/ExpandMore";
import RoomIcon from "@material-ui/icons/Room";
import { Button, Menu, MenuItem } from "@material-ui/core";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { CameraPolygon } from "./cameraPolygon";
import shorten from "./shorten";

const useStyles = makeStyles({
  root: {
    padding: 0,
    borderBottom: "1px solid #C4C4C4",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  },
  icon: {
    width: "12px",
    height: "16px",
  },
});

export function ElementPolygon(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const { location, index } = props;
  const { title, cameras } = location;

  const shortTitle = shorten(title);

  function clickList() {
    setOpen(!open);
  }

  console.log("cameras", cameras);
  return (
    <>
      <List component="div" className={classes.root}>
        <ListItem button onClick={clickList}>
          <Box className={classes.box}>
            <Typography color="textSecondary" variant="h6">
              {index + 1}
            </Typography>
          </Box>
          <Box className={classes.box}>
            {open ? (
              <ExpandMore color="action" />
            ) : (
              <NavigateNextIcon color="action" />
            )}
          </Box>
          <Box className={classes.box}>
            <RoomIcon color="primary" />
          </Box>
          <ListItemText primary={shortTitle} className={classes.box} />
        </ListItem>
        <Collapse in={open} timeout="auto">
          <List component="div" disablePadding>
            {cameras.map((camera) => {
              return <CameraPolygon key={camera.id} camera={camera} />;
            })}
          </List>
        </Collapse>
      </List>
    </>
  );
}
