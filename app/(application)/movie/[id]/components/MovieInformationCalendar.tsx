import Box from "@mui/material/Box";
import SessionsMoviePoster from "./SessionsMoviePoster";
import MovieTextInformationCalendarHolder from "./MovieTextInformationCalendarHolder";
import Movie from "../lib/Movie";

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

// верхняя часть страницы выбора сеанса
export default function MovieInformationCalendar({
  movieInformation
} : {
  movieInformation: Movie
}) {
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
      <MovieTextInformationCalendarHolder movie={ movieInformation } selectedDate={ new Date("2026-08-26") } />
    </Box>
  );
}