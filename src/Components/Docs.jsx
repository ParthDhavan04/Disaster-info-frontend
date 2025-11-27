import React from "react";

export default function Docs() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neoWhite dark:bg-neoDark flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white dark:bg-neoDark border-b-4 md:border-b-0 md:border-r-4 border-neoBlack dark:border-neoWhite sticky top-20 h-auto md:h-[calc(100vh-80px)] overflow-y-auto z-10">
        <div className="p-6">
          <h3 className="text-xl font-black text-neoBlack dark:text-neoWhite uppercase mb-6 border-b-4 border-gYellow inline-block">
            Contents
          </h3>
          <nav className="space-y-2">
            {['Architecture', 'API Reference', 'Tech Stack'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left px-4 py-2 font-bold text-neoBlack dark:text-neoWhite border-2 border-transparent hover:border-neoBlack hover:bg-gYellow hover:shadow-neo-sm transition-all"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 max-w-5xl mx-auto">

        {/* Architecture Section */}
        <section id="architecture" className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-neoBlack dark:text-neoWhite mb-8">
            <span className="border-b-8 border-gBlue">System Architecture</span>
          </h1>

          <div className="bg-white dark:bg-gray-800 border-4 border-neoBlack dark:border-neoWhite shadow-neo p-8 mb-8">
            <p className="text-lg font-medium text-neoBlack dark:text-white leading-relaxed mb-6">
              The DisasterWatch system operates on a high-performance microservices architecture designed for speed and reliability.
            </p>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 border-2 border-neoBlack">
                <span className="font-black text-gRed mr-4">01.</span>
                <span className="font-bold text-neoBlack dark:text-white">Python Scraper</span>
                <span className="mx-4 text-gray-400">→</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Collects raw data from Google RSS & Social Media</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 border-2 border-neoBlack">
                <span className="font-black text-gYellow mr-4">02.</span>
                <span className="font-bold text-neoBlack dark:text-white">Flask ML Engine</span>
                <span className="mx-4 text-gray-400">→</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">BERT/RoBERTa models classify severity & type</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 border-2 border-neoBlack">
                <span className="font-black text-gGreen mr-4">03.</span>
                <span className="font-bold text-neoBlack dark:text-white">MongoDB</span>
                <span className="mx-4 text-gray-400">→</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Stores GeoJSON data for spatial queries</span>
              </div>
              <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 border-2 border-neoBlack">
                <span className="font-black text-gBlue mr-4">04.</span>
                <span className="font-bold text-neoBlack dark:text-white">Node.js Backend</span>
                <span className="mx-4 text-gray-400">→</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Serves API & Real-time Socket.io events</span>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference Section */}
        <section id="api-reference" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-neoBlack dark:text-neoWhite mb-8">
            <span className="border-b-8 border-gRed">API Reference</span>
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-neoBlack dark:text-white mb-4 flex items-center">
              <span className="bg-gBlue text-white px-2 py-1 text-sm border-2 border-neoBlack shadow-neo-sm mr-3">POST</span>
              /ml/predict
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Submit raw text for disaster classification and severity analysis.
            </p>

            <div className="bg-neoBlack border-4 border-neoBlack shadow-neo p-6 overflow-x-auto">
              <pre className="font-mono text-sm">
                <code className="text-gGreen">
                  {`// Request Body
{
  "text": "Massive flooding reported in downtown Mumbai after heavy rains.",
  "source": "twitter"
}

// Response
{
  "disaster_type": "Flood",
  "severity": "High",
  "confidence": 0.98,
  "location": {
    "lat": 19.0760,
    "lon": 72.8777
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-neoBlack dark:text-neoWhite mb-8">
            <span className="border-b-8 border-gGreen">Tech Stack</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Socket.io', 'Python', 'Flask', 'MongoDB', 'Leaflet', 'BERT'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 font-bold text-neoBlack bg-white border-2 border-neoBlack shadow-neo hover:-translate-y-1 transition-transform cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}