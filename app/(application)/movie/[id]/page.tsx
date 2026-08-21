import Box from "@mui/material/Box";
import CinemaInformation from "./components/CinemaInformation";
import CinemaNameFormats from "./components/CinemaNameFormats";
import MovieFormatsWrapper from "./components/MovieFormatsWrapper";
import SessionTimeWidget from "./components/SessionTimeWidget";
import HallSessions from "./components/HallSessions";
import HallSessionInformation from "./components/HallSessionInformation";
import CinemaSessions from "./components/CinemaSessions";
import CinemaSessionCard from "./components/CinemaSessionCard";
import CinemaSessionCardsWrapper from "./components/CinemaSessionCardsWrapper";
import CinemaSessionFilteredCards from "./components/CinemaSessionFilteredCards";

export default async function MovieSessionsPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {

  const { id } = await params;
  return (
    <CinemaSessionFilteredCards />
    
  );

}