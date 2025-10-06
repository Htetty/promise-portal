import { getUserData } from '../actions';

export const Progress = async () => {
    try {
        const userData = await getUserData();

        const counselorProgress = Math.min(((userData?.appt_count || 0) / 6) * 100, 100);
        const peoProgress = Math.min(((userData?.peo_count || 0) / 3) * 100, 100);
        const overallProgress = Math.round((counselorProgress + peoProgress) / 2);

        return (
            <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8'>
                <h3 className='text-lg sm:text-xl font-bold text-[#252525] mb-4 sm:mb-6'>Check Out Your Progress!</h3>

                {/* progress rings */}
                <div className='flex flex-col items-center mb-4 sm:mb-6'>
                    <div className='relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-4'>
                        <svg className='w-full h-full transform -rotate-90' viewBox='0 0 100 100'>
                            <circle
                                cx='50'
                                cy='50'
                                r='45'
                                fill='none'
                                stroke='#e5e7eb'
                                strokeWidth='8'
                            />
                            <circle
                                cx='50'
                                cy='50'
                                r='45'
                                fill='none'
                                stroke='#ea580c'
                                strokeWidth='8'
                                strokeLinecap='round'
                                strokeDasharray={`${2 * Math.PI * 45}`}
                                strokeDashoffset={`${2 * Math.PI * 45 * (1 - counselorProgress / 100)}`}
                                className='transition-all duration-1000 ease-out'
                            />
                        </svg>

                        <svg className='absolute inset-0 w-full h-full transform -rotate-90' viewBox='0 0 100 100'>
                            <circle
                                cx='50'
                                cy='50'
                                r='35'
                                fill='none'
                                stroke='#e5e7eb'
                                strokeWidth='8'
                            />
                            <circle
                                cx='50'
                                cy='50'
                                r='35'
                                fill='none'
                                stroke='#f59e0b'
                                strokeWidth='8'
                                strokeLinecap='round'
                                strokeDasharray={`${2 * Math.PI * 35}`}
                                strokeDashoffset={`${2 * Math.PI * 35 * (1 - peoProgress / 100)}`}
                                className='transition-all duration-1000 ease-out'
                            />
                        </svg>

                        <svg className='absolute inset-0 w-full h-full transform -rotate-90' viewBox='0 0 100 100'>
                            <circle
                                cx='50'
                                cy='50'
                                r='25'
                                fill='none'
                                stroke='#e5e7eb'
                                strokeWidth='8'
                            />
                            <circle
                                cx='50'
                                cy='50'
                                r='25'
                                fill='none'
                                stroke='#FDD06E'
                                strokeWidth='8'
                                strokeLinecap='round'
                                strokeDasharray={`${2 * Math.PI * 25}`}
                                strokeDashoffset={`${2 * Math.PI * 25 * (1 - overallProgress / 100)}`}
                                className='transition-all duration-1000 ease-out'
                            />
                        </svg>
                    </div>
                </div>

                {/* legend */}
                <div className='space-y-2 sm:space-y-3'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3'>
                        <div className='flex items-center gap-2 sm:gap-3'>
                            <div className='w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#ea580c]'></div>
                            <span className='text-xs sm:text-sm text-[#252525]'>Counselor Appointments Attended</span>
                        </div>
                        <div className='text-xs sm:text-sm text-[#252525]'>
                            {userData?.appt_count || 0} of 6
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3'>
                        <div className='flex items-center gap-2 sm:gap-3'>
                            <div className='w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#f59e0b]'></div>
                            <span className='text-xs sm:text-sm text-[#252525]'>PEOs Attended</span>
                        </div>
                        <div className='text-xs sm:text-sm text-[#252525]'>
                            {userData?.peo_count || 0} of 3
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3'>
                        <div className='flex items-center gap-2 sm:gap-3'>
                            <div className='w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FDD06E]'></div>
                            <span className='text-xs sm:text-sm text-[#252525]'>Overall Completion</span>
                        </div>
                        <div className='text-xs sm:text-sm text-[#252525]'>
                            {overallProgress}%
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error(error);
        return (
            <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center'>
                <h3 className='text-lg sm:text-xl font-bold text-[#252525] mb-4'>Unable to Load Progress</h3>
                <p className='text-sm sm:text-base text-[#8e8e8e]'>Please try refreshing the page.</p>
            </div>
        );
    }
};
