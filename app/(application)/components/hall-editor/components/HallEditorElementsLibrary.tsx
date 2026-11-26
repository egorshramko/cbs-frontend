'use client'

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { IEditorController } from "@/app/(application)/lib/hall-editor/controller/IEditorController";
import { EditorEvent } from "@/app/(application)/lib/hall-editor/events/EditorEvent";
import { ObjectType } from "@/app/(application)/lib/hall-editor/objects/ObjectType";
import NumberField from "../../NumberField";
import { NumberFieldRootChangeEventDetails } from "@base-ui/react";
import HallEditorElementConfiguration from "./elements/HallEditorElementConfiguration";

export default function HallEditorElementsLibrary({
  selectedElement,
  controller,
  onChangeElement
} : {
  selectedElement: string | null,
  controller?: IEditorController,
  onChangeElement: (element: string) => void
}) {

  function handleChangeLibraryElement(event: React.MouseEvent<HTMLElement>, element: string) {
    controller?.handleEvent(EditorEvent.CHANGE_SELECTED_ELEMENT, {
      selectedElement: element as ObjectType
    });
    onChangeElement(element);
  }

  function handleChangeElementsCount(
    value: number | null,
    eventDetails: NumberFieldRootChangeEventDetails
  ) {
    if (value !== null) {
      controller?.handleEvent(EditorEvent.CHANGE_ELEMENTS_COUNT, {
        elementsCount: value
      });
    }
    
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      <Typography variant="h6">
        Библиотека элементов
      </Typography>
      <ToggleButtonGroup 
        orientation="vertical"
        value={ selectedElement }
        exclusive
        onChange={ handleChangeLibraryElement }
      >
        <ToggleButton 
          value="screen" 
          aria-label="screen">
          Экран
        </ToggleButton>
        <ToggleButton value="seat" aria-label="seat">
          Место
        </ToggleButton>
        <ToggleButton value="row" aria-label="row">
          Ряд
        </ToggleButton>
      </ToggleButtonGroup>
      <Box sx={{
        display: "flex"
      }}>
        <NumberField 
          label="Количество элементов" 
          min={ 1 } 
          max={ 400 } 
          defaultValue={ 1 } 
          size="small" 
          helperText="Значение должно быть от 1 до 400" 
          onValueChange={ handleChangeElementsCount } />
      </Box>
      <HallEditorElementConfiguration 
        selectedElement={ selectedElement as ObjectType } 
        controller={ controller }
        />
    </Box>
  );
}