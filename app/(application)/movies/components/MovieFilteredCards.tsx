'use client'

import { Box } from "@mui/material";
import MovieCardsFilter from "./MovieCardsFilter";
import MovieCardsWrapper from "./MovieCardsWrapper";
import MovieCardProps from "../lib/MovieCardProps";
import { useState } from "react";
import { MovieCardsFilterData } from "../lib/MovieCardsFilterData";

const ageLimits: Array<number> = [0, 6, 12, 16, 18];

const moviesData: Array<MovieCardProps> = 
    Array(11).fill(null).map((_, index) => {
        return {
          id: String(index),
          imageUrl: "/temp-poster.png",
          name: "Название фильма " + index,
          genre: "Жанр",
          country: "Страна",
          duration: { hours: 2, minutes: 15 },
          ageLimit: ageLimits[index % ageLimits.length],
          releaseDate: (index % 2 == 0) ? new Date("2026-05-12") : new Date("2027-05-05")
        }
    });

export default function MovieFilteredCards() {

  const [movieCardsFilter, setMovieCardsFilter] = useState<MovieCardsFilterData>({
    activeButton: 'NOW_IN_CINEMAS'
  });
  const [movies, setMovies] = useState([...moviesData].sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime()));

  function handleFilterChange(filter: MovieCardsFilterData) {
    
    //Если фильтр не поменялся, ничего не делаем
    if (movieCardsFilter === filter) {
      return;
    }

    //Если поменялась активная кнопка, то фильтруем данные
    if (filter.activeButton === 'NOW_IN_CINEMAS') {
      setMovies([...moviesData].sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime()));
    }
    else if (filter.activeButton === 'SOON') {
      setMovies([...moviesData].filter((movie) => movie.releaseDate.getTime() > Date.now()).sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime()));
    }

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