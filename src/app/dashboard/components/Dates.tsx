'use client';

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';

import Badge from '@mui/material/Badge';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, PickersDay, PickersDayProps, DateCalendar } from '@mui/x-date-pickers';

import { timelineItemClasses } from '@mui/lab/TimelineItem';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';


import { FALL_2025_EVENTS, CalendarEvent } from '../data/fall-2025';
import { theme } from '@/lib/muix/theme';

function getEventsForDate(date: Dayjs): CalendarEvent[] {
    const dateKey = date.format('YYYY-MM-DD');
    return FALL_2025_EVENTS[dateKey] || [];
}

function ServerDay(props: PickersDayProps) {
    const { day, selected, outsideCurrentMonth, ...other } = props;

    const dayEvents = getEventsForDate(day);
    const hasEvents = dayEvents.length > 0;
    const isSelected = selected;

    //if (outsideCurrentMonth) return <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />;

    return (
        /*<Badge
            key={day.toString()}
            overlap="circular"
            badgeContent={hasEvents ? '🌚' : undefined}
        >
            <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
        </Badge>*/
        <PickersDay
            {...other}
            outsideCurrentMonth={outsideCurrentMonth}
            day={day}
            sx={(theme) => ({
                ...(hasEvents && {
                    backgroundColor: theme.palette.primary.main,
                    '&:hover, &:focus': {
                        backgroundColor: theme.palette.primary.dark,
                    },
                }),
                ...(selected && {
                    backgroundColor: theme.palette.secondary.main,
                    '&:hover, &:focus': {
                        backgroundColor: theme.palette.secondary.main,
                    },
                }),
            })}
        />
    );
}

{/*}
function EventsComponent({ selectedDate }: { selectedDate: Dayjs }) {
    const events = getEventsForDate(selectedDate);
    const hasEvents = events.length > 0;

    if (!hasEvents) {
        return <div className="text-gray-500">No events on this day</div>;
    }

    return (
        <div className="mt-4">
            <p>{events.map(event => event.title).join(", ")}</p>
        </div>
    );
}*/}

function TimelineComponent({ events }: { events: CalendarEvent[] }) {
    if (events.length === 0) {
        return <div className="text-gray-500">No events on this day</div>;
    }

    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            {events.map((event, index) => (
                <TimelineItem key={event.title}>
                    <TimelineSeparator>
                        <TimelineDot />
                        {index < events.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-gray-600">{event.time}</div>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

function CalendarComponent({ onDateChange }: { onDateChange: (date: Dayjs) => void }) {
    return (
        <DateCalendar
            views={['day']}
            slots={{
                day: ServerDay,
            }}
            sx={{
                'margin': 0,
            }}
            onChange={(date) => {
                if (date) {
                    onDateChange(date);
                }
            }}
        />
    );
}

export default function DateCalendarServerRequest() {
    const [selectedDate, setSelectedDate] = React.useState<Dayjs>(dayjs());

    return (
        <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8'>
            <div className='flex gap-4'>
                <div className='flex justify-start items-start'>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <CalendarComponent onDateChange={setSelectedDate} />
                    </LocalizationProvider >
                </div>
                <div className='bg-gray-50 rounded-2xl p-4 flex-1'>
                    <h3 className="font-semibold mb-2">Events:</h3>
                    <TimelineComponent events={getEventsForDate(selectedDate)} />
                </div>
            </div>
        </div>
    );
}