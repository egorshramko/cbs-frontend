import { Button } from "@mui/material";

export default function SessionTimeWidget({
  value, isSelected,
  sessionId,
  onClick
} : {
  value: string, //TODO: потом подумать, а строка ли это будет?
  isSelected?: boolean,
  sessionId: number,
  onClick: (sessionId: number) => void
}) {

  function handleClick() {
    onClick(sessionId);
  }

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
        color="secondary"
        onClick={ handleClick }>
        {value}
      </Button>
    );
  }
  
}