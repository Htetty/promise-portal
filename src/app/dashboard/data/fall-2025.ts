export interface CalendarEvent {
  title: string;
  time: string;
  type: 'academic' | 'holiday' | 'deadline';
}

export const FALL_2025_EVENTS: { [key: string]: CalendarEvent[] } = {
  '2025-08-11': [{ title: 'Flex Days (No Classes)', time: 'All Day', type: 'holiday' }],
  '2025-08-12': [{ title: 'Flex Days (No Classes)', time: 'All Day', type: 'holiday' }],
  '2025-08-13': [{ title: 'Day and Evening Classes Begin', time: 'All Day', type: 'academic' }],
  '2025-08-26': [
    { title: 'Last Day to Add Semester-Length Classes', time: 'All Day', type: 'deadline' },
    { title: 'Last Day to Drop Semester-Length Classes with Eligibility for Partial Refund', time: 'All Day', type: 'deadline' }
  ],
  '2025-08-30': [{ title: 'Declared Recess', time: 'All Day', type: 'holiday' }],
  '2025-08-31': [{ title: 'Declared Recess', time: 'All Day', type: 'holiday' }],
  '2025-09-01': [
    { title: 'Labor Day (Holiday)', time: 'All Day', type: 'holiday' },
    { title: 'Last Day to Drop Semester-Length Classes without Appearing on Record', time: 'All Day', type: 'deadline' }
  ],
  '2025-09-02': [{ title: 'Census Day (Semester Length Courses)', time: 'All Day', type: 'academic' }],
  '2025-10-08': [{ title: 'Flex Day (No Classes)', time: 'All Day', type: 'holiday' }],
  '2025-10-31': [{ title: 'Last Day to Petition for Degree / Certificate', time: 'All Day', type: 'deadline' }],
  '2025-11-08': [{ title: 'Declared Recess', time: 'All Day', type: 'holiday' }],
  '2025-11-09': [{ title: 'Declared Recess', time: 'All Day', type: 'holiday' }],
  '2025-11-10': [{ title: 'Veteran\'s Day (Holiday)', time: 'All Day', type: 'holiday' }],
  '2025-11-12': [{ title: 'Last Day to Withdraw from Semester-Length Classes', time: 'All Day', type: 'deadline' }],
  '2025-11-27': [{ title: 'Thanksgiving Day (Holiday)', time: 'All Day', type: 'holiday' }],
  '2025-11-28': [{ title: 'Day after Thanksgiving (Holiday)', time: 'All Day', type: 'holiday' }],
  '2025-11-29': [{ title: 'Declared Recess', time: 'All Day', type: 'holiday' }],
  '2025-11-30': [{ title: 'Declared Recess', time: 'All Day', type: 'holiday' }],
  '2025-12-09': [{ title: 'Final Examinations (Day, Evening, Weekend Classes)', time: 'All Day', type: 'academic' }],
  '2025-12-15': [
    { title: 'Final Examinations (Day, Evening, Weekend Classes)', time: 'All Day', type: 'academic' },
    { title: 'Day and Evening Classes End', time: 'All Day', type: 'academic' }
  ],
  '2025-12-24': [{ title: 'Winter Recess', time: 'All Day', type: 'holiday' }],
};
