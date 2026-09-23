'use client'

import CinemasFilterSelect from "@/app/(application)/components/CinemasFilterSelect";
import { Box } from "@mui/material";
import { CinemaData } from "@/app/(application)/movies/lib/CinemaData";
import MovieFormatsFilterSelect from "./MovieFormatsFilterSelect";

// const cinemasData: Array<CinemaData> = 
//     [
//       {
//         id: 1,
//         name: "Победа",
//         city: "Новосибирск", 
//         address: "ул. Ленина, 7"
//       },
//       {
//         id: 2,
//         name: "Синема Парк Аура",
//         city: "Новосибирск",
//         address: "ул. Военная, 5"
//       },
//       {
//         id: 3,
//         name: "Каро 10",
//         city: "Новосибирск",
//         address: "ул. Гоголя, 13"
//       },
//       {
//         id: 4,
//         name: "Мир",
//         city: "Барнаул",
//         address: "пл. Победы, 1"
//       },
//       {
//         id: 5,
//         name: "Киномир-Галактика",
//         city: "Барнаул",
//         address: "пр. Строителей, 117"
//       }
//     ];

export default function CinemaSessionFilter({
  cinemasFilter,
  allCinemas,
  onCinemasFilterChange,
  formatsFilter,
  allFormats,
  onFormatsFilterChange
} : {
  cinemasFilter: number[],
  allCinemas: CinemaData[],
  onCinemasFilterChange: (newCinemasFilter: number[]) => void,
  formatsFilter: string[],
  allFormats: string[],
  onFormatsFilterChange: (newFormatsFilter: string[]) => void
}) {

  //[...cinemasData.map((cinema) => cinema.id), 0]

  function handleCinemasFilterChange(newCinemasFilter: number[]) {
    onCinemasFilterChange(newCinemasFilter);
  }

  function handleMovieFormatsFilterChange(formats: string[]) {
    onFormatsFilterChange(formats);
  }


  console.log("cinemas filter before render CinemaSessionFilter:");
  console.log(cinemasFilter);

  return (
    <Box sx={{
      display: "flex",
      gap: "14px",
      paddingY: "8px",
      paddingX: 0
    }}>
      <CinemasFilterSelect 
        selectedCinemas={ cinemasFilter } 
        allCinemas={ allCinemas } 
        onChange={ handleCinemasFilterChange } />
      <MovieFormatsFilterSelect 
        selectedFormats={ formatsFilter } 
        formats={ allFormats } 
        onChange={ handleMovieFormatsFilterChange } />
        
    </Box>
  );
}