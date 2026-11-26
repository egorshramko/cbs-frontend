'use client'

import Box from "@mui/material/Box";
import HallEditorElementsLibrary from "./components/HallEditorElementsLibrary";
import { useEffect, useRef, useState } from "react";
import HallEditorArea from "./components/HallEditorArea";
import HallEditorElementProperties from "./components/HallEditorElementProperties";
import { HallEditorCanvas } from "../../lib/hall-editor/HallEditorCanvas";
import { HallEditorCanvasController } from "../../lib/hall-editor/controller/HallEditorCanvasController";
import { ElementsLibraryController } from "../../lib/hall-editor/controller/ElementsLibraryController";
import { ElementsLibrary } from "../../lib/hall-editor/model/ElementsLibrary";
import { ReactEventHandler } from "../../lib/hall-editor/events/ReactEventHandler";
import { EditorEvent } from "../../lib/hall-editor/events/EditorEvent";
import { EditorEventData } from "../../lib/hall-editor/events/data/EditorEventData";
import ObjectPropertiesController from "../../lib/hall-editor/controller/ObjectPropertiesController";
import HallSchemeControlPanel from "./components/HallSchemeControlPanel";
import JsonController from "../../lib/hall-editor/controller/JsonController";

export default function HallEditorMain() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [elementsLibraryController, setElementsLibraryController] = useState<ElementsLibraryController>();
  const [objectPropsController, setObjectPropsController] = useState<ObjectPropertiesController>();
  const [jsonController, setJsonController] = useState<JsonController>();
  const [showProperties, setShowProperties] = useState(false);
  const [objectData, setObjectData] = useState<EditorEventData | null | undefined>(null);

  function handleChangeLibraryElement(element: string) {
    console.log(element);
    setSelectedElement(element);
  }

  function handleAddObject(data?: EditorEventData) {
    
  }

  function handleObjectSelect(data?: EditorEventData) {
    console.debug("selected object from react context");
    console.debug(data?.object);
    setShowProperties(true);
    setObjectData(data);
  }

  function handleClearSelection(data?: EditorEventData) {
    setShowProperties(false);
    setObjectData(null);
  }

  function handleChangeObjectProperties(data?: EditorEventData) {
    console.debug("REACT CONTEXT");
    console.debug("object data:");
    console.debug(data);
    setObjectData(data);
  }
  
  useEffect(() => {

    if (!canvasRef.current) {
      return;
    }

    const canvas = new HallEditorCanvas(canvasRef.current);
    const library = new ElementsLibrary();
    const reactEventHandler = new ReactEventHandler();
    reactEventHandler.registerEventHandler(EditorEvent.OBJECT_ADD, handleAddObject);
    reactEventHandler.registerEventHandler(EditorEvent.OBJECT_SELECTED, handleObjectSelect);
    reactEventHandler.registerEventHandler(EditorEvent.SELECTION_CLEARED, handleClearSelection);
    reactEventHandler.registerEventHandler(EditorEvent.CHANGE_OBJECT_PROPS, handleChangeObjectProperties);
    canvas.controller = new HallEditorCanvasController(canvas, library, reactEventHandler);

    setElementsLibraryController(new ElementsLibraryController(library));
    setObjectPropsController(new ObjectPropertiesController(canvas, reactEventHandler));
    setJsonController(new JsonController(canvas));

    return () => {
      canvas.dispose();
    }

  }, [canvasRef]);

  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <Box sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        width: "300px",
        maxHeight: "600px",
        overflowY: "scroll",
        scrollbarWidth: "none"
      }}>
        <HallEditorElementsLibrary
          selectedElement={selectedElement}
          controller={elementsLibraryController}
          onChangeElement={handleChangeLibraryElement} />
        <HallSchemeControlPanel controller={ jsonController } />
        <HallEditorElementProperties showProperties={showProperties} objectData={ objectData } controller={ objectPropsController } />
      </Box>
      <HallEditorArea canvasRef={ canvasRef } />
      
    </Box>
  );
}