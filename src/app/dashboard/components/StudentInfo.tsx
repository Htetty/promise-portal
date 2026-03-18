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

import { getUserData } from "../actions";
import { SupportViewer } from "../../shared/components/SupportViewer";
import { PeekingCharacter } from "../../shared/components/Animations";

function normalizeIncentive(incentiveText?: string): string {
  if (!incentiveText) return "N/A";

  const text = incentiveText.toLowerCase();

  if (text.includes("transport")) {
    return "Transportation";
  }

  if (text.includes("meal")) {
    return "Meal";
  }

  return "N/A";
}

function cutApptTime(future_appt?: string): string {
  if (!future_appt) return "No appointment(s) scheduled yet";

  const date = new Date(future_appt);

  if (isNaN(date.getTime())) return "Invalid date";

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  });

  return `${formattedDate} @ ${formattedTime}`;
}

export const StudentInfo = async () => {
  try {
    const userData = await getUserData();

    return (
      <div className="bg-[#F5F3EB] rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* character image */}
        <PeekingCharacter />

        <div className="mb-2 sm:mb-3">
          {/* Student Info */}
          <div>
            <p className="text-xl font-bold mb-1 uppercase tracking-wide">
              Welcome back!
            </p>
            <h2 className="text-xl lg:text-2xl font-bold text-[black] mb-2 leading-tight">
              {userData?.first_name || "Student"} {userData?.last_name || ""}
            </h2>
            <p className="text-sm text-[black]">
              <span>Student ID: </span>
              <span className="font-bold">{userData?.g_number || "N/A"}</span>
            </p>
          </div>
        </div>
        {/* Counselor Information */}
        <div className="mb-2 sm:mb-3">
          <p className="text-sm lg:text-md text-[#8e8e8e] mb-2">
            Assigned Counselor:
          </p>
          <p className="text-lg font-bold text-[black]">
            {userData?.counselor ||
              "If you don't see your counselor, please contact us!"}
          </p>
        </div>

        {/* Future Appt */}
        <div className="mb-2 sm:mb-3">
          <p className="text-sm lg:text-md text-[#8e8e8e] mb-2">
            Upcoming appointment(s):
          </p>
          <p className="text-lg font-bold text-[black]">
            {cutApptTime(userData?.future_appt)}
          </p>
        </div>

        {/* Support and Incentive */}
        <div className="flex flex-col sm:flex-wrap items-start gap-3 sm:gap-4 gap-y-5">
          {/* Support Level */}
          <div className="flex gap-x-2">
            <span className="bg-[#FDD06E] text-[black] px-2 sm:px-3 py-1 rounded-full text-lg font-semibold">
              {userData?.support_level || "N/A"} Support
            </span>
            <SupportViewer supportLevel={userData?.support_level} />
          </div>

          {/* Incentive Choice */}
          <div className="flex flex-row sm:flex-row sm:flex-wrap gap-3 sm:gap-4 gap-y-5">
            <span className="text-lg text-[black]">Incentive Choice:</span>
            <span className="bg-gray-200 text-[black] px-2 sm:px-3 lg:px-4 py-1 rounded-full text-lg font-semibold">
              {normalizeIncentive(userData?.incentive_choice)}
            </span>
          </div>

          <p className="text-xs lg:text-sm text-[#8e8e8e]">
            *Data updates at the start of each week*
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center">
        <p className="text-sm sm:text-sm text-[#8e8e8e]">
          Please try logging out and logging back in!
        </p>
      </div>
    );
  }
};
