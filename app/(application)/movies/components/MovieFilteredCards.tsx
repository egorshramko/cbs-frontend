import { Box } from "@mui/material";
import MovieCardsFilter from "./MovieCardsFilter";
import MovieCardsWrapper from "./MovieCardsWrapper";
import MovieCardProps from "../lib/MovieCardProps";

const ageLimits: Array<number> = [0, 6, 12, 16, 18];

const moviesData: Array<MovieCardProps> = 
    Array(11).fill(null).map((_, index) => {
        return {
          id: String(index),
          imageUrl: "/temp-poster.png",
          name: "Название фильма " + index,
          genre: "Жанр",
          country: "Страна",
          duration: { hours: 2, minutes: 15 },
          year: 2026,
          ageLimit: ageLimits[index % ageLimits.length]
        }
    });

export default function MovieFilteredCards() {
  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box>
        <MovieCardsFilter />
      </Box>
      <Box>
        <MovieCardsWrapper movies={moviesData} />
      </Box>
    </Box>
  );
}