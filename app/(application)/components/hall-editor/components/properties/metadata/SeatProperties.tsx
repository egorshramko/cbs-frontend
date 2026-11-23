import NumberField from "@/app/(application)/components/NumberField";
import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import { EditorEvent } from "@/app/(application)/lib/hall-editor/events/EditorEvent";
import { Seat } from "@/app/(application)/lib/hall-editor/objects/Seat";
import Box from "@mui/material/Box";

export default function SeatProperties({
  seat,
  controller
} : {
  seat: Seat,
  controller?: IEditorController
}) {

  function onRowChange(value: number | null) {

    if (value !== null) {
      seat.setRow(value);
      controller?.handleEvent(EditorEvent.CHANGE_OBJECT_PROPS, {
        object: seat
      });
    }

  }

  function onPlaceChange(value: number | null) {

    if (value !== null) {
      seat.setPlace(value);
      controller?.handleEvent(EditorEvent.CHANGE_OBJECT_PROPS, {
        object: seat
      });
    }

  }
  
  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <NumberField
        label="Ряд"
        value={seat.getRow()}
        size="small" 
        onValueChange={ onRowChange } />
      <NumberField
        label="Место"
        value={seat.getPlace()}
        size="small" 
        onValueChange={ onPlaceChange } />
    </Box>
  );

}