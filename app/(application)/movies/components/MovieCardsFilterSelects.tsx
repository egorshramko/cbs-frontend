import { Box, MenuItem, Select } from "@mui/material";

export default function MovieCardsFilterSelects() {
  return (
    // <FormControl>
      <Box
        sx={{
          display: "flex",
          flexWrap: "none",
          flexDirection: "row",
          gap: "10px"
        }}
      >
        {/* <InputLabel id="genres-filter-label">Все жанры</InputLabel> */}
        <Select
          sx={{
            maxHeight: 35,
            minWidth: 180
          }}
          labelId="genres-filter-label"
          id="genres-filter-select"
          multiple
          value={ ["Все жанры"] }
        >
          <MenuItem value={ "Все жанры" }>Все жанры</MenuItem>
          <MenuItem value={ "Боевик" }>Боевик</MenuItem>
          <MenuItem value={ "Комедия" }>Комедия</MenuItem>
        </Select>
        <Select
          sx={{
            maxHeight: 35,
            minWidth: 180
          }}
          labelId="cinemas-filter-label"
          id="cinemas-filter-select"
          multiple
          value={[ "Все кинотеатры" ]}
        >
          <MenuItem value={"Все кинотеатры"}>Все кинотеатры</MenuItem>
          <MenuItem value={"Победа"}>Победа</MenuItem>
          <MenuItem value={"Аврора"}>Аврора</MenuItem>
        </Select>
      </Box>
    // </FormControl>
  );
}