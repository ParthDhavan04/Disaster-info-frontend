import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gYellow dark:bg-neoDark py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-neoDark border-4 border-neoBlack dark:border-neoWhite shadow-neo-lg p-8 md:p-12 relative">
          {/* Paper Clip Effect */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-neoBlack dark:bg-gray-700 border-2 border-white transform -rotate-1"></div>

          <h1 className="text-4xl md:text-5xl font-black text-neoBlack dark:text-neoWhite mb-8 border-b-4 border-neoBlack dark:border-neoWhite pb-4">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-neoBlack dark:text-gray-300 leading-relaxed font-medium">
            <section>
              <h2 className="text-2xl font-black text-neoBlack dark:text-white mb-3 uppercase bg-gBlue/20 inline-block px-2">1. Data Collection</h2>
              <p>
                We collect data from public sources including social media platforms, news RSS feeds, and official government disaster warning systems. We do not collect personal private data from our users beyond what is necessary for account creation (email and name).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neoBlack dark:text-white mb-3 uppercase bg-gRed/20 inline-block px-2">2. Use of Information</h2>
              <p>
                The aggregated data is used solely for the purpose of detecting, analyzing, and visualizing potential disaster events. This information is made available to the public and authorized organizations to aid in rapid response efforts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neoBlack dark:text-white mb-3 uppercase bg-gGreen/20 inline-block px-2">3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect user accounts and our infrastructure. All data transmission is encrypted using TLS/SSL protocols.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neoBlack dark:text-white mb-3 uppercase bg-gYellow/20 inline-block px-2">4. Third-Party Sharing</h2>
              <p>
                We do not sell user data to third parties. Anonymized disaster statistics may be shared with research institutions for the purpose of improving disaster response algorithms.
              </p>
            </section>

            <div className="pt-8 border-t-4 border-neoBlack dark:border-neoWhite mt-8">
              <p className="text-sm font-bold text-gray-500 uppercase">
                Last updated: November 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}