import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 relative z-10">
      {/* VIVAR Logo */}
      <a href="/" className="flex flex-col">
        <div className="flex items-center">
          {/* LAB part */}
          <span className="text-white text-6xl font-bold tracking-wider">AI</span>

          {/* O with green circle and checkmark */}
          <div className="relative mx-1">
            <span className="text-white text-6xl font-bold">O</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center transform translate-y-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* RO part */}
          <span className="text-white text-6xl font-bold tracking-wider">NERDS</span>
        </div>

        {/* Tagline */}
        <p className="text-green-500 text-2xl font-medium mt-1">
          JOB
        </p>
      </a>

      {/* Navigation buttons */}
      <div className="flex gap-6 mr-8">
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-white/90 hover:text-white transition-all">Home</a>
          <a href="/upload" className="text-white/90 hover:text-white transition-all">Upload Resume</a>
          <a href="/dashboard" className="text-white/90 hover:text-white transition-all">Dashboard</a>
          <a href="/interview" className="text-white/90 hover:text-white transition-all">Interview Prep</a>
          <a href="/news" className="text-white/90 hover:text-white transition-all">AI News</a>
        </nav>
        <button className="bg-green-500 hover:bg-green-300 text-gray-800 px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-all">
          Sign In
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar