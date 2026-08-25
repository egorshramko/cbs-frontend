import Box from "@mui/material/Box";
import HallSessionsHeader from "./HallSessionsHeader";
import HallSessions from "./HallSessions";
import HallSessionsInfo from "../lib/HallSessionsInfo";


export default function HallSessionInformation({
  hallSession
} : {
  hallSession: HallSessionsInfo
}) {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
      <HallSessionsHeader hallSession={ hallSession } />
      <HallSessions sessions={ hallSession.sessions } />
    </Box>
  );
}