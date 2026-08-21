import { Box, Typography } from "@mui/material";
import MovieFormat from "./MovieFormat";
import HallSessionMovieFormats from "./HallSessionMovieFormats";

export default function HallSessionsHeader() {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center", 
      gap: "20px"
    }}>
      <Typography sx={{
        fontSize: "12px",
        
      }}>
        Зал 1
      </Typography>
      <HallSessionMovieFormats />
    </Box>
  );
}