import Box from "@mui/material/Box";
import SessionTimeWidget from "./SessionTimeWidget";
import { Button } from "@mui/material";

export default function HallSessions() {
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
        <SessionTimeWidget value={"10:00"} />
        <SessionTimeWidget value={"13:00"} />
        <SessionTimeWidget value={"16:00"} isSelected={true} />
        <SessionTimeWidget value={"19:00"} />
        <SessionTimeWidget value={"22:00"} />
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