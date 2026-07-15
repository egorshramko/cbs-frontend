'use client'

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Inter", sans-serif',
        fontSize: 13
    },
    palette: {
        primary: {
            main: "#6D28D9"
        }
    }
});

export default theme;