"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const PeekingCharacter = () => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="absolute top-4 right-0 sm:top-6 lg:top-8 w-35 h-35 sm:w-50 sm:h-50 lg:w-45 lg:h-45 overflow-hidden z-10">
            <motion.img
                src="/dashboard/1.png"
                className="w-full h-full object-contain object-right"
                alt="Character"
                initial={{ x: "100%" }}
                animate={
                    animationComplete
                        ?
                        isHovered
                            ? { x: "0%" } // Hovered: slide out fully
                            : { x: "15%" } // Not hovered: stay at 15% (peeking)
                        :
                        {
                            x: ["100%", "0%", "0%", "15%"],
                        }
                }
                transition={{
                    delay: animationComplete ? 0 : 3.3, // wai for splash screen
                    duration: animationComplete ? 0.4 : 5,
                    times: animationComplete ? undefined : [0, 0.2, 0.6, 1],
                    ease: "easeInOut",
                    onComplete: () => {
                        if (!animationComplete) {
                            setAnimationComplete(true);
                        }
                    },
                }}
            />
            {animationComplete && (
                <div
                    className="absolute top-0 bottom-0 right-0 w-[25%] cursor-pointer" // invisible hover zone to catch hover near the character
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            )}
        </div>
    );
};

