import { Box, Button } from "@mui/material";
import MovieCardsFilterButtons from "./MovieCardsFilterButtons";
import MovieCardsFilterSelects from "./MovieCardsFilterSelects";

export default function MovieCardsFilter() {
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingY: "20px",
        maxWidth: "1590px",
        width: "100%",
        marginX: "auto"
      }}
    >
      <MovieCardsFilterButtons />
      <MovieCardsFilterSelects />
    </Box>
    
  );
}