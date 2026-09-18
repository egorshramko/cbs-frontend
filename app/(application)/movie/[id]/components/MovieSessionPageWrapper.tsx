'use client'

import { Box, Button, Container, Typography } from "@mui/material";
import Movie from "../lib/Movie"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import MovieInformationCalendar from "./MovieInformationCalendar";
import CinemaSessionFilteredCards from "./CinemaSessionFilteredCards";
import { useEffect, useState } from "react";
import { genres } from "../../../movies/lib/genres";
import LoadingSpinner from "@/app/(application)/components/LoadingSpinner";



export default function MovieSessionPageWrapper({
  id
} : {
  id: number
}) {

  const MOVIE_API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/v1/movie/" + id;
  const todayDate = new Date();

  // выбранная дата в календаре с расписанием
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [loading, setLoading] = useState(true);
  const [movieInformation, setMovieInformation] = useState<Movie>({} as Movie);

  function handleDateChange(date: Date) {
    //TODO: сделать вызов API для выгрузки сеансов кинотеатров
    setSelectedDate(date);
  }

  useEffect(() => {
    async function getMovieInformation(): Promise<Movie> {
    
      //TODO: сделать обработку ошибок и перенаправление на not found page или прочее
      const movieData: Movie = await fetch(MOVIE_API_URL)
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

      setMovieInformation(movieData);
      setLoading(false);

      return movieData;
        
    }

    getMovieInformation();

  }, [MOVIE_API_URL])

  if (loading) {
    return (
      <LoadingSpinner />
    )
  }

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
      <MovieInformationCalendar 
        movieInformation={movieInformation} 
        selectedDate={ selectedDate }
        onDateChange={ handleDateChange } />
      <CinemaSessionFilteredCards cinemas={ [] }/>
    </Container>
  );

}