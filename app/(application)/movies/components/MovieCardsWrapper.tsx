import { Box } from "@mui/material";
import MovieCardProps from "../lib/MovieCardProps";
import MovieCard from "./MovieCard";

export default function MovieCardsWrapper({ movies }: { movies: Array<MovieCardProps> }) {

  const movieCards = movies.map((movie) => {
    return (
      <MovieCard key={ movie.id } props={ movie } />
    );
  });

  return (
    <Box sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px"
    }}>
      { movieCards }
    </Box>
  );
}