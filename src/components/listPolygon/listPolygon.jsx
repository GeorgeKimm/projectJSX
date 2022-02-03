import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { ElementPolygon } from "./elementPolygon";

export function ListPolygon({ data }) {
  const locationsPolygon = data.locations;

  const [locations, SetLocations] = useState(locationsPolygon);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    console.log("outttttttttttttttttttt");
    const items = Array.from(locations);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    SetLocations(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="locations">
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {locations.map((location, index) => {
              return (
                <ElementPolygon
                  key={location.id}
                  location={location}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}

// main

// export function ListPolygon({ data }) {
//   const { locations } = data;

//   return (
//     <>
//       {locations.map((location, index) => {
//         return (
//           <ElementPolygon key={location.id} location={location} index={index} />
//         );
//       })}
//     </>
//   );
// }

// all here

// import React, { useState } from "react";
// import { Box } from "@material-ui/core";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import { ElementPolygon } from "./elementPolygon";

// export function ListPolygon({ data }) {
//   // console.log("data", data);
//   // console.log("data.locations", data.locations);

//   const locationsPolygon = data.locations;

//   // console.log("locationsPolygon", locationsPolygon);
//   const [locations, SetLocations] = useState(locationsPolygon);
//   // console.log("locations", locations);

//   function handleOnDragEnd(result) {
//     if (!result.destination) return;

//     console.log("outttttttttttttttttttt");
//     const items = Array.from(locations);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     SetLocations(items);
//   }

//   return (
//     <>
//       <DragDropContext onDragEnd={handleOnDragEnd}>
//         <Droppable droppableId="locations">
//           {(provided) => (
//             <Box {...provided.droppableProps} ref={provided.innerRef}>
//               {locations.map((location, index) => {
//                 return (
//                   <Draggable
//                     key={location.id}
//                     draggableId={location.id}
//                     index={index}
//                   >
//                     {(provided) => (
//                       <Box
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         ref={provided.innerRef}
//                       >
//                         <ElementPolygon location={location} index={index} />
//                       </Box>
//                     )}
//                   </Draggable>
//                 );
//               })}
//               {provided.placeholder}
//             </Box>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </>
//   );
// }
