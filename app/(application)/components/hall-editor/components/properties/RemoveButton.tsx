import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import Button from "@mui/material/Button";

export default function RemoveButton({
  onClick
} : {
  onClick: () => void
}) {

  return (
    <Button 
      sx={{
        bgcolor: "#862222",
        color: "white"
      }}
      variant="contained"
      onClick={ onClick }>
      Удалить объект
    </Button>
  );


}