import Box  from "@mui/material/Box";
import MovieCardsFilterButtons from "./MovieCardsFilterButtons";
import MovieCardsFilterSelects from "./MovieCardsFilterSelects";
import { MovieCardsFilterData, FilterButtonTypes } from "../lib/MovieCardsFilterData";
import { CinemaData } from "../lib/CinemaData";

interface MovieCardsFilterProps {
  onFilterChange: (filter: MovieCardsFilterData) => void;
  filter: MovieCardsFilterData;
  cinemas: Array<CinemaData>;
}

export default function MovieCardsFilter({ filter, cinemas, onFilterChange }: MovieCardsFilterProps) {
  
  function handleChangeCardsFilterButton(activeButton: FilterButtonTypes) {
    const newFilter = {...filter, activeButton: activeButton};
    onFilterChange(newFilter);
  }

  function handleChangeGenreFilterSelect(genres: string[]) {
    const newFilter = {...filter, genres: genres};
    onFilterChange(newFilter);
  }

  function handleChangeCinemaFilterSelect(cinemas: Array<number>) {
    const newFilter = {...filter, cinemas: cinemas};
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
      <MovieCardsFilterButtons 
        activeButton={ filter.activeButton } 
        onChangeActiveButton={ handleChangeCardsFilterButton } />
      <MovieCardsFilterSelects 
        selectedGenres={ filter.genres } 
        selectedCinemas={ filter.cinemas } 
        allCinemas={ cinemas } 
        onGenreFilterChange={ handleChangeGenreFilterSelect }
        onCinemaFilterChange={ handleChangeCinemaFilterSelect } />
    </Box>
    
  );
}