import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import { Box, SvgIcon, Typography } from "@mui/material";
import ImaxIcon from './../assets/imax-icon.svg';

function HallsCount({ 
  count 
} : {
  count: number
}) {
  return (
    <Box sx={{
      display: "flex",
      gap: "4px"
    }}>
      <TheatersOutlinedIcon sx={{
        color: "#979797",
        fontSize: "16px"
      }} />
      <Typography sx={{
        fontSize: "12px",
        color: "#979797"
      }}
        variant="body2">
        { count + " залов" }
      </Typography>
    </Box>
  );
}

function ImaxFeature() {
  return (
    <Box sx={{
      display: "flex",
      gap: "4px"
    }}>
      <ImaxIcon width={16} height={16} />
      <Typography sx={{
        fontSize: "12px",
        color: "#979797"
      }}
        variant="body2">
        IMAX
      </Typography>
    </Box>
  );
}

function ParkingFeature() {
  return (
    <Box sx={{
      display: "flex",
      gap: "4px"
    }}>
      <DirectionsCarOutlinedIcon sx={{
        color: "#979797",
        fontSize: "16px"
      }} />
      <Typography sx={{
        fontSize: "12px",
        color: "#979797"
      }}
        variant="body2">
        Парковка
      </Typography>
    </Box>
  );
}

type CinemaFeatureProps = 
  {variant: "hall"; hallsCount: number} |
  {variant: "imax" | "parking"; hallsCount?: never}

export default function CinemaFeature(props: CinemaFeatureProps) {

  switch (props.variant) {
    case "hall":
      return <HallsCount count={ props.hallsCount } />
    case "imax":
      return <ImaxFeature />
    case "parking":
      return <ParkingFeature />
  }

}