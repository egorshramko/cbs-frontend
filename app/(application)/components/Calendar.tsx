import { Box, Button } from "@mui/material";
import CalendarElement from "./CalendarElement";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export default function Calendar() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
      }}>
      <Button variant="text" disabled>
        <KeyboardArrowLeftOutlinedIcon />
      </Button>
      <Box sx={{
        display: "flex",
        gap: "14px"
      }}>
        <CalendarElement isSelected={true} isToday={true} />
        <CalendarElement />
        <CalendarElement />
        <CalendarElement />
        <CalendarElement />
        <CalendarElement />
        <CalendarElement />
      </Box>
      <Button variant="text">
        <KeyboardArrowRightOutlinedIcon />
      </Button>
    </Box>
    
  );
}