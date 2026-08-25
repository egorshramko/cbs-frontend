import { Box, Typography } from "@mui/material";
import HallSessionMovieFormats from "./HallSessionMovieFormats";
import HallSessionsInfo from "../lib/HallSessionsInfo";

export default function HallSessionsHeader({
  hallSession
} : {
  hallSession: HallSessionsInfo
}) {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center", 
      gap: "20px"
    }}>
      <Typography sx={{
        fontSize: "12px",
        
      }}>
        { hallSession.hallName }
      </Typography>
      <HallSessionMovieFormats formats={ [...hallSession.hallMovieFormats] } />
    </Box>
  );
}