'use client'

import Box from "@mui/material/Box";
import SessionsMoviePoster from "./SessionsMoviePoster";
import MovieTextInformationCalendarHolder from "./MovieTextInformationCalendarHolder";
import Movie from "../lib/Movie";

// верхняя часть страницы выбора сеанса
export default function MovieInformationCalendar({
  movieInformation, selectedDate, onDateChange
} : {
  movieInformation: Movie,
  selectedDate: Date,
  onDateChange: (date: Date) => void
}) {

  function handleDateChange(date: Date) {
    onDateChange(date);
  }

  return (
    <Box sx={{
      display: "flex",
      gap: "24px",
      paddingX: 0,
      paddingY: "10px",
      maxWidth: "1488px",
      marginX: "auto"
    }}>
      <SessionsMoviePoster posterUrl={ movieInformation.imageUrl } />
      <MovieTextInformationCalendarHolder 
        movie={ movieInformation } 
        selectedDate={ selectedDate } 
        onDateChange={ handleDateChange } />
    </Box>
  );
}