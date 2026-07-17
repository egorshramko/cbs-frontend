'use client'

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                },
                text: {
                    color: "black"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontSize: 16
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#6D28D9"
        }
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        fontSize: 13
    }
});

export default theme;