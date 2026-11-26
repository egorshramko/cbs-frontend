import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import { ObjectType } from "@/app/(application)/lib/hall-editor/objects/ObjectType";
import RowConfiguration from "./config/RowConfiguration";
import { useState } from "react";
import RowConfigData from "@/app/(application)/lib/hall-editor/events/data/RowConfigData";
import ElementsLibraryUtils from "@/app/(application)/lib/hall-editor/model/util/ElementsLibraryUtils";
import { EditorEvent } from "@/app/(application)/lib/hall-editor/events/EditorEvent";

export default function HallEditorElementConfiguration({
  selectedElement,
  controller
} : {
  selectedElement: ObjectType,
  controller?: IEditorController
}) {

  const [rowConfiguration, setRowConfiguration] = useState<RowConfigData>(
    ElementsLibraryUtils.getDefaultRowConfig());

  function handleChangeRowConfiguration(config: RowConfigData) {
    setRowConfiguration(config);
    controller?.handleEvent(EditorEvent.CHANGE_CONFIG, config);
  }

  if (selectedElement === ObjectType.ROW) {
    return (
      <RowConfiguration 
        rowConfiguration={ rowConfiguration } 
        onChangeConfiguration={ handleChangeRowConfiguration }
        />
    );
  }
  return;

}