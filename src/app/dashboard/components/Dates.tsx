'use client';

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';

import Badge from '@mui/material/Badge';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, PickersDay, PickersDayProps, DateCalendar } from '@mui/x-date-pickers';

import { timelineItemClasses } from '@mui/lab/TimelineItem';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

import { PEOEvent, formatPEOEvent } from '../data/fall-2025';
import { theme } from '@/lib/muix/theme';

interface DatesProps {
    peoEvents: PEOEvent[];
}

function getEventsForDate(date: Dayjs, peoEvents: PEOEvent[]): PEOEvent[] {
    const dateKey = date.format('YYYY-MM-DD');
    const dayEvents = peoEvents.filter(event => event.date === dateKey);

    const sortedEvents = dayEvents.sort((a, b) => {
        if (!a.start_time && !b.start_time) return 0; //this is for if both have no start times
        if (!a.start_time) return 1; // if a has no start time, it should be last
        if (!b.start_time) return -1; // if b has no start time, it should be first
        return a.start_time.localeCompare(b.start_time); // if both have start times, sort by start time
    });

    return sortedEvents.map(formatPEOEvent);
}

function ServerDay(props: PickersDayProps & { peoEvents: PEOEvent[] }) {
    const { day, selected, outsideCurrentMonth, peoEvents, ...other } = props;

    const dayEvents = getEventsForDate(day, peoEvents);
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

function TimelineComponent({ events }: { events: PEOEvent[] }) {
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
                <TimelineItem key={event.id || event.title}>
                    <TimelineSeparator>
                        <TimelineDot />
                        {index < events.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="break-words">
                            <div className="text-sm lg:text-md font-semibold break-words">{event.title}</div>
                            <div className="text-sm lg:text-md text-gray-600">{event.time}</div>
                            {event.location && (
                                <div className="text-sm lg:text-md text-gray-500 break-words">{event.location}</div>
                            )}
                        </div>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

function CalendarComponent({ onDateChange, peoEvents }: {
    onDateChange: (date: Dayjs) => void;
    peoEvents: PEOEvent[];
}) {
    return (
        <DateCalendar
            views={['day']}
            slots={{
                day: (props) => <ServerDay {...props} peoEvents={peoEvents} />,
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

export default function Calendar({ peoEvents }: DatesProps) {
    const [selectedDate, setSelectedDate] = React.useState<Dayjs>(dayjs());

    return (
        <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8'>
            <h3 className='text-lg sm:text-xl font-bold text-[black] mb-4 sm:mb-6'>Upcoming PEOs & Important Dates</h3>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-6'>
                {/* calendar */}
                <div className='flex-1 flex justify-center'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <CalendarComponent
                            onDateChange={setSelectedDate}
                            peoEvents={peoEvents}
                        />
                    </LocalizationProvider>
                </div>

                {/* events */}
                <div className='flex-1 bg-gray-50 rounded-2xl p-4'>
                    <h3 className="font-semibold mb-2">Events:</h3>
                    <TimelineComponent events={getEventsForDate(selectedDate, peoEvents)} />
                </div>
            </div>
        </div>
    );
}