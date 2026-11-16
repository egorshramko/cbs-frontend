import Box from "@mui/material/Box";
import ObjectTypeProp from "./ObjectTypeProp";
import { FabricObject } from "fabric";
import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import ObjectCoordinates from "./ObjectCoordinates";

export default function ObjectProperties({
  object,
  controller
} : {
  object?: FabricObject,
  controller?: IEditorController
}) {
  return (
    <Box>
      <ObjectTypeProp object={ object } />
      <ObjectCoordinates 
        object={ object }
        controller={ controller } />
    </Box>
  );
}