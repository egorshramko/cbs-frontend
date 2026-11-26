
import NumberField from "@/app/(application)/components/NumberField";
import RowConfigData from "@/app/(application)/lib/hall-editor/events/data/RowConfigData";
import { RowNumerationDirectionData } from "@/app/(application)/lib/hall-editor/events/data/RowNumerationDirection";
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import { ChangeEvent, useState } from "react";

function RoundingRadius({
  show,
  onValueChange
} : {
  show: boolean,
  onValueChange?: (value: number | null) => void
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
          size="small" 
          onValueChange={ onValueChange } />
      </Box>
    );
  }
}

export default function RowConfiguration({
  rowConfiguration,
  onChangeConfiguration
} : {
  rowConfiguration: RowConfigData,
  onChangeConfiguration: (config: RowConfigData) => void
}) {

  const [showRoundingRadius, setShowRoundingRadius] = useState(false);

  function handleChangeRowNumber(value: number | null) {
    const config = {...rowConfiguration};
    config.rowNumber = !!value ? value : undefined;
    onChangeConfiguration(config);
  }

  function handleChangePlacesCount(value: number | null) {
    const config = {...rowConfiguration};
    if (value !== null) {
      config.placesCount = value;
    }
    onChangeConfiguration(config);
  }

  function handleChangeRoundedFlag(event: ChangeEvent<HTMLInputElement, Element>, checked: boolean) {
    const config = {...rowConfiguration};
    config.rounded = checked;
    setShowRoundingRadius(checked);
    onChangeConfiguration(config);
  }

  function handleChangeRoundingRadius(value: number | null) {
    const config = {...rowConfiguration};
    config.roundingRadius = !!value ? value : 100;
    onChangeConfiguration(config);
  }

  function handleChangeNumberingDirection(event: SelectChangeEvent) {
    const config = {...rowConfiguration};
    config.numerationDirection = event.target.value as RowNumerationDirectionData;
    onChangeConfiguration(config);
  }

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
          size="small" 
          onValueChange={ handleChangeRowNumber }/>
        <NumberField
          label="Кол-во мест"
          size="small" 
          onValueChange={ handleChangePlacesCount } />
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
              onChange={ handleChangeRoundedFlag } />
          }
          label="Закруглить ряд"
        />
      </Box>
      <RoundingRadius 
        show={ showRoundingRadius } 
        onValueChange={ handleChangeRoundingRadius } />
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
            value={ rowConfiguration.numerationDirection } 
            onChange={ handleChangeNumberingDirection }
          >
            <MenuItem value="left-right">Слева направо</MenuItem>
            <MenuItem value="right-left">Справа налево</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}