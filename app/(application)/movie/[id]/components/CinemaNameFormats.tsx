import { Box } from "@mui/material";
import CinemaName from "./CinemaName";
import MovieFormatsWrapper from "./MovieFormatsWrapper";

export default function CinemaNameFormats() {
  return (
    <Box sx={{
      display: "flex",
      gap: "16px"
    }}>
      <CinemaName />
      <MovieFormatsWrapper />
    </Box>
  );
}