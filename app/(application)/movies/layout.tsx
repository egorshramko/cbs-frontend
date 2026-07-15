import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

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
            { children }
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}