'use client';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import { Loading } from './loader';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
        MuiDatePicker: {
            defaultProps: {
                displayWeekNumber: true,
            },
        },
        MuiDateCalendar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f8f9fa',
                    borderRadius: '16px',
                },
            },
        },
    },
});

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Loading />
                {children}
                <Loading />
            </LocalizationProvider>
        </ThemeProvider>
    );
}