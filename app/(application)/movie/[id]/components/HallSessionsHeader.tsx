import { Box, Typography } from "@mui/material";
import HallSessionMovieFormats from "./HallSessionMovieFormats";
import HallSessionsInfo from "../lib/HallSessionsInfo";

export default function HallSessionsHeader({
  hallSession
} : {
  hallSession: HallSessionsInfo
}) {

  const sortedHallFormats = 
    [...hallSession.hallMovieFormats].sort((a, b) => {
      const formatsPriority = [
        {
          format: "2d",
          priority: 0
        },
        {
          format: "3d",
          priority: 1
        },
        {
          format: "imax",
          priority: 2
        }
      ];

      const aPriority = formatsPriority.filter((value) => value.format == a)[0].priority;
      const bPriority = formatsPriority.filter((value) => value.format == b)[0].priority;

      return aPriority - bPriority;
    })

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
      <HallSessionMovieFormats formats={ sortedHallFormats } />
    </Box>
  );
}