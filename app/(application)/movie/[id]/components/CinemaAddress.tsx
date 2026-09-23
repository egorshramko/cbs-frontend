import { Typography } from "@mui/material";

export default function CinemaAddress({
  address
} : {
  address: string
}) {
  return (
    <Typography sx={{
      fontSize: "12px",
      color: "#979797"
    }}
      variant="body2">
      { address }
    </Typography>
  );
}