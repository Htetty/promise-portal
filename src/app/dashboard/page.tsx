import { StudentInfo } from './components/StudentInfo';
import { Progress } from './components/Progress';
import Calendar from './components/Dates';
import QOL from './components/QOL';
import { getPEOEvents } from './actions';
import Media from './components/Media';
import { PiStarFill } from "react-icons/pi";

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
    const peoEvents = await getPEOEvents();

    return (
        <div className='min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-4'>
                    <div className='flex items-center gap-3 mb-2'>
                        <PiStarFill className='text-[#FFB347] text-2xl sm:text-3xl lg:text-4xl' />
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-black text-[#FDD06E] tracking-wider uppercase'>
                            Promise Dashboard
                        </h1>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6'>
                    <div className='lg:col-span-2 space-y-3 sm:space-y-6'>
                        <StudentInfo />
                        <Progress />
                        <div className='hidden lg:block'>
                            <QOL />
                        </div>
                    </div>
                    <div className='lg:col-span-3 space-y-4 sm:space-y-6'>
                        <Calendar peoEvents={peoEvents} />
                        <Media />
                        <div className='lg:hidden'>
                            <QOL />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}