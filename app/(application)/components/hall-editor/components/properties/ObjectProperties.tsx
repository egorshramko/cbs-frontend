import Box from "@mui/material/Box";
import ObjectTypeProp from "./ObjectTypeProp";
import { FabricObject } from "fabric";
import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import ObjectCoordinates from "./ObjectCoordinates";
import { EditorEvent } from "@/app/(application)/lib/hall-editor/events/EditorEvent";
import RemoveButton from "./RemoveButton";

export default function ObjectProperties({
  object,
  controller
} : {
  object?: FabricObject,
  controller?: IEditorController
}) {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      <ObjectTypeProp object={ object } />
      <ObjectCoordinates 
        object={ object }
        controller={ controller } />
      <RemoveButton onClick={ () => controller?.handleEvent(EditorEvent.REMOVE_OBJECT, {
        object: object
      }) } />
    </Box>
  );
}