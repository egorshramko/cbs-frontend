import { Box, Button } from "@mui/material";

export default function MovieCardsFilterButtons() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px"
      }}
    >
      <Button
        sx={{
          minWidth: 120,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: "primary.main",
            boxShadow: 'none'
          }
        }}
        variant="contained">Сейчас в кино</Button>
      <Button
        sx={{
          minWidth: 100,
          boxShadow: 'none'
        }}
        variant="text">Скоро</Button>
    </Box>
  );
}