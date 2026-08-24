import { Box, Typography } from "@mui/material";
import AdditionalMovieInformationMarker from "./AdditionalMovieInformationMarker";

export default function MovieTextInformation() {
  return (
    <Box>
      <Typography sx={{
        fontWeight: 600,
        fontSize: "22px",
        paddingY: "5px"
      }} variant="h5">
        Название фильма
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          paddingY: "2px",
          opacity: "70%"
        }}
      >
        { "жанр1, жанр2" } &bull; { "2 ч 10 мин" }
      </Typography>
      <Typography sx={{
        fontWeight: 400, 
        fontSize: "14px",
        paddingY: "2px",
        opacity: "70%"
      }}>
        { "Страна" } &bull; { "2026" }
      </Typography>
      <Box sx={{
        display: "flex",
        gap: "10px"
      }}>

        <AdditionalMovieInformationMarker text={"12+"} />
        <AdditionalMovieInformationMarker text={ "IMAX" } />
        <AdditionalMovieInformationMarker text={ "3D" } />

      </Box>
    </Box>
  );
}