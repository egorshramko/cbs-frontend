import { Box } from "@mui/material";
import CinemaSessionCard from "./CinemaSessionCard";

export default function CinemaSessionCardsWrapper() {
  return (
    <Box sx={{
      paddingY: "10px",
      paddingX: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "5px"
    }}>
      <CinemaSessionCard />
      <CinemaSessionCard />
      <CinemaSessionCard />
      <CinemaSessionCard />
      <CinemaSessionCard />
    </Box>
  );
}