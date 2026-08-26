'use client'

import { Box, Button } from "@mui/material";
import CalendarElement from "./CalendarElement";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useState } from "react";

export default function Calendar({
  onDateChange
} : {
  onDateChange: (selectedDate: Date) => void
}) {

  const todayDate = new Date();

  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [weekNumber, setWeekNumber] = useState(0);

  function handleLeftArrowClick() {
    setWeekNumber(weekNumber - 1);
  }

  function handleRightArrowClick() {
    setWeekNumber(weekNumber + 1);
  }

  function handleCalendarElementClick(clickedDate: Date) {
    setSelectedDate(clickedDate);
    onDateChange(clickedDate);
  }
  


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
      <Button variant="text" disabled={weekNumber <= 0}
        onClick={ handleLeftArrowClick }>
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
                date = { date } 
                onClick={ handleCalendarElementClick } />
            );
          })
        }
      </Box>
      <Button variant="text" disabled={weekNumber >= 4}
        onClick={ handleRightArrowClick }>
        <KeyboardArrowRightOutlinedIcon />
      </Button>
    </Box>
    
  );
}