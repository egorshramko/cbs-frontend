import { EditorEventData } from "@/app/(application)/lib/hall-editor/events/data/EditorEventData";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ObjectProperties from "./properties/ObjectProperties";

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