import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import MovieCardProps from "../lib/MovieCardProps";
import AgeLimitMarker from "./AgeLimitMarker";

function MovieCardActionButton({ released }: { released: boolean }) {
  if (released) {
    return (
      <Button
        sx={{
          width: "100%",
          marginX: "5px"
        }}
        variant="contained"
        color="primary"
      >
        Выбрать сеанс
      </Button>
    );
  }
  else {
    return (
      <Button 
        sx={{
          width: "100%",
          marginX: "5px",
          '&.Mui-disabled': {
            color: "#000000",
          }
        }}
        variant="contained"
        disabled
      >
        Скоро
      </Button>
    );
  }
}

export default function MovieCard({ props } : { props: MovieCardProps }) {

  function getDurationString() {
    if (props.duration !== undefined && props.duration !== null) {
      return props.duration.hours + " ч "+ props.duration.minutes + " мин";  
    }
    return null;
  }

  function getMovieGenres() {
    let genresString = props.genre.join(", ");
    while (genresString.length >= 20) {
      genresString = genresString.substring(0, genresString.lastIndexOf(","));
    }
    return genresString;
  }

  const durationString = getDurationString();

  const movieNameLength = props.name.length;
  console.log("Длина текста: ");
  console.log(movieNameLength);

  // Адаптация шрифта карточки. Костыль, но мне лень думать, как сделать нормально
  let movieNameFontSize;
  if (movieNameLength <= 19) {
    movieNameFontSize = "22px";
  }
  else if (movieNameLength <= 27) {
    movieNameFontSize = "16px";
  }
  else {
    movieNameFontSize = "13px";
  }

  return (
      <Card 
        sx={{
          width: 278,
          height: 400
        }}
        variant="outlined"
      >
          <CardMedia 
            sx={{
              height: "55%",
              display: "flex",
              flexDirection: "row-reverse"
            }}
            image={ props.imageUrl }
            title="poster"  
          >
            <AgeLimitMarker ageLimit={ props.ageLimit + "+" } />
          </CardMedia>
          <CardContent>
            <Typography sx={{
              fontWeight: 600,
              fontSize: movieNameFontSize,
              paddingY: "5px"
            }} variant="h5">
                { props.name }
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                paddingY: "5px"
              }}
            >
              { getMovieGenres() } &bull; { durationString } <br />
              { props.country } &bull; { props.releaseDate.getFullYear() }
            </Typography>
          </CardContent>
          <CardActions>
            <MovieCardActionButton released={ props.releaseDate < new Date() } />
          </CardActions>
      </Card>
  );
}