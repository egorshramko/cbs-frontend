import Box  from "@mui/material/Box";
import MovieCardsFilterButtons from "./MovieCardsFilterButtons";
import MovieCardsFilterSelects from "./MovieCardsFilterSelects";
import { MovieCardsFilterData, FilterButtonTypes } from "../lib/MovieCardsFilterData";

interface MovieCardsFilterProps {
  onFilterChange: (filter: MovieCardsFilterData) => void;
  filter: MovieCardsFilterData;
}

export default function MovieCardsFilter({ filter, onFilterChange }: MovieCardsFilterProps) {
  
  function handleChangeCardsFilterButton(activeButton: FilterButtonTypes) {
    const newFilter = {...filter, activeButton: activeButton};
    onFilterChange(newFilter);
  }
  
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingY: "20px",
        maxWidth: "1590px",
        width: "100%",
        marginX: "auto"
      }}
    >
      <MovieCardsFilterButtons activeButton={ filter.activeButton } onChangeActiveButton={ handleChangeCardsFilterButton } />
      <MovieCardsFilterSelects />
    </Box>
    
  );
}