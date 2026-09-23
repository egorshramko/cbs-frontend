import { Box } from "@mui/material";
import HallSessionInformation from "./HallSessionInformation";
import HallSessionsInfo from "../lib/HallSessionsInfo";

export default function CinemaSessions({
  hallSessions, isExpanded,
  selectedSession,
  onSessionChange
} : {
  hallSessions: Array<HallSessionsInfo>,
  isExpanded?: boolean,
  selectedSession: number,
  onSessionChange: (sessionId: number) => void
}) {

  function handleSessionChange(sessionId: number) {
    onSessionChange(sessionId);
  }

  if (!isExpanded) {
    hallSessions = hallSessions
      .slice(0, 2);
  }
  
  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      flexDirection: "column",
      gap: "20px",
      padding: "12px 24px"
    }}>
      {
        hallSessions
          .map((session) => {
            return (
              <HallSessionInformation 
                key={ session.hallName } 
                hallSession={ session } 
                selectedSession={ selectedSession } 
                onSessionChange={ handleSessionChange } />
            )
          })
      }
    </Box>
  );
}