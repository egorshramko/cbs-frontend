'use client'

import Box from "@mui/material/Box";
import SessionsMoviePoster from "./SessionsMoviePoster";
import MovieTextInformationCalendarHolder from "./MovieTextInformationCalendarHolder";
import Movie from "../lib/Movie";
import { useState } from "react";

const movie: Movie = {
  id: "2",
  imageUrl: "/temp-poster.png",
  name: "Последний богатырь. Колобок",
  genre: ["COMEDY", "ADVENTURE"],
  duration: {
    hours: 1,
    minutes: 49
  },
  country: "Россия",
  ageLimit: 6,
  releaseDate: new Date("2026-08-06"),
  cinemas: [
    {
      id: 1,
      name: "Победа",
      imageUrl: "/temp-poster.png",
      city: "Новосибирск",
      address: "ул. Ленина, 7",
      features: {
        hallsCount: 2,
        imaxAvailable: false,
        parkingAvailable: true
      },
      hallSessions: [
        {
          hallName: "Большой зал",
          hallMovieFormats: new Set(["2d", "3d"]),
          sessions: [
            {
              sessionDatetime: new Date("2026-08-25T19:00:00.000"),
              isSelected: false
            },
            {
              sessionDatetime: new Date("2026-08-25T22:00:00.000"),
              isSelected: false
            },
            {
              sessionDatetime: new Date("2026-08-26T10:00:00.000"),
              isSelected: false
            }
          ]
        },
        {
          hallName: "Малый зал",
          hallMovieFormats: new Set(["2d"]),
          sessions: [
            {
              sessionDatetime: new Date("2026-08-25T19:00:00.000"),
              isSelected: false
            },
            {
              sessionDatetime: new Date("2026-08-25T22:00:00.000"),
              isSelected: false
            },
            {
              sessionDatetime: new Date("2026-08-26T10:30:00.000"),
              isSelected: false
            }
          ]
        }
      ]
    }
  ]
}

async function getMovieSessionsByDate(movie: Movie, date: Date) {
  //TODO: сделать вызов данных сеанса
}

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