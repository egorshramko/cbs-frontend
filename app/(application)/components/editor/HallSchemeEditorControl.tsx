import { useEffect } from "react";
import HallSchemeEditorManipulator from "../../lib/HallSchemeEditorManipulator";
import { Box, Slider, Typography } from "@mui/material";

let canvasManipulator: HallSchemeEditorManipulator;

export default function HallSchemeEditorControl({
  canvasRef
} : {
  canvasRef: React.RefObject<HTMLCanvasElement | null>
}) {

  useEffect(() => {
    if (!!canvasRef.current) {
      canvasManipulator = new HallSchemeEditorManipulator(canvasRef.current);
    }

    return () => {
      canvasManipulator.dispose();
    }
  }, [canvasRef]);

  function handleChangeScreenCurvative(event: Event, value: number) {
    canvasManipulator.changeScreenCurvative(value - 1);   
  }

  return (
    <Box sx={{
      minWidth: 300,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "center"
    }}>
      <Typography variant="h5">
        Панель управления
      </Typography>
      <Box sx={{
        display: "flex",
        width: "100%",
        gap: 1
      }}>
        <Typography sx={{
          width: "50%"
        }} variant="body2">
          Изгиб экрана
        </Typography>
        <Slider 
          aria-label="screen-curvative"
          defaultValue={1}
          getAriaValueText={(value) => {return String(value)}}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={4}
          onChange={handleChangeScreenCurvative}
        />
      </Box>
      <Typography variant="body1">
        Параметры сетки
      </Typography>
      <Box sx={{
        display: "flex",
        width: "100%",
        gap: 1
      }}>
        <Typography sx={{
          width: "50%"
        }} variant="body2">
          Строки
        </Typography>
        <Slider
          aria-label="screen-curvative"
          defaultValue={10}
          getAriaValueText={(value) => { return String(value) }}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={40}
          onChange={ (event, value) => { canvasManipulator.changeGridParameters(value) } }
        />
      </Box>
      <Box sx={{
        display: "flex",
        width: "100%",
        gap: 1
      }}>
        <Typography sx={{
          width: "50%"
        }} variant="body2">
          Столбцы
        </Typography>
        <Slider
          aria-label="screen-curvative"
          defaultValue={10}
          getAriaValueText={(value) => { return String(value) }}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={40}
          onChange={ (event, value) => { canvasManipulator.changeGridParameters(undefined, value) } }
        />
      </Box>
      <Box sx={{
        display: "flex",
        width: "100%",
        gap: 1
      }}>
        <Typography sx={{
          width: "50%"
        }} variant="body2">
          Горизонтальный отступ между клетками
        </Typography>
        <Slider
          aria-label="screen-curvative"
          defaultValue={10}
          getAriaValueText={(value) => { return String(value) }}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={20}
          onChange={ (event, value) => { canvasManipulator.changeGridParameters(undefined, undefined, value) } }
        />
      </Box>
      <Box sx={{
        display: "flex",
        width: "100%",
        gap: 1
      }}>
        <Typography sx={{
          width: "50%"
        }} variant="body2">
          Вертикальный отступ между клетками
        </Typography>
        <Slider
          aria-label="screen-curvative"
          defaultValue={10}
          getAriaValueText={(value) => { return String(value) }}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={20}
          onChange={(event, value) => { canvasManipulator.changeGridParameters(undefined, undefined, undefined, value) }}
        />
      </Box>
    </Box>
    
  );

}