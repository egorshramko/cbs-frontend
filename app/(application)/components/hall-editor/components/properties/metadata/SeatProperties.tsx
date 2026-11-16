import NumberField from "@/app/(application)/components/NumberField";
import { Seat } from "@/app/(application)/lib/hall-editor/objects/Seat";
import Box from "@mui/material/Box";

export default function SeatProperties({
  seat
} : {
  seat: Seat
}) {
  
  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <NumberField
        label="Ряд"
        value={seat.row}
        size="small" />
      <NumberField
        label="Место"
        value={seat.place}
        size="small" />
    </Box>
  );

}