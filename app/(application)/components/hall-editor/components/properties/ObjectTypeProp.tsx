import { HallObject } from "@/app/(application)/lib/hall-editor/objects/HallObject";
import Typography from "@mui/material/Typography";
import { FabricObject } from "fabric";

export default function ObjectTypeProp({
  object
} : {
  object?: FabricObject
}) {

  if (!object) {
      return;
    }
  
    console.log("object not null");
    if (object instanceof HallObject) {
      return (
        <Typography>
          Тип объекта: HallObject
        </Typography>
      );
    }
    else {
      return (
        <Typography>
          Тип объекта: ActiveSelection
        </Typography>
      );
    }


}