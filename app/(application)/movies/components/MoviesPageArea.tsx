'use client'

import { Container, Typography } from "@mui/material";
import MovieFilteredCards from "./MovieFilteredCards";
import { useEffect, useState } from "react";
import MovieCardProps from "../lib/MovieCardProps";
import ReceivedMovieJson from "../lib/ReceivedMovieJson";
import { genres } from "../lib/genres";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function MoviesPageArea() {

  const [moviesData, setMoviesData] = useState<MovieCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  //Выгрузка афиши из бэка
  useEffect(() => {
    console.log("NEXT_PUBLIC_API_URL");
    console.log(process.env.NEXT_PUBLIC_API_URL);
    fetch (process.env.NEXT_PUBLIC_API_URL + '/api/v1/movies')
      .then((result) => result.json())
      .then((receivedMovies) => {
        const renderingMovies: Array<MovieCardProps> = receivedMovies.map((movie: ReceivedMovieJson) => {
          return {
            id: movie.id,
            imageUrl: movie.imageUrl,
            name: movie.name,
            genre: genres
              .filter((genre) => movie.genre.includes(genre.code))
              .map((genre) => genre.name.toLowerCase()),
            country: movie.country,
            duration: movie.duration,
            ageLimit: movie.ageLimit,
            releaseDate: new Date(movie.releaseDate)
          }
        });
        setMoviesData(renderingMovies);
        setLoading(false);
      });
    }, []);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

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
      <MovieFilteredCards moviesData={ moviesData } />
    </Container>

  );
}