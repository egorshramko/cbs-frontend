'use client'

import { Box } from "@mui/material";
import MovieCardsFilter from "./MovieCardsFilter";
import MovieCardsWrapper from "./MovieCardsWrapper";
import MovieCardProps from "../lib/MovieCardProps";
import { useState } from "react";
import { MovieCardsFilterData } from "../lib/MovieCardsFilterData";
import { genres } from "../lib/genres";
import { CinemaData } from "../lib/CinemaData";

//Временные данные
//TODO: убрать, когда появится API
const ageLimits: Array<number> = [0, 6, 12, 16, 18];

const moviesData: Array<MovieCardProps> = 
    Array(11).fill(null).map((_, index) => {
        return {
          id: String(index),
          imageUrl: "/temp-poster.png",
          name: "Название фильма " + index,
          genre: [genres[index % 5].toLowerCase(), genres[index % 5 + 5].toLowerCase()],
          country: "Страна",
          duration: { hours: 2, minutes: 15 },
          ageLimit: ageLimits[index % ageLimits.length],
          releaseDate: (index % 2 == 0) ? new Date("2026-05-12") : new Date("2027-05-05"),
          cinemas: [1, 2] //идентификаторы кинотеатров, в которых есть показы фильмов
        }
    });

const cinemasData: Array<CinemaData> = 
    [
      {
        id: 1,
        name: "Победа",
        city: "Новосибирск", 
        address: "ул. Ленина, 7"
      },
      {
        id: 2,
        name: "Синема Парк Аура",
        city: "Новосибирск",
        address: "ул. Военная, 5"
      },
      {
        id: 3,
        name: "Каро 10",
        city: "Новосибирск",
        address: "ул. Гоголя, 13"
      },
      {
        id: 4,
        name: "Мир",
        city: "Барнаул",
        address: "пл. Победы, 1"
      },
      {
        id: 5,
        name: "Киномир-Галактика",
        city: "Барнаул",
        address: "пр. Строителей, 117"
      }
    ];

export default function MovieFilteredCards() {

  const [movieCardsFilter, setMovieCardsFilter] = useState<MovieCardsFilterData>({
    activeButton: 'NOW_IN_CINEMAS',
    genres: [...genres, "all"], //all добавляется для корректного отображения опции "Выбрать все" в фильтре жанров
    cinemas: [...cinemasData.map((cinema) => cinema.id), 0] //TODO: сделать выбор всех кинотеатров по умолчанию
  });
  const [movies, setMovies] = useState([...moviesData].sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime()));

  function handleFilterChange(filter: MovieCardsFilterData) {
    
    //Если фильтр не поменялся, ничего не делаем
    if (movieCardsFilter === filter) {
      return;
    }

    //фильмы, которые необходимо отобразить
    let displayedMovies = [...moviesData].sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime());

    console.log("Исходный displayedMovies: ");
    console.log(displayedMovies);

    //Если поменялась активная кнопка, то фильтруем данные
    if (filter.activeButton === 'SOON') {
      displayedMovies = displayedMovies
                          .filter((movie) => movie.releaseDate.getTime() > Date.now());
    }

    console.log("Данные перед фильтрацией");
    console.log("displayedMovies: ");
    console.log(displayedMovies);
    
    //это магия, но она работает (фильтрация фильмов по жанрам)
    displayedMovies = displayedMovies
                          .filter((movie) => {
                            return movie.genre
                                          .map((item) => item.toLowerCase())
                                          .some((genre) => filter.genres
                                                                    .map((item) => item.toLowerCase())
                                                                    .includes(genre));
                          });

    //Фильтрация по кинотеатрам
    displayedMovies = 
      displayedMovies
          .filter((movie) => movie.cinemas
              .some((cinemaId) => filter.cinemas.includes(cinemaId)));

    console.log("displayedMovies после фильтрации: ");
    console.log(displayedMovies);

    setMovies(displayedMovies);
    setMovieCardsFilter(filter);
  }

  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box>
        <MovieCardsFilter filter={ movieCardsFilter } onFilterChange={ handleFilterChange } cinemas={ cinemasData } />
      </Box>
      <Box>
        <MovieCardsWrapper movies={ movies } />
      </Box>
    </Box>
  );
}