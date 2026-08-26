import Box from "@mui/material/Box";
import CinemaSessionFilteredCards from "./components/CinemaSessionFilteredCards";
import MovieInformationCalendar from "./components/MovieInformationCalendar";
import { Button, Container, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Movie from "./lib/Movie";
import { genres } from "../../movies/lib/genres";
import Cinema from "./lib/Cinema";

async function getMovieInformation(id: number): Promise<Movie> {

  const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/v1/movie/" + id;

  //TODO: сделать обработку ошибок и перенаправление на not found page или прочее
  const movieData: Movie = await fetch(API_URL)
      .then((response) => response.json())
      .then((responseBody) => {
        const movieInformation: Movie = {
          id: responseBody.id,
          imageUrl: responseBody.imageUrl,
          name: responseBody.name,
          genre: responseBody.genre
                  .map((apiGenre: string) => 
                      genres.filter((genre) => genre.code === apiGenre)[0].name.toLowerCase()),
          duration: {
            hours: responseBody.duration.hours,
            minutes: responseBody.duration.minutes
          },
          country: responseBody.country,
          ageLimit: responseBody.ageLimit,
          releaseDate: new Date(responseBody.releaseDate),
          cinemas: []
        }
        return movieInformation;
      });
  
  console.log("movieData");
  console.log(movieData);
  return movieData;
    
}

export default async function MovieSessionsPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {

  const { id } = await params;

  const movieInformation: Movie = await getMovieInformation(id);

  return (
    <Container sx={{
      marginTop: "24px"
    }} maxWidth="xl">
      <Button sx={{
          paddingLeft: 0
        }} 
        variant="text"
        href="/movies">
        <Box sx={{
          display: "flex",
          gap: "10px"
        }}>
          <ArrowBackOutlinedIcon />
          <Typography sx={{
            fontWeight: 400,
            fontSize: "14px"
          }}>
            Назад к афише
          </Typography>
        </Box>
      </Button>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          my: "12px"
        }}
        variant="h1"
      >
        Выберите сеанс
      </Typography>
      <MovieInformationCalendar movieInformation={ movieInformation } />
      <CinemaSessionFilteredCards />
    </Container>
  );

}