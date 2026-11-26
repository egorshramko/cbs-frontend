
import NumberField from "@/app/(application)/components/NumberField";
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

function RoundingRadius({
  show
} : {
  show: boolean
}) {
  if (show) {
    return (
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}>
        <NumberField
          label="Радиус скругления"
          size="small" />
      </Box>
    );
  }
}

export default function RowConfiguration() {

  const [showRoundingRadius, setShowRoundingRadius] = useState(false);

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      <Box sx={{
        display: "flex",
        gap: "10px"
      }}>
        <NumberField
          label="Номер ряда"
          size="small" />
        <NumberField
          label="Кол-во мест"
          size="small" />
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column"
      }}>
        <FormControlLabel 
          control={
            <Checkbox 
              defaultChecked={ false } 
              value={ showRoundingRadius } 
              onChange={() => { setShowRoundingRadius(!showRoundingRadius) }} />
          }
          label="Закруглить ряд"
        />
      </Box>
      <RoundingRadius show={ showRoundingRadius } />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}>
        <FormControl size="small">
          <InputLabel id="seat-numbering-label">Нумерация мест</InputLabel>
          <Select 
            labelId="seat-numbering-label"
            id="seat-numbering-widget"
            label="Нумерация мест"
          >
            <MenuItem>Слева направо</MenuItem>
            <MenuItem>Справа налево</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}