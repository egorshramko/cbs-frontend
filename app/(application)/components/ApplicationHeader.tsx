import { Box, Tab, Tabs, Typography } from "@mui/material";
import SignInButton from "./SignInButton";

export default function ApplicationHeader() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between"
    }}>
      <Box 
        sx={{
          display: "flex"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 200
          }}
        >
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 800
            }}
          >
              CINEMA
          </Typography>
        </Box>
        
        <Tabs value={ "Афиша" } aria-label="navigation tabs">
          <Tab sx={{
            padding: "20px"
          }} value="Афиша" label="Афиша"></Tab>
          <Tab sx={{
            padding: "20px"
          }} value="Кинотеатры" label="Кинотеатры"></Tab>
        </Tabs>
      </Box>
      <Box sx={{
        display: "flex",
        alignItems: "center"
      }}>
        <SignInButton />
      </Box>
    </Box>
  );
}