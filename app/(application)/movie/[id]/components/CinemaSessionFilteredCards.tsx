import { Box } from "@mui/material";
import CinemaSessionFilter from "./CinemaSessionFilter";
import CinemaSessionCardsWrapper from "./CinemaSessionCardsWrapper";
import Cinema from "../lib/Cinema";
import { CinemaDataAdapter } from "../lib/CinemaDataAdapter";
import { useState } from "react";
import { MovieFormatInfo } from "../lib/MovieFormatInfo";
import { CinemaData } from "@/app/(application)/movies/lib/CinemaData";

export default function CinemaSessionFilteredCards({
  cinemas, allCinemas
} : {
  cinemas: Cinema[],
  allCinemas: CinemaData[]
}) {

  const [cinemasFilter, setCinemasFilter] = useState([...allCinemas.map(cinema => cinema.id), 0]);
  const [formatsFilter, setFormatsFilter] = useState(["2D", "3D", "IMAX", "all"]);

  function handleCinemasFilterChange(newCinemasFilter: number[]) {
    setCinemasFilter(newCinemasFilter);
  }

  function handleFormatsFilterChange(newFormatsFilter: string[]) {
    console.log("formats filter changes");
    setFormatsFilter(newFormatsFilter);
  }

  function getFilteredCinemas(): Cinema[] {

    //Применение фильтра по кинотеатрам
    const filteredCinemas = cinemas.filter(cinema => cinemasFilter.includes(cinema.id))
        .reduce((cinemasFilteredByFormat, cinema) => {
          
          const cinemaWithFilteredHalls = cinema.hallSessions
            .filter(hallSession => formatsFilter
                                    .some(format => [...hallSession.hallMovieFormats].includes(format.toLowerCase() as MovieFormatInfo)));
          
          //Копирование кинотеатра для того, чтобы фильтрация залов не применялась к элементам исходного массива кинотеатров
          const cinemaCopy = structuredClone(cinema);
          cinemaCopy.hallSessions = cinemaWithFilteredHalls;
          
          //Если в кинотеатре есть залы, удовлетворяющие критериям фильтрации, то отображаем кинотеатр
          if (cinemaCopy.hallSessions.length > 0) {
            cinemasFilteredByFormat.push(cinemaCopy);
          }
          
          return cinemasFilteredByFormat;
        }, [] as Cinema[]);

    return filteredCinemas;
  }

  return (
    <Box sx={{
      maxWidth: "1590px",
      marginX: "auto"
    }}>
      <CinemaSessionFilter 
        cinemasFilter = { cinemasFilter }
        allCinemas = { allCinemas }
        onCinemasFilterChange = { handleCinemasFilterChange }
        formatsFilter = { formatsFilter }
        allFormats = { ["2D", "3D", "IMAX"] }
        onFormatsFilterChange = { handleFormatsFilterChange }
      />
      <CinemaSessionCardsWrapper cinemas={ getFilteredCinemas() } />
    </Box>
  );
}