import { Box } from "@mui/material";
import MovieTextInformation from "./MovieTextInformation";

// Окно выбора сеанса. Контейнер, содержащий информацию о фильме 
// и календарь для выбора даты сеанса
export default function MovieTextInformationCalendarHolder() {
  return (
    <Box>
      <MovieTextInformation />
    </Box>
  )
}