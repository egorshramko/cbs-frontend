import { Box, Typography } from "@mui/material";

export default function AgeLimitMarker({ ageLimit }: {ageLimit: string}) {
  return (
    <Box sx={{
      maxHeight: "20px",
      backgroundColor: "gray",
      opacity: "40%",
      borderRadius: "3px",
      margin: "5px",
      paddingX: "5px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    }}>
      <Typography 
        sx={{
          fontSize: 13,
          color: "white"
        }} variant="body2">
        { ageLimit }
      </Typography>
    </Box>
  );
}