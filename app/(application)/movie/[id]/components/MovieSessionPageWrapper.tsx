'use client'

import { Box, Button, Container, Typography } from "@mui/material";
import Movie from "../lib/Movie"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import MovieInformationCalendar from "./MovieInformationCalendar";
import CinemaSessionFilteredCards from "./CinemaSessionFilteredCards";
import { useState } from "react";

export default function MovieSessionPageWrapper({
  movieInformation
} : {
  movieInformation: Movie
}) {

  const todayDate = new Date();

  // выбранная дата в календаре с расписанием
  const [selectedDate, setSelectedDate] = useState(todayDate);

  function handleDateChange(date: Date) {
    //TODO: сделать вызов API для выгрузки сеансов кинотеатров
    setSelectedDate(date);
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