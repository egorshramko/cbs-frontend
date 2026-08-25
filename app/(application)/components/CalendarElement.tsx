'use client'

import { Box, Button, Typography } from "@mui/material";

export default function CalendarElement({
  isSelected, date
} : {
  isSelected?: boolean,
  date: Date
}) {

  const backgroundColor = isSelected ? "black" : "white";
  const fontColor = isSelected ? "white" : "black";
  const borderColor = isSelected ? "black" : "#dedfe0";
  
  const textSx = {
    fontWeight: 600,
    fontSize: "14px"
  }

  const todayDate: Date = new Date();
  const isToday: boolean = todayDate.getFullYear() === date.getFullYear() &&
    todayDate.getMonth() === date.getMonth() && 
    todayDate.getDate() === date.getDate();
  const weekDays: string[] = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  return (
    <Button sx={{
      width: "150px",
      height: "60px",
      backgroundColor: backgroundColor,
      color: fontColor
    }} 
      variant="outlined" 
      color="secondary">
      
      <Box sx={{
        display: "block"
      }}>
        <Typography sx={textSx}>
          { (isToday) ? "Сегодня" : weekDays[date.getDay()] }
        </Typography>
        <Typography sx={textSx}>
          { date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long'
          }) }
        </Typography>
      </Box>
    </Button>
  );

  // return (
  //   <Box sx={{
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     width: "150px",
  //     height: "60px",
  //     border: "1px solid",
  //     borderColor: borderColor,
  //     borderRadius: "4px",
  //     backgroundColor: backgroundColor,
  //     color: fontColor,
  //     "&:hover": {
  //       cursor: "pointer",
  //       borderColor: ""
  //     }
  //   }}>
  //     <Typography sx={textSx}>
  //       { (isToday) ? "Сегодня" : "Сб" }
  //     </Typography>
  //     <Typography sx={textSx}>
  //       24 августа
  //     </Typography>
  //   </Box>
  // );
}