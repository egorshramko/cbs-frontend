import Box from "@mui/material/Box";
import MovieFormat from "./MovieFormat";

export default function MovieFormatsWrapper({
  formats
} : {
  formats: Array<string>
}) {
  
  //const formats: Array<string> = ["2d", "3d", "imax"];
  
  if (formats.includes("imax")) {
    return (
      <Box sx={{
        display: "flex"
      }}>
        <MovieFormat format={ "imax" } />
      </Box>
    );
  }
  
  if (formats.includes("3d")) {
    return (
      <Box sx={{
        display: "flex"
      }}>
        <MovieFormat format={"3d"} />
      </Box>
    );
  }

  return (
    <Box sx={{
      display: "flex"
    }}>
      <MovieFormat format={"2d"} />
    </Box>
  );

}