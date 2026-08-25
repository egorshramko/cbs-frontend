import { Box } from "@mui/material";
import MovieFormat from "./MovieFormat";
import { MovieFormatInfo } from "../lib/MovieFormatInfo";

export default function HallSessionMovieFormats({
  formats
} : {
  formats: Array<MovieFormatInfo>
}) {
  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      {
        formats.map((format) => {
          return (
            <MovieFormat key={ format } format={ format } variant="outlined" />
          )
        })
      }
    </Box>
  );
}