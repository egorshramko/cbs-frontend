import { Box, Typography } from "@mui/material";
import AdditionalMovieInformationMarker from "./AdditionalMovieInformationMarker";
import Movie from "../lib/Movie";
import { genres } from "@/app/(application)/movies/lib/genres";

export default function MovieTextInformation({
  movie
} : {
  movie: Movie
}) {


  function getMovieGenres() {
    let genresString = movie.genre.join(", ");
    while (genresString.length >= 20) {
      genresString = genresString.substring(0, genresString.lastIndexOf(","));
    }
    return genresString;
  }

  return (
    <Box>
      <Typography sx={{
        fontWeight: 600,
        fontSize: "22px",
        paddingY: "5px"
      }} variant="h5">
        { movie.name }
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          paddingY: "2px",
          opacity: "70%"
        }}
      >
        { getMovieGenres() } &bull; { movie.duration?.hours + " ч " + movie.duration?.minutes + " мин" }
      </Typography>
      <Typography sx={{
        fontWeight: 400, 
        fontSize: "14px",
        paddingY: "2px",
        opacity: "70%"
      }}>
        {movie.country} &bull; { movie.releaseDate.getFullYear() }
      </Typography>
      <Box sx={{
        display: "flex",
        gap: "10px"
      }}>

        <AdditionalMovieInformationMarker text={ movie.ageLimit + "+" } />

      </Box>
    </Box>
  );
}