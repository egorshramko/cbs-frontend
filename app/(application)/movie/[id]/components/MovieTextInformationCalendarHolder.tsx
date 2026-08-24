import { Box } from "@mui/material";
import MovieTextInformation from "./MovieTextInformation";
import Calendar from "@/app/(application)/components/Calendar";

// Окно выбора сеанса. Контейнер, содержащий информацию о фильме 
// и календарь для выбора даты сеанса
export default function MovieTextInformationCalendarHolder() {
  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingBottom: "3px"
    }}>
      <MovieTextInformation />
      <Calendar />
    </Box>
  )
}