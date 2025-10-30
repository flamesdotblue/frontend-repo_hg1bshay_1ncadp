import React from 'react';

const Stat = ({ value, label }) => (
  <div className="text-left">
    <div className="text-3xl md:text-4xl font-semibold text-white">{value}</div>
    <div className="mt-1 text-sm text-white/70">{label}</div>
  </div>
);

const StudioOverview = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
              A small team with big energy
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl">
              We’re a multidisciplinary studio building interactive experiences—from brand and motion to web and product. Our process is collaborative, transparent, and geared toward shipping work that delights.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <Stat value="50+" label="Projects shipped" />
              <Stat value="12" label="Industries served" />
              <Stat value="5★" label="Client satisfaction" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-medium">What we value</h3>
              <ul className="mt-4 space-y-4 text-sm text-white/80 list-disc list-inside">
                <li>Playfulness that invites interaction</li>
                <li>Systems thinking for long-term scalability</li>
                <li>Accessibility and inclusive design</li>
                <li>Clean, maintainable code and handoff</li>
              </ul>
              <p className="mt-6 text-sm text-white/70">
                From concept to launch, we embed with your team and deliver measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioOverview;
