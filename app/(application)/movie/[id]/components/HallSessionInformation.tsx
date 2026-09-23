import Box from "@mui/material/Box";
import HallSessionsHeader from "./HallSessionsHeader";
import HallSessions from "./HallSessions";
import HallSessionsInfo from "../lib/HallSessionsInfo";


export default function HallSessionInformation({
  hallSession,
  selectedSession,
  onSessionChange
} : {
  hallSession: HallSessionsInfo,
  selectedSession: number,
  onSessionChange: (sessionId: number) => void
}) {

  function handleSessionChange(sessionId: number) {
    onSessionChange(sessionId);
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
      <HallSessionsHeader hallSession={ hallSession } />
      <HallSessions sessions={ hallSession.sessions } selectedSession={ selectedSession } onSessionChange={ handleSessionChange } />
    </Box>
  );
}