'use client';

import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import dayjs from 'dayjs';
import { FALL_2025_EVENTS } from '../data/fall-2025';


const theme = createTheme({
    palette: {
        primary: {
            main: '#FDD06E',
            light: '#FFF4D6',
            dark: '#E6B85A',
        },
        secondary: {
            main: '#FFB84D',
        },
        text: {
            primary: '#252525',
            secondary: '#8e8e8e',
        },
    },
    shape: {
        borderRadius: 12,
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
    },
});

const getEventsForDate = (date: dayjs.Dayjs, events: typeof FALL_2025_EVENTS) => {
    const dateKey = date.format('YYYY-MM-DD');
    return events[dateKey as keyof typeof events] || [];
};

const CustomDay = (props: any) => {
    const { day, events, ...other } = props;
    const dayEvents = getEventsForDate(day, events);
    const hasEvents = dayEvents.length > 0;

    return (
        <PickersDay
            {...other}
            day={day}
            sx={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                padding: 0,
                '&.Mui-selected': {
                    backgroundColor: '#FDD06E',
                    color: '#252525',
                    '&:hover': {
                        backgroundColor: '#E6B85A',
                    },
                },
                '&::after': hasEvents ? {
                    content: '""',
                    position: 'absolute',
                    bottom: '3px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#f59e0b',
                    borderRadius: '50%',
                } : {}
            }}
        />
    );
};

export default function Calendar() {
    const [selectedDate, setSelectedDate] = React.useState<dayjs.Dayjs>(dayjs());
    const events = FALL_2025_EVENTS;

    const handleDateChange = (newDate: dayjs.Dayjs | null) => {
        if (newDate) {
            setSelectedDate(newDate);
        }
    };

    const selectedDateEvents = getEventsForDate(selectedDate, events);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
                    <div className="flex justify-center lg:justify-start">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                views={['day']}
                                value={selectedDate}
                                onChange={handleDateChange}
                                slots={{
                                    day: (props) => <CustomDay {...props} events={events} />,
                                }}
                                sx={{
                                    '--MuiPickersDay-daySize': '35px',
                                    '& .MuiPickersDay-root': {
                                        minWidth: '35px',
                                        height: '35px'
                                    }
                                }}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 min-h-0">
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                            {selectedDate ? selectedDate.format('MMMM D, YYYY') : 'Events'}
                        </h3>

                        {selectedDateEvents.length > 0 ? (
                            <div className="space-y-2">
                                {selectedDateEvents.map((event, index) => (
                                    <div key={index} className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                                        <h4 className="text-sm sm:text-base lg:text-lg font-medium">{event.title}</h4>
                                        <p className="text-xs sm:text-sm mt-1">{event.time}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">No events scheduled for this date</p>
                        )}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
