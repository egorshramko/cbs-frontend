import { Box, Button, Typography } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

export default function SignInButton() {
  return (
    <Button sx={{
      maxHeight: 35
    }} variant="text">
      <Box sx={{
        display: "flex",
        gap: "10px"
      }}>
        <PermIdentityOutlinedIcon sx={{
          fontSize: 25
        }} />
        <Typography sx={{
          fontSize: 16
        }} variant="body1">
          Войти
        </Typography>
      </Box>
      
    </Button>
  );
}