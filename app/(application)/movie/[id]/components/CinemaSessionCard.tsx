import Box from "@mui/material/Box";
import CinemaInformation from "./CinemaInformation";
import CinemaSessions from "./CinemaSessions";
import Button from "@mui/material/Button";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined"
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined"
import Cinema from "../lib/Cinema";
import { useState } from "react";

function ExpandButtonIcon({
  hallSessionsSize,
  isExpanded
} : {
  hallSessionsSize: number,
  isExpanded: boolean
}) {

  if (hallSessionsSize <= 2) {
    return;
  }

  if (isExpanded) {
    return (
      <ExpandLessOutlinedIcon sx={{
        fontSize: "32px"
      }} />
    )
  }
  else {
    return (
      <ExpandMoreOutlinedIcon sx={{
        fontSize: "32px"
      }} />
    )
  }

}

export default function CinemaSessionCard({
  cinema
} : {
  cinema: Cinema
}) {

  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpandClick() {
    setIsExpanded(!isExpanded);
  } 

  return (
    <Box sx={{
      display: "flex",
      border: "2px solid",
      width: "100%",
      borderRadius: "4px",
      borderColor: "#F7F8F9"
    }}>
      <CinemaInformation cinema={ cinema } isCardExpanded={ isExpanded } />
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
      }}>
        <CinemaSessions hallSessions={ cinema.hallSessions } isExpanded={ isExpanded } />
        <Button sx={{
          alignItems: "flex-start",
          maxWidth: "64px",
          "&:hover": {
            backgroundColor: "white"
          }
        }} variant="text"
          disabled={ cinema.hallSessions.length <= 2 }
          onClick={ handleExpandClick }>
          <Box sx={{
            display: "block"
          }}>
            <ExpandButtonIcon 
              hallSessionsSize={ cinema.hallSessions.length }
              isExpanded={ isExpanded } />
          </Box>
        </Button>
      </Box>
      
    </Box>
  );
}