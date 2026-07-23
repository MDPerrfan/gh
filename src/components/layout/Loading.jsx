import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Matches the 2.2s progress bar duration + brief hold before exit
    const timer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0810] select-none pointer-events-none"
        >
          <div className="flex flex-col items-center justify-center w-full max-w-xs px-6">
            {/* Minimalist Geometric Emblem */}
            <div className="relative w-16 h-16 flex items-center justify-center mb-10">
              {/* Outer Pulsing Gold Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border border-[#B8893F]"
              />

              {/* Inner Rotating Diamond Motif */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-8 h-8 border border-[#E8D5B0]/50 rotate-45"
              />

              {/* Center Soft Glow */}
              <div className="absolute w-2 h-2 bg-[#E8D5B0] rounded-full shadow-[0_0_12px_#B8893F]" />
            </div>

            {/* Continuous Liquid-Smooth Gold Progress Bar */}
            <div className="w-full h-[2px] bg-[#B8893F]/15 overflow-hidden relative rounded-full">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.2,
                  ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier ease
                }}
                className="h-full bg-gradient-to-r from-[#B8893F] via-[#E8D5B0] to-[#B8893F]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}