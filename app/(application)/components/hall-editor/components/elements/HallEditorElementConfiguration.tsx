import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import { ObjectType } from "@/app/(application)/lib/hall-editor/objects/ObjectType";
import RowConfiguration from "./config/RowConfiguration";
import { useState } from "react";
import RowConfigData from "@/app/(application)/lib/hall-editor/events/data/RowConfigData";
import { RowNumerationDirectionData } from "@/app/(application)/lib/hall-editor/events/data/RowNumerationDirection";

export default function HallEditorElementConfiguration({
  selectedElement,
  controller
} : {
  selectedElement: ObjectType,
  controller?: IEditorController
}) {

  const [rowConfiguration, setRowConfiguration] = useState<RowConfigData>({
    placesCount: 10,
    rounded: false,
    numerationDirection: RowNumerationDirectionData.LEFT_TO_RIGHT
  });

  function handleChangeRowConfiguration(config: RowConfigData) {
    setRowConfiguration(config);
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