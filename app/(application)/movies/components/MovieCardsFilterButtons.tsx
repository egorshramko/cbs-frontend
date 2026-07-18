import { Box, Button } from "@mui/material";
import { FilterButtonTypes } from "../lib/MovieCardsFilterData";

interface MovieCardsFilterButtonsProps {
  onChangeActiveButton: (activeButton: FilterButtonTypes) => void;
  activeButton: FilterButtonTypes;
}

function NowInCinemasButton({ active, onClick }: {active: boolean, onClick: () => void}) {
  if (active) {
    return (
      <Button
        sx={{
          minWidth: 120,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'primary.main',
            boxShadow: 'none'
          }
        }}
        variant="contained">Сейчас в кино</Button>
    );
  }
  else {
    return (
      <Button
        sx={{
          minWidth: 120,
          boxShadow: 'none'
        }}
        variant="text"
        onClick={ onClick }>Сейчас в кино</Button>
    );
  }
}

function SoonButton({ active, onClick }: { active: boolean, onClick: () => void }) {
  if (active) {
    return (
      <Button
        sx={{
          minWidth: 100,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'primary.main',
            boxShadow: 'none'
          }
        }}
        variant="contained">Скоро</Button>
    );
  }
  else {
    return (
      <Button
        sx={{
          minWidth: 100,
          boxShadow: 'none'
        }}
        variant="text"
        onClick={ onClick }>Скоро</Button>
    );
  }
}

export default function MovieCardsFilterButtons({ onChangeActiveButton, activeButton }: MovieCardsFilterButtonsProps) {
  
  function handleClickNowInCinemas() {
    onChangeActiveButton('NOW_IN_CINEMAS');
  }

  function handleClickSoon() {
    onChangeActiveButton('SOON');
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px"
      }}
    >
      <NowInCinemasButton 
        active={ activeButton === 'NOW_IN_CINEMAS' }
        onClick={ handleClickNowInCinemas } />
      <SoonButton 
        active={ activeButton === 'SOON' } 
        onClick={ handleClickSoon } />
    </Box>
  );
}