import Button from "@mui/material/Button";
import { Canvas } from "fabric";
import { useEffect, useState } from "react";
import HallSchemeEditorManipulator from "../lib/HallSchemeEditorManipulator";
import { Box, Slider, Typography } from "@mui/material";

let canvasManipulator: HallSchemeEditorManipulator;

function ScreenControl({
  screenAdded, onScreenAdded,
  onChangeScreenCurvative
} : {
  screenAdded: boolean,
  onScreenAdded: () => void,
  onChangeScreenCurvative: (event: Event, value: number, activeThumb: number) => void
}) {

  const marks = [
    {
      value: 0, 
      label: '0'
    },
    {
      value: 1,
      label: '1'
    },
    {
      value: 2,
      label: '2'
    },
    {
      value: 3,
      label: '3'
    }
  ]

  if (screenAdded) {
    return (
      <Box>
        <Typography>
          Изгиб экрана
        </Typography>
        <Slider 
          aria-label="screen-curvature"
          defaultValue={0}
          valueLabelDisplay="off"
          step={1}
          marks
          min={0}
          max={3}
          onChange={ onChangeScreenCurvative }
        />
      </Box>
    );
  }
  return (
    <Button id="add-screen-btn" onClick={ onScreenAdded }>
      Добавить экран
    </Button>
  );

}

export default function HallSchemeEditorControl({
  canvasRef
} : {
  canvasRef: React.RefObject<HTMLCanvasElement | null>
}) {

  const [screenAdded, setScreenAdded] = useState(true);

  useEffect(() => {
    if (!!canvasRef.current) {
      canvasManipulator = new HallSchemeEditorManipulator(canvasRef.current);
    }

    return () => {
      canvasManipulator.dispose();
    }
  }, [canvasRef]);

  function handleAddScreenBtnClick() {
    canvasManipulator.addScreen();
    setScreenAdded(true);
  }

  function handleChangeScreenCurvative(event: Event, value: number, activeThumb: number) {
    canvasManipulator.changeScreenCurvative(value);   
  }

  return (
    <Box>
      <ScreenControl 
        screenAdded={ screenAdded } 
        onScreenAdded={ handleAddScreenBtnClick } 
        onChangeScreenCurvative={ handleChangeScreenCurvative } />
    </Box>
    
  );

}