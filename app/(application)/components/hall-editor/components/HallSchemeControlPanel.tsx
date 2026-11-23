import Button  from "@mui/material/Button";
import Box from "@mui/material/Box";
import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import { EditorEvent } from "@/app/(application)/lib/hall-editor/events/EditorEvent";

export default function HallSchemeControlPanel({
  controller
} : {
  controller?: IEditorController
}) {
  return (
    <Box>
      <Button sx={{
        width: "100%"
      }} 
        variant="contained"
        onClick={() => controller?.handleEvent(EditorEvent.EXPORT_JSON)}>
        Экпорт в JSON
      </Button>
    </Box>
  );
}