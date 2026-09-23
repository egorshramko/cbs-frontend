import Box from "@mui/material/Box";
import SessionTimeWidget from "./SessionTimeWidget";
import { Button } from "@mui/material";
import HallSession from "../lib/HallSession";

function ChooseSessionButton({
  href,
  sessionSelected
} : {
  href: string,
  sessionSelected: boolean
}) {

  if (sessionSelected) {
    return (
      <Button sx={{
        color: "primary.main",
        maxHeight: "30px",
        marginX: "auto"
      }}
        variant="outlined" color="primary"
        href={ href }>
        Выбрать сеанс
      </Button>
    );
  }

  return;

}

export default function HallSessions({
  sessions,
  selectedSession,
  onSessionChange
} : {
  sessions: Array<HallSession>,
  selectedSession: number,
  onSessionChange: (sessionId: number) => void
}) {

  function handleSessionTimeClick(sessionId: number) {
    onSessionChange(sessionId);
  }

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between"
    }}>
      <Box sx={{
        display: "flex",
        gap: "20px"
      }}>

        {
          sessions.sort((a, b) => {
            const aDatetime = Date.parse(a.datetime);
            const bDatetime = Date.parse(b.datetime);
            return aDatetime - bDatetime;
          }).map((session) => {
            const sessionDateTime = new Date(session.datetime);
            return (
              <SessionTimeWidget 
                key={ session.id }
                value={ 
                  sessionDateTime.toLocaleTimeString("ru-RU", {
                    hour: '2-digit',
                    minute: '2-digit'
                  }) 
                }
                isSelected={ selectedSession === session.id } 
                sessionId={ session.id }
                onClick={ handleSessionTimeClick } />

            );
          })
        }
      </Box>
      <Box>
        <ChooseSessionButton 
          href={ "/session/" + selectedSession } 
          sessionSelected={ sessions.some(session => session.id === selectedSession) } />
      </Box>
      
    </Box>
    
  );
}