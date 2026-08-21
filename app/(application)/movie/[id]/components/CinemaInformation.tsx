import { Box } from "@mui/material";
import CinemaNameFormats from "./CinemaNameFormats";
import CinemaAddress from "./CinemaAddress";
import CinemaFeatures from "./CinemaFeatures";
import Image from "next/image";

export default function CinemaInformation() {
  return (
    <Box sx={{ //TODO: перетащить эти настройки на уровень выше
      display: "flex",
      alignItems: "center",
      padding: "6px",
      borderRight: "2px solid",
      borderRadius: "4px 0 0 4px",
      maxWidth: "640px",
      borderColor: "#F7F8F9"
    }}>
      <Image 
        style={{
          borderRadius: "4px"
        }}
        src="/temp-poster.png" 
        alt="Кинотеатр" 
        width={210} height={136} />
      <Box sx={{
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px"
      }}>
        <CinemaNameFormats />
        <CinemaAddress />
        <CinemaFeatures />
      </Box>
    </Box>
    
  );
}