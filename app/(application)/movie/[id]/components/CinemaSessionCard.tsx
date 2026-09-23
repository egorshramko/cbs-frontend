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
  cinema, selectedSession, onSessionChanges
} : {
  cinema: Cinema,
  selectedSession: number,
  onSessionChanges: (sessionId: number) => void
}) {

  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpandClick() {
    setIsExpanded(!isExpanded);
  } 

  function handleSessionChange(sessionId: number) {
    onSessionChanges(sessionId);
  }

  //сортировка залов по названию (залы с номером сортируются по номеру)
  const cinemaHallSessions = cinema.hallSessions.sort((a, b) => {

    //Сортировка пронумерованных залов по номеру
    const lowerCaseAHallName = a.hallName.toLowerCase();
    const lowerCaseBHallName = b.hallName.toLowerCase();
    if (lowerCaseAHallName.includes("зал ") &&
      lowerCaseBHallName.includes("зал ")) {

      const aHallNumber = Number(lowerCaseAHallName.split("зал ")[1]);
      const bHallNumber = Number(lowerCaseBHallName.split("зал ")[1]);
      if (!isNaN(aHallNumber) && !isNaN(bHallNumber)) {
        return aHallNumber - bHallNumber;
      }

    }

    //Остальные залы сортируются по алфавиту
    return a.hallName.localeCompare(b.hallName)
  });

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
        <CinemaSessions 
          hallSessions={ cinemaHallSessions } 
          isExpanded={ isExpanded } 
          selectedSession={ selectedSession } 
          onSessionChange={ handleSessionChange } />
        <Button sx={{
          alignItems: "flex-start",
          maxWidth: "64px",
          "&:hover": {
            backgroundColor: "white"
          }
        }} variant="text"
          disabled={ cinemaHallSessions.length <= 2 || 
            (cinemaHallSessions.slice(2)
                .flatMap(hallSession => hallSession.sessions)
                .some(session => session.id === selectedSession))} //Условие для того, чтобы нельзя было свернуть, если выбранный сеанс виден только в раскрытом виде
          onClick={ handleExpandClick }>
          <Box sx={{
            display: "block"
          }}>
            <ExpandButtonIcon 
              hallSessionsSize={ cinemaHallSessions.length }
              isExpanded={ isExpanded } />
          </Box>
        </Button>
      </Box>
      
    </Box>
  );
}