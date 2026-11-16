import { HallObject } from "@/app/(application)/lib/hall-editor/objects/HallObject";
import { Seat } from "@/app/(application)/lib/hall-editor/objects/Seat";
import Typography from "@mui/material/Typography";
import { FabricObject } from "fabric";

export default function ObjectTypeProp({
  object
} : {
  object?: FabricObject
}) {

  function getObjectType(object: FabricObject) {
    if (object instanceof HallObject) {
      return object.getType();
    }
    else {
      return "Комбинация";
    }
  }

  if (!object) {
    return;
  }
  
  return (
    <Typography variant="body2">
      {"Объект: " + getObjectType(object)}
    </Typography>
  );

}