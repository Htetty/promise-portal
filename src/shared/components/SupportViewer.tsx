"use client";

import { useState, useEffect } from "react";
import { supportImages } from "../../app/dashboard/data/Support";

interface SupportViewerProps {
    supportLevel: string | undefined;
}

export const SupportViewer = ({ supportLevel }: SupportViewerProps) => {
    const [showSupportInfo, setShowSupportInfo] = useState(false);
    const [imageError, setImageError] = useState(false);

    const supportIndex = ["High", "Medium", "Low"].indexOf(supportLevel || "");
    const supportImage =
        supportIndex >= 0 && supportIndex < supportImages.length
            ? supportImages[supportIndex]
            : undefined;

    useEffect(() => {
        if (showSupportInfo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [showSupportInfo]);

    return (
        <>
            <button
                onClick={() => setShowSupportInfo(true)}
                className="text-xs sm:text-sm lg:text-md text-[black] underline cursor-pointer hover:text-gray-600 transition-colors"
            >
                What does this mean?
            </button>

            {showSupportInfo && (
                <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-10 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="p-6 flex-shrink-0">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                                    {supportLevel ? `${supportLevel} Support Level` : "Support Level Details"}
                                </h3>
                                <button
                                    onClick={() => setShowSupportInfo(false)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-auto p-6 pt-0">
                            <div className="text-center">
                                {supportImage && !imageError ? (
                                    <img
                                        src={supportImage.src}
                                        alt={supportImage.alt}
                                        className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <img src="/Support/not-found.jpg" alt="Placeholder" className="max-w-full rounded-lg shadow-md mx-auto" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
