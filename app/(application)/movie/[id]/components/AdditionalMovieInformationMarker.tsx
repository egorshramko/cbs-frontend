import { Box, Typography } from "@mui/material"

export default function AdditionalMovieInformationMarker({
  text
} : {
  text: string
}) {

  return (
    <Box sx={{
      maxHeight: "20px",
      backgroundColor: "#e7e7eb",
      borderRadius: "3px",
      marginY: "5px",
      paddingX: "5px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "14px",
          color: "black"
        }} variant="body2">
        { text }
      </Typography>
    </Box>
  );

}