import Box from "@mui/material/Box";
import SessionTimeWidget from "./SessionTimeWidget";
import { Button } from "@mui/material";
import HallSession from "../lib/HallSession";
import { Session } from "inspector/promises";

export default function HallSessions({
  sessions
} : {
  sessions: Array<HallSession>
}) {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      gap: "100px" //TODO: временный gap, нужно будет разобраться нормально
    }}>
      <Box sx={{
        display: "flex",
        gap: "20px"
      }}>

        {
          sessions.map((session, index) => {
            return (
              <SessionTimeWidget 
                key={ 'session-' + index }
                value={ 
                  session.sessionDatetime.toLocaleTimeString("ru-RU", {
                    hour: '2-digit',
                    minute: '2-digit'
                  }) 
                }
                isSelected={ session.isSelected } />

            );
          })
        }
      </Box>
      <Button sx={{
        color: "primary.main",
        maxHeight: "30px",
        marginX: "auto"
      }} 
        variant="outlined" color="primary">
        Выбрать сеанс
      </Button>
    </Box>
    
  );
}