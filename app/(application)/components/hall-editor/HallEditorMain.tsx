'use client'

import Box from "@mui/material/Box";
import HallEditorElementsLibrary from "./components/HallEditorElementsLibrary";
import { useEffect, useRef, useState } from "react";
import HallEditorArea from "./components/HallEditorArea";
import HallEditorElementProperties from "./components/HallEditorElementProperties";
import { HallEditorCanvas } from "../../lib/hall-editor/HallEditorCanvas";
import { HallEditorCanvasController } from "../../lib/hall-editor/controller/HallEditorCanvasController";

export default function HallEditorMain() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mainCanvas, setMainCanvas] = useState<HallEditorCanvas | null>(null);

  useEffect(() => {

    if (!canvasRef.current) {
      return;
    }

    const canvas = new HallEditorCanvas(canvasRef.current);
    canvas.controller = new HallEditorCanvasController();
    setMainCanvas(canvas);

    return () => {
      mainCanvas?.dispose();
    }

  }, [canvasRef, mainCanvas]);

  return (
    <Box sx={{
      display: "flex"
    }}>
      <HallEditorElementsLibrary />
      <HallEditorArea canvasRef={ canvasRef } />
      <HallEditorElementProperties />
    </Box>
  );
}