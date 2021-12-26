import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  Button,
  Menu,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4px",
    paddingLeft: theme.spacing(7),
    borderBottom: "1px solid #C4C4C4",
  },
  menu: {
    padding: "6px",
    borderRadius: "18px",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
}));

export function CameraPolygon({ camera }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const { status, roadLane, ipAddress } = camera;

  function openMenu(e) {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  }

  function closeMenu() {
    setOpen(false);
    setAnchorEl(null);
  }

  return (
    <ListItem selected={open} className={classes.root}>
      <ListItemIcon>
        <FlipCameraIosIcon />
      </ListItemIcon>
      <ListItemText primary={`${ipAddress} (${roadLane})`} secondary={status} />
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={openMenu}
      >
        <ExpandMore />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>Приостановить тест</MenuItem>
        <MenuItem onClick={closeMenu}>Возобновить тест</MenuItem>
      </Menu>
    </ListItem>
  );
}
