'use client'

import { Box } from "@mui/material";
import MovieTextInformation from "./MovieTextInformation";
import Calendar from "@/app/(application)/components/Calendar";
import Movie from "../lib/Movie";

// Окно выбора сеанса. Контейнер, содержащий информацию о фильме 
// и календарь для выбора даты сеанса
export default function MovieTextInformationCalendarHolder({
  movie, selectedDate
} : {
  movie: Movie,
  selectedDate: Date
}) {

  function handleDateChange(date: Date) {
    console.log("New date: " + date.toLocaleDateString());
  }

  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingBottom: "3px"
    }}>
      <MovieTextInformation movie={ movie } />
      <Calendar onDateChange={ handleDateChange } />
    </Box>
  )
}