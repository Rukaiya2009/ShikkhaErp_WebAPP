'use client';

import { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  { 
    name: "Farhana Hoque", 
    position: "CEO", 
    description: "Visionary leader transforming education in Bangladesh through technology.", 
    image: "https://i.pravatar.cc/300?img=1", 
    skills: ["Leadership", "Strategy"],
    social: { linkedin: "#", twitter: "#", github: "#" } 
  },
  { 
    name: "Rukaiya Binte Shafique", 
    position: "Founder & Lead Strategist", 
    description: "Former co-founder of Opendoor, early staff at Spotify.", 
    image: "https://i.pravatar.cc/300?img=2", 
    skills: ["Product", "Growth"],
    social: { linkedin: "#", twitter: "#", github: "#" } 
  },
  { 
    name: "Md. Kamal Hossain", 
    position: "Lead Developer", 
    description: "Leading engineering teams at Figma, Pitch, and Protocol Labs.", 
    image: "https://i.pravatar.cc/300?img=3", 
    skills: ["Full Stack", "Cloud"],
    social: { linkedin: "#", twitter: "#", github: "#" } 
  },
  { 
    name: "Sarah Ahmed", 
    position: "Product Manager", 
    description: "Former PM for Linear, Lambda School, and On Deck.", 
    image: "https://i.pravatar.cc/300?img=5", 
    skills: ["Product", "Design"],
    social: { linkedin: "#", twitter: "#", github: "#" } 
  },
];

export default function TeamClient() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary">Meet Our Team</h1>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">The dedicated people behind ShikkhaERP.</p>
      </div>
      <div className="mt-16 flex flex-col gap-8">
        {teamMembers.map((member, index) => {
          // Even index = Image on Right, Odd index = Image on Left
          const isEven = index % 2 === 0; 
          
          return (
            <div 
              key={index} 
              className={`bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Text Section (Left for even, Right for odd) */}
              <div className="flex-[2] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-primary">{member.name}</h3>
                      <p className="text-accent text-sm font-medium">{member.position}</p>
                    </div>
                    
                    {/* Skills Badges (Top Right of Text Section) */}
                    <div className="flex gap-2">
                      {member.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mt-4">
                    {member.description}
                  </p>
                </div>
                
                {/* Social Icons (Bottom of Text Section) */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-accent transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-accent transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-accent transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                </div>
              </div>

              {/* Image Section (Right for even, Left for odd) */}
              <div className="flex-[1.5] relative h-[250px] md:h-auto min-h-[200px]">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}