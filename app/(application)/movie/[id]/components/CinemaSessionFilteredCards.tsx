import { Box } from "@mui/material";
import CinemaSessionFilter from "./CinemaSessionFilter";
import CinemaSessionCardsWrapper from "./CinemaSessionCardsWrapper";

export default function CinemaSessionFilteredCards() {
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