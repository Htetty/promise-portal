import Link from 'next/link';
import { LuCalendar, LuCircleHelp } from 'react-icons/lu';

export default function QOL() {
    const quickLinks = [
        {
            href: 'https://smccd.onelogin.com/portal',
            icon: <LuCalendar className='w-4 h-4 sm:w-5 sm:h-5 text-white' />,
            label: 'Schedule Appointment',
            backgroundClass: 'bg-[#FDD06E]',
        },
        {
            href: 'https://skylinecollege.edu/promise/faq.php',
            icon: <LuCircleHelp className='w-4 h-4 sm:w-5 sm:h-5 text-white' />,
            label: 'FAQ',
            backgroundClass: 'bg-[#ea580c]',
        },
    ];

    return (
        <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6'>
            <div className='mb-4 sm:mb-6'>
                <h3 className='text-lg sm:text-xl font-bold text-[#252525] mb-1'>Quick Links</h3>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                {quickLinks.map(({ href, icon, label, backgroundClass }) => (
                    <Link
                        key={href}
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col items-center text-center gap-2 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FDD06E] rounded-lg'
                    >
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-transform duration-150 hover:scale-105 ${backgroundClass}`}>
                            {icon}
                        </div>
                        <p className='text-xs sm:text-sm font-semibold text-[#252525]'>
                            {label}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
