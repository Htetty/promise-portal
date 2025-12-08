"use client";

import { InstagramEmbed } from "react-social-media-embed";

export default function Media() {
    return (
        <div className="bg-[#F5F3EB]/50 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-[black] mb-4 sm:mb-6">Keep Up With Our Latest Posts!</h3>
            <InstagramEmbed url="https://www.instagram.com/skyline.promise" />
        </div>
    );
}