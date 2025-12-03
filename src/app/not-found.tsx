import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] w-full flex flex-col items-center justify-center text-center px-6">
            <img src="/404.png" alt="404" className="max-w-full max-h-[70vh] object-contain mx-auto" />
            <p className="mt-4 max-w-xl font-bold text-[black]">
                Interesting... why are you here?
            </p>

            <div className="mt-8 flex items-center gap-3">
                <Link
                    href="/login"
                    className="px-6 py-3 rounded-lg font-medium border border-black bg-black text-white hover:bg-neutral-800 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                    Back to Login
                </Link>
            </div>
        </div>
    );
}


