import { Seat } from "@/app/(application)/lib/hall-editor/objects/Seat";
import { ActiveSelection, FabricObject } from "fabric";
import SeatProperties from "./metadata/SeatProperties";
import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import { Typography } from "@mui/material";

export default function MetadataProperties({
  object,
  controller
} : {
  object?: FabricObject
  controller?: IEditorController
}) {

  if (!!object) {
    if (object instanceof Seat) {
      return <SeatProperties seats={[object]} controller={ controller }/>
    }
    else if (object instanceof ActiveSelection) {

      const selectedObjects = object.getObjects();

      //показ общих свойств сидений, если выбраны только сидения
      if (selectedObjects.every(obj => obj instanceof Seat)) {
        const seats: Seat[] = selectedObjects.map(obj => obj as Seat);
        return <SeatProperties seats={ seats } activeSelection={ object } controller={ controller } />;
      }
    }
  }
  

}