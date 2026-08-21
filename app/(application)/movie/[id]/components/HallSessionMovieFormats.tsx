import { Box } from "@mui/material";
import MovieFormat from "./MovieFormat";

export default function HallSessionMovieFormats() {
  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <MovieFormat format="2d" variant="outlined" />
      <MovieFormat format="3d" variant="outlined" />
      <MovieFormat format="imax" variant="outlined" />
    </Box>
  );
}