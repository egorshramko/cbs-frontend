'use client'

import Box from "@mui/material/Box";
import HallEditorElementsLibrary from "./components/HallEditorElementsLibrary";
import { useEffect, useRef, useState } from "react";
import HallEditorArea from "./components/HallEditorArea";
import HallEditorElementProperties from "./components/HallEditorElementProperties";
import { HallEditorCanvas } from "../../lib/hall-editor/HallEditorCanvas";
import { HallEditorCanvasController } from "../../lib/hall-editor/controller/HallEditorCanvasController";
import { ElementsLibraryController } from "../../lib/hall-editor/controller/ElementsLibraryController";

export default function HallEditorMain() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [elementsLibraryController, setElementsLibraryController] = useState<ElementsLibraryController>();

  function handleChangeLibraryElement(element: string) {
    console.log(element);
    setSelectedElement(element);
  }

  useEffect(() => {

    if (!canvasRef.current) {
      return;
    }

    const canvas = new HallEditorCanvas(canvasRef.current);
    canvas.controller = new HallEditorCanvasController(canvas);

    setElementsLibraryController(new ElementsLibraryController(canvas));

    return () => {
      canvas.dispose();
    }

  }, [canvasRef]);

  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <HallEditorElementsLibrary 
        selectedElement={ selectedElement } 
        controller = { elementsLibraryController }
        onChangeElement={ handleChangeLibraryElement } />
      <HallEditorArea canvasRef={ canvasRef } />
      <HallEditorElementProperties />
    </Box>
  );
}