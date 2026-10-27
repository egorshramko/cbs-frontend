'use client'

import Box from "@mui/material/Box";
import HallEditorElementsLibrary from "./components/HallEditorElementsLibrary";
import { useRef } from "react";
import HallEditorArea from "./components/HallEditorArea";
import HallEditorElementProperties from "./components/HallEditorElementProperties";

export default function HallEditorMain() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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