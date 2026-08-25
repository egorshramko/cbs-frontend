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
    hallSessions = hallSessions.slice(0, 2);
  }
  
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "12px 24px"
    }}>
      {
        hallSessions.map((session) => {
          return (
            <HallSessionInformation 
              key={ session.hallName } 
              hallSession={ session } />
          )
        })
      }
      {/* <HallSessionInformation hallSession={ hallSessions[0] } />
      <HallSessionInformation hallSession={ hallSessions[1] } /> */}
    </Box>
  );
}