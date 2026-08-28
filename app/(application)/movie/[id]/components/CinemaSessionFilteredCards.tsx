import { Box } from "@mui/material";
import CinemaSessionFilter from "./CinemaSessionFilter";
import CinemaSessionCardsWrapper from "./CinemaSessionCardsWrapper";
import Cinema from "../lib/Cinema";

export default function CinemaSessionFilteredCards({
  cinemas
} : {
  cinemas: Cinema[]
}) {
  return (
    <Box sx={{
      maxWidth: "1590px",
      marginX: "auto"
    }}>
      <CinemaSessionFilter />
      <CinemaSessionCardsWrapper />
    </Box>
  );
}