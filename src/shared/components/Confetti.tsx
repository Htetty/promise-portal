"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export const triggerConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};

interface ConfettiTriggerProps {
    overallProgress: number;
}

export const ConfettiTrigger = ({ overallProgress }: ConfettiTriggerProps) => {
    useEffect(() => {
        if (overallProgress === 100) {
            setTimeout(() => {
                triggerConfetti();
            }, 3500);
        }
    }, [overallProgress]);

    return null;
};

export default triggerConfetti;