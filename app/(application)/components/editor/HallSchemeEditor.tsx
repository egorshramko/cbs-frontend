'use client'

import { useEffect, useRef, useState } from "react"
import { Box } from "@mui/material";
import HallSchemeEditorControl from "./HallSchemeEditorControl";
import HallSchemeEditorManipulator from "../../lib/HallSchemeEditorManipulator";

export default function HallSchemeEditor() {

  const canvasRef = useRef(null);
  const [manipulator, setManipulator] = useState<HallSchemeEditorManipulator | null>(null);

  useEffect(() => {
    
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const manipulatorInstance = new HallSchemeEditorManipulator(canvas);
    setManipulator(manipulatorInstance);

    return () => {
      manipulatorInstance?.dispose();
    }

  }, [canvasRef]);

  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <canvas id="editor-canvas" ref={canvasRef} />
      <HallSchemeEditorControl canvasManipulator={ manipulator } />
    </Box>    
  )
}