import Box from "@mui/material/Box";
import CinemaSessionFilteredCards from "./components/CinemaSessionFilteredCards";
import MovieInformationCalendar from "./components/MovieInformationCalendar";

export default async function MovieSessionsPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {

  const { id } = await params;
  return (
    <Box>
      <MovieInformationCalendar />
      <CinemaSessionFilteredCards />
    </Box>
    
    
  );

}