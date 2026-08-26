'use client'

import { Box } from "@mui/material";
import Image from "next/image";

export default function SessionsMoviePoster({
  posterUrl
} : {
  posterUrl: string
}) {
  return (
    <Box>
      <Image
        src={ posterUrl }
        alt="Постер фильма" 
        style={{
          borderRadius: "4px",
        }}
        width={170}
        height={203} />
    </Box>
  );
}