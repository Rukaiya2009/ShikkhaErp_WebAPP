"use client";

import { useState } from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Farhana Hoque", position: "CEO", description: "Visionary leader transforming education in Bangladesh through technology.", image: "https://i.pravatar.cc/300?img=1", social: { linkedin: "#", twitter: "#", github: "#" } },
  { name: "Rukaiya Binte Shafique", position: "Founder & Lead Strategist", description: "Former co-founder of Opendoor, early staff at Spotify.", image: "https://i.pravatar.cc/300?img=2", social: { linkedin: "#", twitter: "#", github: "#" } },
  { name: "Md. Kamal Hossain", position: "Lead Developer", description: "Leading engineering teams at Figma, Pitch, and Protocol Labs.", image: "https://i.pravatar.cc/300?img=3", social: { linkedin: "#", twitter: "#", github: "#" } },
  { name: "Sarah Ahmed", position: "Product Manager", description: "Former PM for Linear, Lambda School, and On Deck.", image: "https://i.pravatar.cc/300?img=5", social: { linkedin: "#", twitter: "#", github: "#" } },
];

export default function TeamClient() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary">Meet Our Team</h1>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">The dedicated people behind ShikkhaERP.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative w-full h-[420px] perspective-1000">
            <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d rounded-3xl ${flippedIndex === index ? "rotate-y-180" : ""}`}>
              <div className="absolute inset-0 backface-hidden bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div className="relative h-[200px] w-full"><Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start"><h3 className="text-lg font-heading font-semibold text-secondary">{member.name}</h3><p className="text-primary font-medium text-sm text-right">{member.position}</p></div>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-3">{member.description}</p>
                  <div className="mt-auto pt-3 flex justify-between items-center">
                    <div className="flex gap-2">
                      {/* LinkedIn */}
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      {/* Twitter/X */}
                      <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      {/* GitHub */}
                      <a href={member.social.github} className="text-gray-400 hover:text-primary transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                    <button onClick={() => setFlippedIndex(prev => (prev === index ? null : index))} className="flex items-center gap-1 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> Bio</button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-50 rounded-3xl border border-gray-200 shadow-sm p-6 flex flex-col justify-center">
                <h3 className="text-xl font-heading font-semibold text-secondary mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                <button onClick={() => setFlippedIndex(null)} className="mt-6 self-start text-sm font-medium text-primary hover:underline">← Back to profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
}