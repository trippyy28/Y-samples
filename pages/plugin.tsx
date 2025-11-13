import React from "react";

const Plugin: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-gray-400">
          New Plugin
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
          Trippy Chords
        </h1>
        <p className="mt-6 text-lg text-gray-200 leading-relaxed">
          A dedicated space for your upcoming chord plugin. Drop in feature
          highlights, audio demos, walkthrough videos, or anything else you want
          visitors to know about Trippy Chords. When you are ready, replace this
          placeholder copy with the real story.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 text-left">
          <div className="rounded-xl border border-zinc-700 p-6 bg-zinc-900/60 backdrop-blur">
            <h2 className="text-xl font-medium">Why producers care</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Use this card to call out the core benefits—faster chord progressions,
              genre-ready presets, MIDI export, or anything else your audience needs
              to hear first.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-700 p-6 bg-zinc-900/60 backdrop-blur">
            <h2 className="text-xl font-medium">What you will ship next</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Outline beta access, waitlist details, launch dates, compatibility,
              or roadmap items so you have a ready-made canvas when you flesh out
              the page later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plugin;
