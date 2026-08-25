import { Box } from "@mui/material";
import CinemaNameFormats from "./CinemaNameFormats";
import CinemaAddress from "./CinemaAddress";
import CinemaFeatures from "./CinemaFeaturesWrapper";
import Image from "next/image";
import Cinema from "../lib/Cinema";

export default function CinemaInformation({
  cinema
} : {
  cinema: Cinema
}) {

  // вычисление форматов кино в кинотеатре
  const cinemaFormats = [...new Set(cinema.hallSessions
    .flatMap((hallSession) => hallSession.hallMovieFormats)
    .flatMap((formatsSet) => [...formatsSet]))];

  const cinemaAddress = "г. " + cinema.city + ", " + cinema.address;

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      padding: "6px",
      borderRight: "2px solid",
      borderRadius: "4px 0 0 4px",
      width: "100%",
      maxWidth: "640px",
      borderColor: "#F7F8F9"
    }}>
      <Image 
        style={{
          borderRadius: "4px"
        }}
        src={ cinema.imageUrl } 
        alt={ cinema.name } 
        width={210} height={136} />
      <Box sx={{
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px"
      }}>
        <CinemaNameFormats 
          name={ cinema.name } formats={ cinemaFormats } />
        <CinemaAddress address={ cinemaAddress } />
        <CinemaFeatures features={ cinema.features } />
      </Box>
    </Box>
    
  );
}