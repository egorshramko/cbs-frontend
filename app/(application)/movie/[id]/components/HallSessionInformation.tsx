import Box from "@mui/material/Box";
import HallSessionsHeader from "./HallSessionsHeader";
import HallSessions from "./HallSessions";


export default function HallSessionInformation() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
      <HallSessionsHeader />
      <HallSessions />
    </Box>
  );
}