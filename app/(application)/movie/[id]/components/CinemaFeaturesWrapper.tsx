import Box from "@mui/material/Box";
import CinemaFeature from "./CinemaFeature";
import CinemaFeatures from "../lib/CinemaFeatures";

export default function CinemaFeaturesWrapper({
  features
} : {
  features: CinemaFeatures
}) {
  
  return (
    <Box sx={{
      display: "flex",
      gap: "20px"
    }}>
      <CinemaFeature variant="hall" hallsCount={ features.hallsCount } />
      { features.imaxAvailable ? <CinemaFeature variant="imax" /> : ''}
      { features.parkingAvailable ? <CinemaFeature variant="parking" /> : '' }
      
    </Box>
  );
}