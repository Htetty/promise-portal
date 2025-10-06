'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function Loading() {
    const [hidden, setHidden] = useState(false);

    if (hidden) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.8, duration: 0.5, ease: 'easeOut' }}
            onAnimationComplete={() => setHidden(true)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white pointer-events-none"
        >
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex flex-col items-center gap-4"
            >
                <h1 className="text-lg lg:text-3xl text-[#252525]">
                    we've got
                    <span className="font-extrabold"> your</span>
                    <span className="font-extrabold"> back.</span>
                </h1>
                <img src="/loader.gif" alt="Loading..." className="w-16 h-16" />
            </motion.div>
        </motion.div>
    );
}