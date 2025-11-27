import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neoWhite dark:bg-neoDark py-12 px-6 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gYellow rounded-full border-4 border-neoBlack opacity-50 animate-bounce hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gBlue border-4 border-neoBlack transform rotate-12 opacity-50 hidden md:block"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gGreen border-4 border-neoBlack rounded-full opacity-30 animate-pulse hidden md:block"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white dark:bg-neoDark border-4 border-neoBlack dark:border-neoWhite shadow-neo-lg p-8 md:p-12 transform rotate-1 hover:rotate-0 transition-transform duration-300">

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-neoBlack dark:text-neoWhite mb-4 uppercase tracking-tighter">
              Get In Touch
            </h1>
            <p className="text-lg font-bold text-gray-600 dark:text-gray-300">
              Have questions? Found a bug? Just want to say hi?
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-lg font-black text-neoBlack dark:text-neoWhite uppercase">Name</label>
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-neoBlack dark:border-neoWhite text-neoBlack dark:text-white placeholder-gray-400 outline-none focus:bg-gBlue/10 focus:border-gBlue transition-all font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-black text-neoBlack dark:text-neoWhite uppercase">Email</label>
                <input
                  type="email"
                  placeholder="YOU@EXAMPLE.COM"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-neoBlack dark:border-neoWhite text-neoBlack dark:text-white placeholder-gray-400 outline-none focus:bg-gBlue/10 focus:border-gBlue transition-all font-bold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-lg font-black text-neoBlack dark:text-neoWhite uppercase">Message</label>
              <textarea
                rows="5"
                placeholder="TYPE YOUR MESSAGE HERE..."
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-neoBlack dark:border-neoWhite text-neoBlack dark:text-white placeholder-gray-400 outline-none focus:bg-gBlue/10 focus:border-gBlue shadow-neo transition-all font-bold resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full md:w-auto px-8 py-4 bg-gRed text-white font-black text-xl border-2 border-neoBlack shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all uppercase"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}