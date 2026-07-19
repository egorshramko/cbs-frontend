'use client'

import { Box } from "@mui/material";
import MovieCardsFilter from "./MovieCardsFilter";
import MovieCardsWrapper from "./MovieCardsWrapper";
import MovieCardProps from "../lib/MovieCardProps";
import { useState } from "react";
import { MovieCardsFilterData } from "../lib/MovieCardsFilterData";
import { genres } from "../lib/genres";

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
          releaseDate: (index % 2 == 0) ? new Date("2026-05-12") : new Date("2027-05-05")
        }
    });

export default function MovieFilteredCards() {

  const [movieCardsFilter, setMovieCardsFilter] = useState<MovieCardsFilterData>({
    activeButton: 'NOW_IN_CINEMAS',
    genres: [...genres, "all"] //all добавляется для корректного отображения опции "Выбрать все" в фильтре жанров
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
        <MovieCardsFilter filter={ movieCardsFilter } onFilterChange={ handleFilterChange } />
      </Box>
      <Box>
        <MovieCardsWrapper movies={ movies } />
      </Box>
    </Box>
  );
}