import Box from "@mui/material/Box";
import MovieFormat from "./MovieFormat";

export default function MovieFormatsWrapper() {
  
  const formats: Array<string> = ["2d", "3d", "imax"];
  
  return (
    <Box sx={{
      display: "flex"
    }}>
      {
        formats.map((format) => {
          return <MovieFormat key={ format } format={ format } />;
        })
      }
    </Box>
  );
}