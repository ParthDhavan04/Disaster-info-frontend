import React from "react";

export default function About() {
  const team = [
    { name: "Parth Dhavan", role: "Lead & Full Stack", color: "gBlue" },
    { name: "Anshika Srivastava", role: "Frontend & Design", color: "gRed" },
    { name: "Sairanjan Subudhi", role: "Backend Developer", color: "gGreen" },
    { name: "Rushil Alagh", role: "Research Analyst", color: "gYellow" }
  ];

  return (
    <div className="min-h-screen bg-neoWhite dark:bg-neoDark py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Section 1: The Mission Box */}
        <section className="bg-gYellow border-4 border-neoBlack shadow-neo-lg p-8 md:p-12 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <h1 className="text-4xl md:text-6xl font-black text-neoBlack mb-6 uppercase tracking-tighter">
            Mission: Critical
          </h1>
          <div className="space-y-4 text-xl md:text-2xl font-bold text-neoBlack leading-tight">
            <p>
              Disasters don't wait. Neither do we.
            </p>
            <p>
              We aggregate <span className="bg-white px-2 border-2 border-neoBlack">real-time data</span> from news and social media, process it with <span className="bg-white px-2 border-2 border-neoBlack">advanced AI</span>, and deliver actionable intelligence to save lives.
            </p>
          </div>
        </section>

        {/* Section 2: The Team (Trading Cards) */}
        <section>
          <div className="flex items-center mb-10">
            <h2 className="text-4xl font-black text-neoBlack dark:text-neoWhite uppercase mr-4">The Squad</h2>
            <div className="flex-1 h-4 bg-neoBlack dark:bg-neoWhite"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border-4 border-neoBlack shadow-neo hover:shadow-neo-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Color Strip */}
                <div className={`h-6 w-full bg-${member.color} border-b-4 border-neoBlack`}></div>

                <div className="p-8 flex items-center space-x-6">
                  <div className={`w-20 h-20 bg-${member.color} border-4 border-neoBlack flex items-center justify-center shadow-neo-sm group-hover:rotate-12 transition-transform`}>
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-neoBlack uppercase tracking-tight">{member.name}</h3>
                    <p className="text-lg font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 inline-block mt-2 border-2 border-transparent group-hover:border-neoBlack transition-colors">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Mentorship */}
        <section className="flex justify-center">
          <div className="bg-white dark:bg-neoDark border-4 border-neoBlack dark:border-neoWhite shadow-neo p-8 max-w-2xl w-full text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-neoBlack text-white px-4 py-1 font-bold uppercase border-2 border-white shadow-neo-sm">
              Mentorship
            </div>
            <h3 className="text-2xl font-black text-neoBlack dark:text-neoWhite mt-2">Dr. Arjun Arora</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mt-2">
              School of Computer Science, UPES
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="w-3 h-3 bg-gBlue rounded-full border-2 border-neoBlack"></span>
              <span className="w-3 h-3 bg-gRed rounded-full border-2 border-neoBlack"></span>
              <span className="w-3 h-3 bg-gYellow rounded-full border-2 border-neoBlack"></span>
              <span className="w-3 h-3 bg-gGreen rounded-full border-2 border-neoBlack"></span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}