import Box from "@mui/material/Box";
import CinemaInformation from "./CinemaInformation";
import CinemaSessions from "./CinemaSessions";
import Button from "@mui/material/Button";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined"

export default function CinemaSessionCard() {
  return (
    <Box sx={{
      display: "flex",
      border: "2px solid",
      borderRadius: "4px",
      borderColor: "#F7F8F9"
    }}>
      <CinemaInformation />
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
      }}>
        <CinemaSessions />
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