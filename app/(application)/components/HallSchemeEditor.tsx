'use client'

import { useEffect, useRef } from "react"
import { Box } from "@mui/material";
import { Canvas } from "fabric";
import HallSchemeEditorControl from "./HallSchemeEditorControl";

export default function HallSchemeEditor() {

  const canvasRef = useRef(null);

  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <canvas id="editor-canvas" ref={canvasRef} />
      <HallSchemeEditorControl canvasRef={ canvasRef } />
    </Box>    
  )
}