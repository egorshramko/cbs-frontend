import { Box } from "@mui/material";
import HallSessionInformation from "./HallSessionInformation";
import HallSessionsInfo from "../lib/HallSessionsInfo";

export default function CinemaSessions({
  hallSessions, isExpanded
} : {
  hallSessions: Array<HallSessionsInfo>,
  isExpanded?: boolean
}) {
  
  // const hallSessions: Array<HallSessionsInfo> = [
  //   {
  //     hallName: "Крутой зал",
  //     hallMovieFormats: new Set(["2d", "3d"]),
  //     sessions: [
  //       {
  //         sessionDatetime: new Date("2026-08-25T10:00:00.000"),
  //         isSelected: false
  //       },
  //       {
  //         sessionDatetime: new Date("2026-08-25T13:00:00.000"),
  //         isSelected: true
  //       },
  //       {
  //         sessionDatetime: new Date("2026-08-25T16:00:00.000"),
  //         isSelected: false
  //       },
  //       {
  //         sessionDatetime: new Date("2026-08-25T19:00:00.000"),
  //         isSelected: false
  //       }
  //     ]
  //   },
  //   {
  //     hallName: "Очень крутой зал",
  //     hallMovieFormats: new Set(["3d", "imax"]),
  //     sessions: [
  //       {
  //         sessionDatetime: new Date("2026-08-25T10:30:00.000"),
  //         isSelected: false
  //       },
  //       {
  //         sessionDatetime: new Date("2026-08-25T13:30:00.000"),
  //         isSelected: false
  //       },
  //       {
  //         sessionDatetime: new Date("2026-08-25T16:30:00.000"),
  //         isSelected: false
  //       },
  //       {
  //         sessionDatetime: new Date("2026-08-25T19:30:00.000"),
  //         isSelected: false
  //       }
  //     ]
  //   }
  // ];

  if (!isExpanded) {
    hallSessions = hallSessions
      .sort((a, b) => {

        //Сортировка пронумерованных залов по номеру
        const lowerCaseAHallName = a.hallName.toLowerCase();
        const lowerCaseBHallName = b.hallName.toLowerCase();
        if (lowerCaseAHallName.includes("зал ") &&
          lowerCaseBHallName.toLowerCase().includes("зал ")) {

          const aHallNumber = Number(lowerCaseAHallName.split("зал ")[1]);
          const bHallNumber = Number(lowerCaseBHallName.split("зал ")[1]);
          if (!isNaN(aHallNumber) && !isNaN(bHallNumber)) {
            return aHallNumber - bHallNumber;
          }

        }

        //Остальные залы сортируются по алфавиту
        return a.hallName.localeCompare(b.hallName)
      })
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
                hallSession={ session } />
            )
          })
      }
    </Box>
  );
}