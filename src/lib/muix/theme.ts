import { createTheme } from '@mui/material/styles';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import type { } from '@mui/lab/themeAugmentation';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FDD06E',
      light: '#FFF4D6',
      dark: '#E6B85A',
    },
    secondary: {
      main: '#ea580c',
    }
  },
  components: {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8f9fa',
          borderRadius: '16px',
        },
      },
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          
        },
      },
    },
  },
});