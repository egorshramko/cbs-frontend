import { Container, Typography } from "@mui/material";
import MovieCardsFilter from "./components/MovieCardsFilter";
import MovieCardsWrapper from "./components/MovieCardsWrapper";
import MovieFilteredCards from "./components/MovieFilteredCards";
import MovieCardProps from "./lib/MovieCardProps";

export default function MoviesPage() {

  return (
    <Container maxWidth="xl">
      <Typography 
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          my: "20px"
        }}
        variant="h1"
      >
          Афиша
      </Typography>
      <MovieFilteredCards />
    </Container>
    
  );
}