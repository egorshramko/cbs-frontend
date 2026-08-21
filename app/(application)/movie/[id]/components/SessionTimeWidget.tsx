import { Button } from "@mui/material";

export default function SessionTimeWidget({
  value, isSelected
} : {
  value: string, //TODO: потом подумать, а строка ли это будет?
  isSelected?: boolean
}) {
  if (isSelected) {
    return (
      <Button sx={{
        maxWidth: "70px",
        maxHeight: "30px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: "primary.main"
        }
      }}
        variant="contained">
        {value}
      </Button>
    );
  }
  else {
    return (
      <Button sx={{
        maxWidth: "70px",
        maxHeight: "30px"
      }}
        variant="outlined"
        color="secondary">
        {value}
      </Button>
    );
  }
  
}