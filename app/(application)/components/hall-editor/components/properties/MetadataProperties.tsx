import { Seat } from "@/app/(application)/lib/hall-editor/objects/Seat";
import { FabricObject } from "fabric";
import SeatProperties from "./metadata/SeatProperties";
import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";

export default function MetadataProperties({
  object,
  controller
} : {
  object?: FabricObject
  controller?: IEditorController
}) {

  if (!!object) {
    if (object instanceof Seat) {
      return <SeatProperties seat={object} />
    }
  }
  

}