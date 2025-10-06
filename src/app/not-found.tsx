import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] w-full flex flex-col items-center justify-center text-center px-6">
            <p className="text-sm uppercase tracking-widest text-gray-500">Error 404</p>
            <h1 className="mt-2 text-4xl lg:text-6xl font-extrabold text-[#252525]">Page not found</h1>
            <p className="mt-4 max-w-xl text-gray-600">
                The page you’re looking for doesn’t exist or may have been moved.
            </p>

            <div className="mt-8 flex items-center gap-3">
                <Link
                    href="/login"
                    className="border border-[#252525] text-[#252525] px-6 py-3 rounded-lg font-medium hover:bg-[#252525]/5 transition"
                >
                    Back to Login
                </Link>
            </div>
        </div>
    );
}


