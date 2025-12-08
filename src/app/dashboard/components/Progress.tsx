import { getUserData } from "../actions";
import { ConfettiTrigger } from "../../../shared/components/Confetti";

export const Progress = async () => {
    try {
        const userData = await getUserData();

        const getSupportLevel = (supportLevel: string) => {
            switch (supportLevel) {
                case "High":
                    return { counselor: 3, peo: 2 };
                case "Medium":
                    return { counselor: 2, peo: 2 };
                case "Low":
                    return { counselor: 2, peo: 1 };
                default:
                    return { counselor: 0, peo: 0 };
            }
        };

        const { counselor, peo } = getSupportLevel(userData.support_level);

        const counselorProgress = Math.min(((userData?.appt_count || 0) / counselor) * 100, 100);
        const peoProgress = Math.min(((userData?.peo_count || 0) / peo) * 100, 100);
        const overallProgress = Math.round((counselorProgress + peoProgress) / 2);

        return (
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[black] mb-4 sm:mb-6 text-center">Check Out Your Progress!</h3>

                {/* progress rings */}
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                    <div id="progress-wheel" className="relative w-50 h-50 sm:w-50 sm:h-50 lg:w-50 lg:h-50 mb-4">
                        <ConfettiTrigger overallProgress={overallProgress} />
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#e5e7eb"
                                strokeWidth="8"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#ea580c"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={`${2 * Math.PI * 45}`}
                                strokeDashoffset={`${2 * Math.PI * 45 * (1 - counselorProgress / 100)}`}
                            />
                        </svg>

                        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="35"
                                fill="none"
                                stroke="#e5e7eb"
                                strokeWidth="8"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="35"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={`${2 * Math.PI * 35}`}
                                strokeDashoffset={`${2 * Math.PI * 35 * (1 - peoProgress / 100)}`}
                            />
                        </svg>

                        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="25"
                                fill="none"
                                stroke="#e5e7eb"
                                strokeWidth="8"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="25"
                                fill="none"
                                stroke="#FDD06E"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={`${2 * Math.PI * 25}`}
                                strokeDashoffset={`${2 * Math.PI * 25 * (1 - overallProgress / 100)}`}
                            />
                        </svg>
                    </div>
                </div>

                {/* legend */}
                <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-row gap-x-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#ea580c]"></div>
                            <div className="text-md lg:text-lg font-semibold text-black">
                                {userData?.appt_count || 0} of {counselor}
                            </div>
                            <span className="text-md lg:text-lg text-black">Counselor Appointments Attended</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#f59e0b]"></div>
                            <div className="text-md lg:text-lg font-semibold text-[black]">
                                {userData?.peo_count || 0} of {peo}
                            </div>
                            <span className="text-md lg:text-lg text-[black]">PEOs Attended</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FDD06E]"></div>
                            <div className="text-md lg:text-lg text-[black] font-semibold">
                                {overallProgress}%
                            </div>
                            <span className="text-md lg:text-lg text-[black]">Overall Completion</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error(error);
        return (
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center">
                <p className="text-sm sm:text-base text-[#8e8e8e]">Please try refreshing the page.</p>
            </div>
        );
    }
};
