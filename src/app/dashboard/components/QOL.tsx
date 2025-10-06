import { LuCalendar, LuCircleHelp, LuBookOpen, LuSettings } from "react-icons/lu";

export default function QOL() {
    const apptLink = "https://smccd.onelogin.com/portal";
    const FAQ = "https://skylinecollege.edu/promise/faq.php";

    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6">
            <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#252525] mb-1">Quick Links</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Schedule Appointment */}
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FDD06E] rounded-lg flex items-center justify-center 
                              transition-transform duration-150 hover:scale-105">
                        <LuCalendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#252525]">
                        Schedule Appointment
                    </p>
                </div>

                {/* FAQ */}
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ea580c] rounded-lg flex items-center justify-center 
                              transition-transform duration-150 hover:scale-105">
                        <LuCircleHelp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#252525]">
                        FAQ
                    </p>
                </div>
            </div>
        </div>
    );
}
