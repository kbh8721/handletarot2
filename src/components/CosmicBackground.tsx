import { useMotionValue, useSpring, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function CosmicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 bg-midnight overflow-hidden">
      {/* Dynamic Glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none opacity-20"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
        }}
      />

      {/* Static Stars/Dust */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Subtle Nebula Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[100vw] h-[100vh] bg-purple-electric/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[80vw] h-[80vh] bg-indigo-900/10 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
