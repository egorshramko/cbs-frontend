import { Box, Typography } from "@mui/material";
import MovieCardProps from "../lib/MovieCardProps";
import MovieCard from "./MovieCard";

export default function MovieCardsWrapper({ movies }: { movies: Array<MovieCardProps> }) {

  const movieCards = [...movies].map((movie) => {
    return (
      <MovieCard key={ movie.id } props={ movie } />
    );
  });

  if (!!movies && movies.length > 0) {
    return (
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "22px",
        maxWidth: "1590px",
        width: "100%",
        marginX: "auto"
      }}>
        {movieCards}
      </Box>
    );
  }
  else {
    return (
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "22px",
        maxWidth: "1590px",
        width: "100%",
        marginX: "auto"
      }}>
        <Typography variant="body1">
          Ничего не найдено
        </Typography>
      </Box>
    )
  }
  
}