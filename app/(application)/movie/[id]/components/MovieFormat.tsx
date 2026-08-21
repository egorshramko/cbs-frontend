import { Box, Typography } from "@mui/material";

export default function MovieFormat({ 
  format, variant
} : {
  format: string,
  variant?: "contained" | "outlined"
}) {

  let movieFormatBackgroundColor = "#969AA5";
  switch (format) {
    case "imax":
      movieFormatBackgroundColor = "#5A1FF0";
      break;
    case "3d":
      movieFormatBackgroundColor = "#0BA6FE";
      break;
  }

  if (!variant || variant === "contained") {
    return (
      <Box sx={{
        width: "max-content",
        height: "max-content",
        backgroundColor: movieFormatBackgroundColor,
        borderRadius: "3px",
        margin: "5px",
        paddingX: "8px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
      }}>
        <Typography
          sx={{
            fontSize: 12,
            color: "white"
          }} variant="body2">
          {format.toUpperCase()}
        </Typography>
      </Box>
    );
  }
  else {
    return (
      // <Box sx={{
      //   width: "max-content",
      //   height: "max-content",
      //   borderRadius: "3px",
      //   margin: "5px",
      //   paddingX: "8px",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignContent: "center"
      // }}>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: movieFormatBackgroundColor,
          }} variant="body2">
          {format.toUpperCase()}
        </Typography>
      //</Box>
    );
  } 
  
}