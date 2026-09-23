import { Box } from "@mui/material";
import CinemaName from "./CinemaName";
import MovieFormatsWrapper from "./MovieFormatsWrapper";

export default function CinemaNameFormats({
  name, formats
} : {
  name: string, formats: string[]
}) {
  return (
    <Box sx={{
      display: "flex",
      gap: "16px"
    }}>
      <CinemaName name={ name } />
      <MovieFormatsWrapper formats={ formats } />
    </Box>
  );
}