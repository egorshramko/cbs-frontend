import { Badge, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Duration from "../lib/Duration";

interface MovieCardProps {
  imageUrl: string;
  name: string;
  genre: string;
  duration?: Duration;
  country: string;
  year: number;
  ageLimit: number;
}

export default function MovieCard(props: MovieCardProps) {

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
          maxWidth: 300,
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