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
import { SupportViewer } from '../../../shared/components/SupportViewer';

function stripIncentiveText(incentiveText: string): string {
    if (!incentiveText) return 'N/A';

    const match = incentiveText.match(/^I would like the (.+) Incentive$/);
    return match ? match[1] : incentiveText;
}

export const StudentInfo = async () => {
    try {
        const userData = await getUserData();

        return (
            <div className='bg-[#F5F3EB] rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8'>
                <div className='flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6'>

                    {/* Student Info */}
                    <div className='flex-1 min-w-0'>
                        <p className='text-sm text-[#8e8e8e] mb-1'>Welcome back</p>
                        <h2 className='text-xl lg:text-2xl font-bold text-[black] mb-2 leading-tight'>
                            {userData?.first_name || 'Student'} {userData?.last_name || ''}
                        </h2>
                        <p className='text-sm text-[black]'>
                            Student ID • {userData?.g_number || 'N/A'}
                        </p>
                    </div>
                </div>

                {/* Counselor Information */}
                <div className='mb-4 sm:mb-6'>
                    <p className='text-sm lg:text-md text-[#8e8e8e] mb-2'>Assigned Counselor:</p>
                    <p className='text-lg font-bold text-[black]'>
                        {userData?.counselor || 'N/A'}
                    </p>
                </div>

                {/* Support and Incentive */}
                <div className='flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 gap-y-5'>
                    {/* Support Level */}
                    <div className='flex gap-x-2'>
                        <span className='bg-[#FDD06E] text-[black] px-2 sm:px-3 py-1 rounded-full text-lg font-semibold'>
                            {userData?.support_level || 'N/A'} Support
                        </span>
                        <SupportViewer supportLevel={userData?.support_level} />
                    </div>

                    {/* Incentive Choice */}
                    <div className='flex flex-row sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4 gap-y-5'>
                        <span className='text-lg text-[black]'>Incentive Choice:</span>
                        <span className='bg-gray-200 text-[black] px-2 sm:px-3 lg:px-4 py-1 rounded-full text-lg font-semibold'>
                            {stripIncentiveText(userData?.incentive_choice || 'N/A')}
                        </span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error(error);
        return (
            <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center'>
                <p className='text-sm sm:text-sm text-[#8e8e8e]'>Please try logging out and logging back in!</p>
            </div>
        );
    }
};