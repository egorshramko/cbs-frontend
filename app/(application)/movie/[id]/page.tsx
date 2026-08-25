import Box from "@mui/material/Box";
import CinemaSessionFilteredCards from "./components/CinemaSessionFilteredCards";
import MovieInformationCalendar from "./components/MovieInformationCalendar";
import { Button, Container, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default async function MovieSessionsPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {

  const { id } = await params;
  return (
    <Container sx={{
      marginTop: "24px"
    }} maxWidth="xl">
      <Button sx={{
        paddingLeft: 0
      }} variant="text">
        <Box sx={{
          display: "flex",
          gap: "10px"
        }}>
          <ArrowBackOutlinedIcon />
          <Typography sx={{
            fontWeight: 400,
            fontSize: "14px"
          }}>
            Назад к афише
          </Typography>
        </Box>
      </Button>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          my: "12px"
        }}
        variant="h1"
      >
        Выберите сеанс
      </Typography>
      <MovieInformationCalendar />
      <CinemaSessionFilteredCards />
    </Container>
  );

}