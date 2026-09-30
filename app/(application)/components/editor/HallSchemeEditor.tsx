'use client'

import { useRef } from "react"
import { Box } from "@mui/material";
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