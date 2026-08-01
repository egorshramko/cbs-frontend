import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import ApplicationHeader from "./components/ApplicationHeader";
import { Divider } from "@mui/material";
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
            <ApplicationHeader />
            <Divider />
            { children }
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}