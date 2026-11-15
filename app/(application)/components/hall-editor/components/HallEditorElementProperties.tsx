import { EditorEventData } from "@/app/(application)/lib/hall-editor/events/data/EditorEventData";
import { HallObject } from "@/app/(application)/lib/hall-editor/objects/HallObject";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FabricObject } from "fabric";

function ObjectProperties({
  object
} : {
  object?: FabricObject
}) {
  if (!object) {
    return;
  }

  console.log("object not null");
  if (object instanceof HallObject) {
    return (
      <Typography>
        Тип объекта: HallObject
      </Typography>
    );
  }
  else {
    return (
      <Typography>
        Тип объекта: ActiveSelection
      </Typography>
    );
  }
}

export default function HallEditorElementProperties({
  showProperties,
  objectData
} : {
  showProperties?: boolean,
  objectData?: EditorEventData | null
}) {

  if (showProperties) {
    return (
      <Box>
        <Typography variant="h6">
          Свойства объекта
        </Typography>
        <ObjectProperties object={ objectData?.object } />
      </Box>
    );
  }

  return;
  
}