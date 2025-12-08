"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export const triggerConfetti = (elementId?: string) => {
    let origin = { x: 0.5, y: 0.6 };

    if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const rect = element.getBoundingClientRect();
            const x = (rect.left + rect.width / 2) / window.innerWidth;
            const y = (rect.top + rect.height / 2) / window.innerHeight;
            origin = { x, y };
        }
    }

    confetti({
        particleCount: 100,
        spread: 70,
        origin: origin
    });
};

interface ConfettiTriggerProps {
    overallProgress: number;
}

export const ConfettiTrigger = ({ overallProgress }: ConfettiTriggerProps) => {
    useEffect(() => {
        if (overallProgress === 100) {
            setTimeout(() => {
                triggerConfetti("progress-wheel");
            }, 3500);
        }
    }, [overallProgress]);

    return null;
};

export default triggerConfetti;