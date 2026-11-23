import NumberField from "@/app/(application)/components/NumberField";
import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import { EditorEvent } from "@/app/(application)/lib/hall-editor/events/EditorEvent";
import { Seat } from "@/app/(application)/lib/hall-editor/objects/Seat";
import Box from "@mui/material/Box";
import { ActiveSelection } from "fabric";

export default function SeatProperties({
  seats,
  controller,
  activeSelection
} : {
  seats: Seat[],
  controller?: IEditorController,
  activeSelection?: ActiveSelection
}) {

  function onRowChange(value: number | null) {

    console.debug("on row change starts");

    if (value !== null) {

      console.debug("value not null");

      if (seats.length == 1) {

        console.debug("single seat");

        const seat = seats[0];
        seat.setRow(value);
        controller?.handleEvent(EditorEvent.CHANGE_OBJECT_PROPS, {
          object: seat,
          row: value
        });
      }
      else if (seats.length > 1) {

        console.debug("many seats");
        seats.forEach(seat => seat.setRow(value));
        controller?.handleEvent(EditorEvent.CHANGE_OBJECT_PROPS, {
          object: activeSelection,
          row: value
        });
      }
      
    }

    console.debug("on row change ends");

  }

  function onPlaceChange(value: number | null) {

    if (value !== null) {

      if (seats.length == 1) {
        const seat = seats[0];
        seat.setPlace(value);
        controller?.handleEvent(EditorEvent.CHANGE_OBJECT_PROPS, {
          object: seat,
          place: value
        });
      }
      else if (seats.length > 1) {
        seats.forEach(seat => seat.setPlace(value));
        controller?.handleEvent(EditorEvent.CHANGE_OBJECT_PROPS, {
          object: activeSelection,
          place: value
        });
      }
      
    }

  }

  function getCommonRow(seats: Seat[]): number | null {

    if (seats.length > 0) {
      const firstSeatRow = seats[0].getRow();

      if (firstSeatRow !== undefined && seats.every(seat => seat.getRow() === firstSeatRow)) {
        return firstSeatRow;
      }

    }

    return null;
  } 

  function getCommonPlace(seats: Seat[]): number | null {
    if (seats.length > 0) {
      const firstSeatPlace = seats[0].getPlace();

      if (firstSeatPlace !== undefined && seats.every(seat => seat.getPlace() === firstSeatPlace)) {
        return firstSeatPlace;
      }

    }

    return null;
  }
  
  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <NumberField
        label="Ряд"
        value={getCommonRow(seats)}
        size="small" 
        onValueChange={ onRowChange } />
      <NumberField
        label="Место"
        value={getCommonPlace(seats)}
        size="small" 
        onValueChange={ onPlaceChange } />
    </Box>
  );

}