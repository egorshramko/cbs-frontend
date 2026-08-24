import Box from "@mui/material/Box";
import SessionsMoviePoster from "./SessionsMoviePoster";
import MovieTextInformationCalendarHolder from "./MovieTextInformationCalendarHolder";

// верхняя часть страницы выбора сеанса
export default function MovieInformationCalendar() {
  return (
    <Box sx={{
      display: "flex",
      gap: "24px",
      paddingX: 0,
      paddingY: "10px",
      maxWidth: "1488px",
      marginX: "auto"
    }}>
      <SessionsMoviePoster />
      <MovieTextInformationCalendarHolder />
    </Box>
  );
}