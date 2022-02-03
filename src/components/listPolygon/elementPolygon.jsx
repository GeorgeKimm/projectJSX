import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExpandMore from "@material-ui/icons/ExpandMore";
import RoomIcon from "@material-ui/icons/Room";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Button,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Draggable } from "react-beautiful-dnd";

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
      <Draggable draggableId={`${location.id}`} index={index}>
        {(provided) => (
          <List
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            component="div"
            className={classes.root}
          >
            <ListItem>
              <Box className={classes.box}>
                <Typography color="textSecondary" variant="h6">
                  {index + 1}
                </Typography>
              </Box>
              <Box className={classes.box}>
                {open ? (
                  <Button onClick={clickList}>
                    <ExpandMore color="action" />
                  </Button>
                ) : (
                  <Button onClick={clickList}>
                    <NavigateNextIcon color="action" />
                  </Button>
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
        )}
      </Draggable>
    </>
  );
}

// main

// import React, { useState } from "react";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import RoomIcon from "@material-ui/icons/Room";
// import {
//   Typography,
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Collapse,
//   Button,
// } from "@material-ui/core";
// import makeStyles from "@material-ui/core/styles/makeStyles";

// import { CameraPolygon } from "./cameraPolygon";
// import shorten from "./shorten";

// const useStyles = makeStyles({
//   root: {
//     padding: 0,
//     borderBottom: "1px solid #C4C4C4",
//   },
//   box: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "5px",
//   },
//   icon: {
//     width: "12px",
//     height: "16px",
//   },
// });

// export function ElementPolygon(props) {
//   const [open, setOpen] = useState(false);
//   const classes = useStyles();

//   const { location, index } = props;
//   const { title, cameras } = location;

//   const shortTitle = shorten(title);

//   function clickList() {
//     setOpen(!open);
//   }

//   console.log("cameras", cameras);
//   return (
//     <>
//       <List component="div" className={classes.root}>
//         <ListItem>
//           <Box className={classes.box}>
//             <Typography color="textSecondary" variant="h6">
//               {index + 1}
//             </Typography>
//           </Box>
//           <Box className={classes.box}>
//             {open ? (
//               <Button onClick={clickList}>
//                 <ExpandMore color="action" />
//               </Button>
//             ) : (
//               <Button onClick={clickList}>
//                 <NavigateNextIcon color="action" />
//               </Button>
//             )}
//           </Box>
//           <Box className={classes.box}>
//             <RoomIcon color="primary" />
//           </Box>
//           <ListItemText primary={shortTitle} className={classes.box} />
//         </ListItem>
//         <Collapse in={open} timeout="auto">
//           <List component="div" disablePadding>
//             {cameras.map((camera) => {
//               return <CameraPolygon key={camera.id} camera={camera} />;
//             })}
//           </List>
//         </Collapse>
//       </List>
//     </>
//   );
// }

// test1

// import React, { useState } from "react";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import RoomIcon from "@material-ui/icons/Room";
// import {
//   Typography,
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Collapse,
//   Button,
// } from "@material-ui/core";
// import makeStyles from "@material-ui/core/styles/makeStyles";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import { CameraPolygon } from "./cameraPolygon";
// import shorten from "./shorten";

// const useStyles = makeStyles({
//   root: {
//     padding: 0,
//     borderBottom: "1px solid #C4C4C4",
//   },
//   box: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "5px",
//   },
//   icon: {
//     width: "12px",
//     height: "16px",
//   },
// });

// export function ElementPolygon({ location: locationPolygon, index }) {
//   const [open, setOpen] = useState(false);
//   const [location, setLocation] = useState(locationPolygon);
//   const classes = useStyles();

//   const { title, cameras } = location;

//   const shortTitle = shorten(title);

//   function clickList() {
//     setOpen(!open);
//   }

//   function handleOnDragEnd(result) {
//     if (!result.destination) return;

//     console.log("outttttttttttttttttttt");
//     const items = Array.from(location);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     setLocation(items);
//   }

//   console.log("cameras", cameras);
//   return (
//     <>
//       <DragDropContext onDragEnd={handleOnDragEnd}>
//         <Droppable droppableId="location">
//           {(provided) => (
//             <List
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               component="div"
//               className={classes.root}
//             >
//               <Draggable
//                 key={location.id}
//                 draggableId={location.id}
//                 index={index}
//               >
//                 {(provided) => (
//                   <>
//                     <ListItem
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       ref={provided.innerRef}
//                     >
//                       <Box className={classes.box}>
//                         <Typography color="textSecondary" variant="h6">
//                           {index + 1}
//                         </Typography>
//                       </Box>
//                       <Box className={classes.box}>
//                         {open ? (
//                           <Button onClick={clickList}>
//                             <ExpandMore color="action" />
//                           </Button>
//                         ) : (
//                           <Button onClick={clickList}>
//                             <NavigateNextIcon color="action" />
//                           </Button>
//                         )}
//                       </Box>
//                       <Box className={classes.box}>
//                         <RoomIcon color="primary" />
//                       </Box>
//                       <ListItemText
//                         primary={shortTitle}
//                         className={classes.box}
//                       />
//                     </ListItem>
//                     <Collapse in={open} timeout="auto">
//                       <List component="div" disablePadding>
//                         {cameras.map((camera) => {
//                           return (
//                             <CameraPolygon key={camera.id} camera={camera} />
//                           );
//                         })}
//                       </List>
//                     </Collapse>
//                   </>
//                 )}
//               </Draggable>
//               {provided.placeholder}
//             </List>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </>
//   );
// }
