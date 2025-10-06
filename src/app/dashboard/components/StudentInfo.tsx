//userData.g_number
//userData.first_name
//userData.last_name
//userData.counselor
//userData.smccd_email
//userData.cohort_term
//userData.cohort_year
//userData.support_level
//userData.appt_count
//userData.peo_count
//userData.incentive_choice

import { getUserData } from '../actions';

export const StudentInfo = async () => {
    try {
        const userData = await getUserData();

        return (
            <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8'>
                {/* Student Header */}
                <div className='flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6'>
                    {/* Avatar Placeholder */}
                    <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#FDD06E] rounded-xl flex-shrink-0'></div>

                    {/* Student Info */}
                    <div className='flex-1 min-w-0'>
                        <p className='text-xs sm:text-sm text-[#8e8e8e] mb-1'>Welcome back</p>
                        <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-[#252525] mb-2 leading-tight'>
                            {userData?.first_name || 'Student'} {userData?.last_name || ''}
                        </h2>
                        <p className='text-xs sm:text-sm text-[#252525]'>
                            Student ID • {userData?.g_number || 'N/A'}
                        </p>
                    </div>
                </div>

                {/* Counselor Information */}
                <div className='mb-4 sm:mb-6'>
                    <p className='text-xs sm:text-sm text-[#8e8e8e] mb-2'>Assigned Counselor:</p>
                    <p className='text-base sm:text-lg lg:text-xl font-bold text-[#252525]'>
                        {userData?.counselor || 'N/A'}
                    </p>
                </div>

                {/* Support and Incentive */}
                <div className='flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4'>
                    {/* Support Level */}
                    <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                        <span className='bg-[#FDD06E] text-[#252525] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium'>
                            {userData?.support_level || 'N/A'} Support
                        </span>
                        <button className='text-xs sm:text-sm text-[#252525] underline hover:no-underline'>
                            What does this mean?
                        </button>
                    </div>

                    {/* Incentive Choice */}
                    <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                        <span className='text-xs sm:text-sm text-[#252525]'>Incentive Choice:</span>
                        <span className='bg-gray-200 text-[#252525] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium'>
                            {userData?.incentive_choice || 'N/A'}
                        </span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error(error);
        return (
            <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center'>
                <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-[#252525] mb-4'>Unable to Load Student Information</h2>
                <p className='text-sm sm:text-base text-[#8e8e8e]'>Please try refreshing the page or contact support if the issue persists.</p>
            </div>
        );
    }
};