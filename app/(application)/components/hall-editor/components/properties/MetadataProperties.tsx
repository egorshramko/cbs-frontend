import { Seat } from "@/app/(application)/lib/hall-editor/objects/Seat";
import { FabricObject } from "fabric";
import SeatProperties from "./metadata/SeatProperties";

export default function MetadataProperties({
  object
} : {
  object?: FabricObject
}) {

  if (!!object) {
    if (object instanceof Seat) {
      return <SeatProperties seat={object} />
    }
  }
  

}