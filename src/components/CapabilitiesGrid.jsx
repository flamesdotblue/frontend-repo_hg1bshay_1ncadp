import React from 'react';
import { Rocket, Layers, PenTool, MonitorSmartphone } from 'lucide-react';

const Item = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-base md:text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-white/70">{desc}</p>
  </div>
);

const CapabilitiesGrid = () => {
  const items = [
    {
      icon: PenTool,
      title: 'Brand & Identity',
      desc: 'Naming, visual systems, motion language, and brand guidelines that scale.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Web & Product',
      desc: 'Responsive sites, design systems, and full-stack product design & build.',
    },
    {
      icon: Layers,
      title: '3D & Motion',
      desc: 'Spline, WebGL, and animation to add depth and personality to your story.',
    },
    {
      icon: Rocket,
      title: 'Launch & Growth',
      desc: 'SEO, performance, analytics, and ongoing iteration to drive outcomes.',
    },
  ];

  return (
    <section id="capabilities" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-14 md:py-20">
        <div className="mb-8 md:mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Capabilities</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Modular services to plug into your roadmap. Bring us a problem—leave with a roadmap, prototype, and a path to launch.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
            Get in touch
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Item key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;
