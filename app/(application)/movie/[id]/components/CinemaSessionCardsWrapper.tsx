import { Box } from "@mui/material";
import CinemaSessionCard from "./CinemaSessionCard";
import Cinema from "../lib/Cinema";

const cinemas: Cinema[] = [
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
  },
  {
    id: 2,
    name: "Синема Парк Аура",
    imageUrl: "/temp-poster.png",
    city: "Новосибирск",
    address: "ул. Военная, 5",
    features: {
      hallsCount: 2,
      imaxAvailable: true,
      parkingAvailable: true
    },
    hallSessions: [
      {
        hallName: "Зал 1",
        hallMovieFormats: new Set(["2d", "3d", "imax"]),
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
            sessionDatetime: new Date("2026-08-26T13:00:00.000"),
            isSelected: false
          }
        ]
      },
      {
        hallName: "Зал 2",
        hallMovieFormats: new Set(["2d", "3d"]),
        sessions: [
          {
            sessionDatetime: new Date("2026-08-25T17:00:00.000"),
            isSelected: false
          },
          {
            sessionDatetime: new Date("2026-08-25T22:30:00.000"),
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

export default function CinemaSessionCardsWrapper() {
  return (
    <Box sx={{
      paddingY: "10px",
      paddingX: 0,
      display: "flex",
      flexDirection: "column",
      gap: "5px"
    }}>
      {
        cinemas.map((cinema) => {
          return (
            <CinemaSessionCard key={ cinema.id } cinema={ cinema } />
          );
        })
      }
    </Box>
  );
}