import Box from "@mui/material/Box";
import { FabricObject } from "fabric";
import NumberField from "../../../NumberField";
import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import { EditorEvent } from "@/app/(application)/lib/hall-editor/events/EditorEvent";

export default function ObjectCoordinates({
  object,
  controller
} : {
  object?: FabricObject,
  controller?: IEditorController
}) {

  return (
    <Box sx={{
      display: "flex"
    }}>
      <NumberField 
        label="X"
        value={ Math.floor(object === undefined ? 0 : object.getX()) }
        size="small"
        onValueChange={ (value: number | null) => {
            let convertedValue: number | undefined;
            if (value !== null) {
              convertedValue = value;
            }
            controller?.handleEvent(EditorEvent.CHANGE_OBJECT_PROPS, {
              object: object,
              x: convertedValue
            });

          } } />
      <NumberField
        label="Y"
        value={ Math.floor(object === undefined ? 0 : object.getY()) }
        size="small"
        onValueChange={(value: number | null) => {
          let convertedValue: number | undefined;
          if (value !== null) {
            convertedValue = value;
          }
          controller?.handleEvent(EditorEvent.CHANGE_OBJECT_PROPS, {
            object: object,
            y: convertedValue
          });

        }} />
    </Box>
  );

}