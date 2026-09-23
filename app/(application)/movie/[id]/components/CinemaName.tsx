import Typography from "@mui/material/Typography";

export default function CinemaName({
  name
} : {
  name: string
}) {
  return (
    <Typography sx={{
      fontSize: "18px",
      fontWeight: 600
    }}
      variant="h5"
    >
      { name }
    </Typography>
  );
}