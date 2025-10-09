export interface PEOEvent {
  id?: number;
  date: string;
  start_time?: string;
  end_time?: string;
  title: string;
  location?: string;
  time?: string;
}

export function formatPEOEvent(peoEvent: PEOEvent): PEOEvent {
  return {
    id: peoEvent.id,
    date: peoEvent.date,
    start_time: peoEvent.start_time,
    end_time: peoEvent.end_time,
    title: peoEvent.title,
    location: peoEvent.location,
    time: formatTime(peoEvent.start_time, peoEvent.end_time)
  };
}

function formatTime(startTime?: string, endTime?: string): string {
  if (!startTime) return 'All Day';
  
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  if (endTime) {
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  }
  
  return formatTime(startTime);
}