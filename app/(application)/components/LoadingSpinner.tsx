import { Box, CircularProgress, Container } from "@mui/material";

export default function LoadingSpinner() {
  return (
    <Container sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    }} maxWidth="xl">
      <Box>
        <CircularProgress color="primary" aria-label="Loading..." />
      </Box>
    </Container>
  );
}