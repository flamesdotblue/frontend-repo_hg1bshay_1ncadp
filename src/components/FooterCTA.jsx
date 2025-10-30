import React from 'react';

const FooterCTA = () => {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-12 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Have a challenge in mind?
              </h3>
              <p className="mt-3 text-white/80">
                We’d love to hear about your product, brand, or idea. Let’s design something delightful together.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="mailto:hello@studio.example"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium shadow/20 shadow-black/20 hover:shadow-black/30 transition-shadow"
              >
                hello@studio.example
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Independent Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white">Terms</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
