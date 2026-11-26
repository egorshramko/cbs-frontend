import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import { ObjectType } from "@/app/(application)/lib/hall-editor/objects/ObjectType";
import RowConfiguration from "./config/RowConfiguration";

export default function HallEditorElementConfiguration({
  selectedElement,
  controller
} : {
  selectedElement: ObjectType,
  controller?: IEditorController
}) {

  if (selectedElement === ObjectType.ROW) {
    return (
      <RowConfiguration />
    );
  }
  return;

}