import Typography from "@mui/material/Typography";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import Box from "@mui/material/Box";
import CinemaFeature from "./CinemaFeature";

export default function CinemaFeatures() {
  return (
    <Box sx={{
      display: "flex",
      gap: "20px"
    }}>
      <CinemaFeature variant="hall" hallsCount={5} />
      <CinemaFeature variant="imax" />
      <CinemaFeature variant="parking" />
    </Box>
  );
}