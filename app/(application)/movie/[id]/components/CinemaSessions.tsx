import { Box } from "@mui/material";
import HallSessionInformation from "./HallSessionInformation";

export default function CinemaSessions() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "12px 24px"
    }}>
      <HallSessionInformation />
      <HallSessionInformation />
    </Box>
  );
}