import { Badge, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Duration from "../lib/Duration";
import MovieCardProps from "../lib/MovieCardProps";



export default function MovieCard({ props } : { props: MovieCardProps }) {

  function getDurationString() {
    if (props.duration !== undefined && props.duration !== null) {
      return props.duration.hours + " ч "+ props.duration.minutes + " мин";  
    }
    return null;
  }

  const durationString = getDurationString();

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
            <Badge 
              sx={{
                opacity: "50%",
                margin: "16px 22px",
              }}
              badgeContent={ props.ageLimit + "+" }
              color="secondary"
            />
          </CardMedia>
          <CardContent>
            <Typography sx={{
              fontWeight: 600,
              fontSize: "22px",
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
              { props.genre } &bull; { durationString } <br />
              { props.country } &bull; { props.year }
            </Typography>
          </CardContent>
          <CardActions>
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
          </CardActions>
      </Card>
  );
}