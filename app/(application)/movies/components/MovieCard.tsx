import { Badge, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function MovieCard() {
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
            image="/temp-poster.png"
            title="poster"  
          >
            <Badge 
              sx={{
                opacity: "50%",
                margin: "16px 22px",
              }}
              badgeContent={ "16+" }
              color="secondary"
            />
          </CardMedia>
          <CardContent>
            <Typography sx={{
              fontWeight: 600,
              fontSize: "22px",
              paddingY: "5px"
            }} variant="h5">
                Название фильма
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                paddingY: "5px"
              }}
            >
              комедия, боевик &bull; 1 ч 30 мин <br />
              Россия &bull; 2001
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