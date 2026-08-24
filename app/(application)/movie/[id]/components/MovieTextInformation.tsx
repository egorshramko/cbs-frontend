import { Box, Typography } from "@mui/material";

export default function MovieTextInformation() {
  return (
    <Box>
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
        { "жанр1, жанр2" } &bull; { "2 ч 10 мин" }
      </Typography>
      <Typography sx={{
        fontWeight: 400, 
        paddingY: "5px"
      }}>
        { "Страна" } &bull; { "2026" }
      </Typography>
    </Box>
  );
}