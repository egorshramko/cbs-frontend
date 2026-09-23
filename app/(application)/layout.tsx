import "./globals.css";
import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import ApplicationHeader from "./components/ApplicationHeader";
import { Box, Divider } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Билеты в кино",
  description: "Система бронирования билетов в кинотеатр",
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
} : {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={ theme }>
            <Box sx={{
              position: "fixed",
              top: 0, 
              left: 0,
              width: "100%",
              bgcolor: "white",
              zIndex: 1000
            }}>
              <ApplicationHeader />
              <Divider />
            </Box>
            <Box sx={{
              marginTop: "50px",
              height: "100%"
            }}>
              {children}
            </Box>
            
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}