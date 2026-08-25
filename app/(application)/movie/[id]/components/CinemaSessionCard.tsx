import Box from "@mui/material/Box";
import CinemaInformation from "./CinemaInformation";
import CinemaSessions from "./CinemaSessions";
import Button from "@mui/material/Button";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined"
import Cinema from "../lib/Cinema";

export default function CinemaSessionCard({
  cinema
} : {
  cinema: Cinema
}) {
  return (
    <Box sx={{
      display: "flex",
      border: "2px solid",
      width: "100%",
      borderRadius: "4px",
      borderColor: "#F7F8F9"
    }}>
      <CinemaInformation cinema={ cinema }/>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
      }}>
        <CinemaSessions hallSessions={ cinema.hallSessions } />
        <Button sx={{
          alignItems: "flex-start",
          maxWidth: "64px",
          "&:hover": {
            backgroundColor: "white"
          }
        }} variant="text">
          <Box sx={{
            display: "block"
          }}>
            <ExpandMoreOutlinedIcon sx={{
              fontSize: "32px"
            }} />
          </Box>
        </Button>
      </Box>
      
    </Box>
  );
}