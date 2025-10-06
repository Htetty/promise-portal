'use client';

import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';

export interface ImageItem {
    src: string;
    description: string;
}

interface CarouselProps {
    imageData: ImageItem[];
    interval?: number;
}

export const Carousel = ({ imageData, interval = 5000 }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [shouldType, setShouldType] = useState(false);
    const [hasTyped, setHasTyped] = useState(new Set<string>());

    // autoplay
    useEffect(() => {
        if (imageData.length <= 1 || isPaused) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imageData.length);
            setShouldType(false); // reset typing for the next image
        }, interval);

        return () => clearInterval(timer);
    }, [imageData.length, isPaused, interval]);

    useEffect(() => {
        if (currentIndex >= imageData.length) {
            setCurrentIndex(0);
            setShouldType(false);
        }
    }, [imageData.length, currentIndex]);

    if (imageData.length === 0) {
        return (
            <div className="relative w-full h-full flex items-center justify-center rounded-2xl bg-muted">
                <p className="text-muted-foreground">No images to display</p>
            </div>
        );
    }

    const currentImage = imageData[currentIndex];
    const alreadyTyped = hasTyped.has(currentImage.src);

    return (
        <div
            className="relative w-full h-full overflow-hidden rounded-2xl hover:ring-6 hover:ring-[#FDD06E] transition-all duration-300"
            onMouseEnter={() => {
                setIsPaused(true);
                if (!alreadyTyped) setShouldType(true); // start typing fresh when user hovers
            }}
            onMouseLeave={() => {
                setIsPaused(false);
                setShouldType(false); // stop typing animation when leaving
            }}
        >
            {/* images */}
            {imageData.map((item, index) => (
                <img
                    key={`${item.src}-${index}`}
                    src={item.src}
                    alt={item.description}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {/* caption */}
            {currentImage?.description && (
                <div
                    className={`absolute bottom-0 left-0 right-0 flex justify-center mb-4 transition-opacity duration-300 ${isPaused ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="max-w-[85%] bg-black/40 rounded-lg px-4 py-2 text-white text-center">
                        {shouldType ? (
                            <ReactTyped
                                key={currentIndex} // restart typing per image
                                strings={[currentImage.description]}
                                typeSpeed={40}
                                showCursor={false}
                                className="font-semibold text-xs md:text-base"
                                onComplete={() => {
                                    setHasTyped((prev) => new Set(prev).add(currentImage.src));
                                }}
                            />
                        ) : (
                            <p className="font-semibold text-sm md:text-base">{currentImage.description}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
