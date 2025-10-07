import { StudentInfo } from './components/StudentInfo';
import { Progress } from './components/Progress';
import Dates from './components/Dates';
import QOL from './components/QOL';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
    return (
        <div className='min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-6 sm:mb-8'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] mb-2'>
                        Promise Dashboard
                    </h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
                    <div className='space-y-3 sm:space-y-6'>
                        <StudentInfo />
                        <Dates />
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