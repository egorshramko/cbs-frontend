import HallSchemeEditorManipulator from "../../lib/HallSchemeEditorManipulator";
import { Box, Button, Slider, Typography } from "@mui/material";

export default function HallSchemeEditorControl({
  canvasManipulator
} : {
  canvasManipulator: HallSchemeEditorManipulator | null
}) {

  function handleChangeScreenCurvative(event: Event, value: number) {
    canvasManipulator?.changeScreenCurvative(value - 1);   
  }

  return (
    <Box sx={{
      minWidth: 300,
      width: '100%',
      paddingX: "30px",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "center",
      overflowY: 'auto'
    }}>
      <Typography variant="h5">
        Панель управления
      </Typography>
      <Typography variant="body1">
        Параметры экрана
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
      <Box sx={{
        display: "flex",
        width: "100%",
        gap: 1
      }}>
        <Typography sx={{
          width: "50%"
        }} variant="body2">
          Размер экрана
        </Typography>
        <Slider
          aria-label="screen-curvative"
          defaultValue={0}
          getAriaValueText={(value) => { return String(value) }}
          valueLabelDisplay="auto"
          step={0.05}
          min={0.0}
          max={0.4}
          onChange={(event, value) => { canvasManipulator?.changeScreenLength(value) }}
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
          onChange={ (event, value) => { canvasManipulator?.changeGridParameters(value) } }
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
          onChange={ (event, value) => { canvasManipulator?.changeGridParameters(undefined, value) } }
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
          onChange={ (event, value) => { canvasManipulator?.changeGridParameters(undefined, undefined, value) } }
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
          onChange={(event, value) => { canvasManipulator?.changeGridParameters(undefined, undefined, undefined, value) }}
        />
      </Box>
      <Box sx={{
        display: "flex",
        width: "100%"
      }}>
        <Button variant="contained" onClick={ () => canvasManipulator?.exportScheme() }>
          Экспорт схемы
        </Button>
      </Box>
    </Box>
    
  );

}