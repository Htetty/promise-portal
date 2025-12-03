"use client";

import { useFormStatus } from "react-dom";
import { FcGoogle } from "react-icons/fc";

export function SignInButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="group relative w-full bg-gradient-to-r from-[#FDD06E] to-[#FFB84D] text-[black] px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
            aria-disabled={pending}
            disabled={pending}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB84D] to-[#FDD06E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative flex items-center justify-center space-x-2">
                {pending ? (
                    <>
                        <div className="w-5 h-5 border-2 border-[black] border-t-transparent rounded-full animate-spin"></div>
                        <span>Redirecting...</span>
                    </>
                ) : (
                    <>
                        <FcGoogle className="w-5 h-5" />
                        <span>Sign in with School Account</span>
                    </>
                )}
            </div>

        </button>
    );
}
