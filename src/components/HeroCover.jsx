import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[88vh] overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 h-full flex items-end pb-12 md:pb-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Independent Creative Studio
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
            Designing playful, modern interfaces
            <span className="block text-white/80">and digital experiences.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
            We combine technology and storytelling to craft interactive products, brands, and websites that feel alive.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium shadow/20 shadow-black/20 hover:shadow-black/30 transition-shadow"
            >
              Explore capabilities
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition-colors"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
