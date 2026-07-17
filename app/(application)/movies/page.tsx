import { Container, Typography } from "@mui/material";
import MovieFilteredCards from "./components/MovieFilteredCards";

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