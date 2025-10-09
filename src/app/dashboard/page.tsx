import { StudentInfo } from './components/StudentInfo';
import { Progress } from './components/Progress';
import Calendar from './components/Dates';
import QOL from './components/QOL';
import { getPEOEvents } from './actions';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
    const peoEvents = await getPEOEvents();

    return (
        <div className='min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-6 sm:mb-8'>
                    {/*<h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[black] mb-2'>
                        Promise Dashboard
                    </h1>*/}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
                    <div className='space-y-3 sm:space-y-6'>
                        <StudentInfo />
                        <Calendar peoEvents={peoEvents} />
                    </div>
                    <div className='space-y-4 sm:space-y-6'>
                        <Progress />
                        <QOL />
                    </div>
                </div>
            </div>
        </div>
    );
}