'use client'

import { Box, Button } from "@mui/material";
import CalendarElement from "./CalendarElement";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export default function Calendar({
  selectedDate, weekNumber
} : {
  selectedDate: Date,
  weekNumber: number
}) {

  const todayDate = new Date();
  console.log("todayDate");
  console.log(todayDate);


  const dates = [];
  for (let i = 0; i < 7; i++) {
    const pushingDate = new Date();
    pushingDate.setDate(todayDate.getDate() + 7 * weekNumber + i);
    dates.push(pushingDate);
  }

  console.log("dates");
  console.log(dates);
  

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
      }}>
      <Button variant="text" disabled={weekNumber <= 0}>
        <KeyboardArrowLeftOutlinedIcon />
      </Button>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "14px"
      }}>
        {
          dates.map((date) => {

            const isSelected: boolean = 
              selectedDate.toLocaleDateString() === date.toLocaleDateString();

            return (
              <CalendarElement 
                key={ date.toLocaleDateString() } 
                isSelected={ isSelected } 
                date = { date } />
            );
          })
        }
      </Box>
      <Button variant="text" disabled={weekNumber >= 4}>
        <KeyboardArrowRightOutlinedIcon />
      </Button>
    </Box>
    
  );
}