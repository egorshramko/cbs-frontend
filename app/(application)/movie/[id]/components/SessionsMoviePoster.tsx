import { Box } from "@mui/material";
import Image from "next/image";

export default function SessionsMoviePoster() {
  return (
    <Box>
      <Image 
        src="/temp-poster.png" 
        alt="Постер фильма" 
        style={{
          borderRadius: "4px",
        }}
        width={170}
        height={203} />
    </Box>
  );
}