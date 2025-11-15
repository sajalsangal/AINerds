import React, { useState, useEffect, useRef } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('job-fetch')
  const [apiKey, setApiKey] = useState('')
  const [fulltime, setFulltime] = useState('Fulltime')
  const [experience, setExperience] = useState('No_experience')
  const [timeframe, setTimeframe] = useState('Today')


  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      // Simulate file processing

    }
  }
  // Set page title
  useEffect(() => {
    document.title = 'Dashboard - AI NERDS'
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Left Sidebar - Purple Background */}
      <div className={`bg-[#c9a8f5] text-white flex flex-col transition-all duration-500 ease-in-out relative w-72 overflow-hidden`}>
        {/* User Profile Section */}
        <div className="p-6 border-b border-purple-400">
          <div className="flex items-center gap-4 group cursor-pointer hover:bg-purple-300 hover:bg-opacity-30 p-2 rounded-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 animate-pulse">
              G
            </div>
            <div>
              <h3 className="text-lg font-bold group-hover:text-white transition-colors">Guest</h3>
              <p className="text-sm text-purple-200 group-hover:text-white transition-colors">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6">
          {/* Job Fetch - Active */}
          <button
            onClick={() => setActiveTab('job-fetch')}
            className={`group w-full px-6 py-4 flex items-center gap-3 transition-all duration-300 relative ${activeTab === 'job-fetch'
                ? 'bg-pink-400 text-white shadow-lg scale-105'
                : 'text-white hover:bg-purple-300 hover:pl-8 hover:shadow-md'
              }`}
          >
            {activeTab === 'job-fetch' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
            )}
            <svg className={`w-6 h-6 transition-transform duration-300 ${activeTab === 'job-fetch' ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span className="text-lg font-semibold">Job Fetch</span>
          </button>

          {/* ATS Review */}
          <button
            onClick={() => setActiveTab('ats-review')}
            className={`group w-full px-6 py-4 flex items-center gap-3 transition-all duration-300 relative ${activeTab === 'ats-review'
                ? 'bg-pink-400 text-white shadow-lg scale-105'
                : 'text-white hover:bg-purple-300 hover:pl-8 hover:shadow-md'
              }`}
          >
            {activeTab === 'ats-review' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
            )}
            <svg className={`w-6 h-6 transition-transform duration-300 ${activeTab === 'ats-review' ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            <span className="text-lg font-semibold">ATS Review</span>
          </button>

          {/* AI Mock Quiz */}
          <button
            onClick={() => setActiveTab('mock-quiz')}
            className={`group w-full px-6 py-4 flex items-center gap-3 transition-all duration-300 relative ${activeTab === 'mock-quiz'
                ? 'bg-pink-400 text-white shadow-lg scale-105'
                : 'text-white hover:bg-purple-300 hover:pl-8 hover:shadow-md'
              }`}
          >
            {activeTab === 'mock-quiz' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
            )}
            <svg className={`w-6 h-6 transition-transform duration-300 ${activeTab === 'mock-quiz' ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />
            </svg>
            <span className="text-lg font-semibold">Mock Quiz (J.D)</span>
          </button>

          {/* AI HR Interview */}
          <button
            onClick={() => setActiveTab('hr-interview')}
            className={`group w-full px-6 py-4 flex items-center gap-3 transition-all duration-300 relative ${activeTab === 'hr-interview'
                ? 'bg-pink-400 text-white shadow-lg scale-105'
                : 'text-white hover:bg-purple-300 hover:pl-8 hover:shadow-md'
              }`}
          >
            {activeTab === 'hr-interview' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
            )}
            <svg className={`w-6 h-6 transition-transform duration-300 ${activeTab === 'hr-interview' ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2A3 3 0 0 1 15 5v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5 5 5 0 0 0 5-5h2z" />
            </svg>
            <span className="text-lg font-semibold">AI HR Interview</span>
          </button>
        </nav>
      </div>

      <div className='flex flex-col flex-1 p-10 gap-10'>
        {/* API Key Input and Upload Button with Animation */}
        <div className={`flex gap-4 mb-0 opacity-100 translate-y-0`} style={{ transitionDelay: '300ms' }}>
          <input
            type="password"
            placeholder="Enter your Gemini API Key..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-[#e85d75] focus:shadow-lg focus:scale-[1.02] transition-all duration-300 hover:border-[#e85d75]/50"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className={`text-white px-10 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${selectedFile ? 'bg-green-500 hover:bg-green-600' : 'bg-[#e85d75] hover:bg-[#d94967]'
              }`}
          >
            {selectedFile ? '✓ File Selected' : 'Upload Your Resume'}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {/* Info Text with Animation */}
          <p className={`text-sm text-gray-600  `}>
            Create your own Gemini API key from <a href = "https://aistudio.google.com/api-keys" target ="_blank" className="font-semibold underline text-green-500 hover:text-[#e85d75] transition-colors duration-300">Google AI Studio</a>. <a href="#" className=" font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300">Watch Video</a> to learn more.
          </p>

        {/* Main Content Area */}
        <div className={`flex-1 p-0 transition-all duration-500 ml-0`}>
          {/* Conditional Content Based on Active Tab */}
          {activeTab === 'ats-review' ? (
            <ATSReviewContent />
          ) : activeTab === 'mock-quiz' ? (
            <AIMockQuizContent />
          ) : activeTab === 'hr-interview' ? (
            <AIHRInterviewContent />
          ) : (
            <>


              {/* Search Section */}
              <div className="bg-gray-800 rounded-2xl p-5 mb-8">
                
                <p className="text-lg text-gray-100 mt-1 mb-1">
                    Select filters for better results.
                </p>

                {/* Filter Dropdowns and Search Button */}
                <div className="flex gap-4 items-center">
                  {/* Fulltime Dropdown */}
                  <select
                    value={fulltime}
                    onChange={(e) => setFulltime(e.target.value)}
                    className="px-6 py-3 bg-gray-700 text-white rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
                  >
                    <option value="Fulltime">Fulltime</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>

                  {/* Timeframe Dropdown */}
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="px-6 py-3 bg-gray-700 text-white rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
                  >
                    <option value="Today">Today</option>
                    <option value="This Week">This Week</option>
                    <option value="This Month">This Month</option>
                    <option value="All Time">All Time</option>
                  </select>

                  {/* Experience Dropdown */}
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="px-6 py-3 bg-gray-700 text-white rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
                  >
                    <option value="No_experience">No_experience</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                  </select>

                  {/* Search Button */}
                  <button className="px-10 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg text-lg font-bold hover:from-pink-500 hover:to-pink-600 transition-all flex items-center gap-2 ml-auto">
                    SEARCH
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Job Cards Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Job Card 1 */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
                  <h3 className="text-2xl font-bold text-black mb-2">Job Role Title</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Company Name</h4>
                  <p className="text-sm text-gray-600 mb-4">Bengaluru, In</p>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    This company specializes in abcd products, providing great benefits to their employees and growing at a massive scale.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Read More</p>
                      <p className="text-xs text-gray-500">Full Time · 2025-11-10</p>
                    </div>
                    <button className="group px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-bold hover:from-pink-500 hover:to-pink-600 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                      Apply Now
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Job Card 2 */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                  <h3 className="text-2xl font-bold text-black mb-2">Job Role Title</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Company Name</h4>
                  <p className="text-sm text-gray-600 mb-4">Bengaluru, In</p>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    This company specializes in abcd products, providing great benefits to their employees and growing at a massive scale.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Read More</p>
                      <p className="text-xs text-gray-500">Full Time · 2025-11-10</p>
                    </div>
                    <button className="group px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-bold hover:from-pink-500 hover:to-pink-600 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                      Apply Now
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Job Card 3 */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
                  <h3 className="text-2xl font-bold text-black mb-2">Job Role Title</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Company Name</h4>
                  <p className="text-sm text-gray-600 mb-4">Bengaluru, In</p>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    This company specializes in abcd products, providing great benefits to their employees and growing at a massive scale.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Read More</p>
                      <p className="text-xs text-gray-500">Full Time · 2025-11-10</p>
                    </div>
                    <button className="group px-6 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                      Apply Now
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Job Card 4 */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                  <h3 className="text-2xl font-bold text-black mb-2">Job Role Title</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Company Name</h4>
                  <p className="text-sm text-gray-600 mb-4">Bengaluru, In</p>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    This company specializes in abcd products, providing great benefits to their employees and growing at a massive scale.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Read More</p>
                      <p className="text-xs text-gray-500">Full Time · 2025-11-10</p>
                    </div>
                    <button className="group px-6 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                      Apply Now
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ATS Review Content Component
const ATSReviewContent = () => {
  const [apiKey, setApiKey] = useState('')
  const [resumeContent, setResumeContent] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const fileInputRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      // Simulate file processing
      setAnalysisProgress(0)
      const interval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 20
        })
      }, 200)

      // Read file content
      const reader = new FileReader()
      reader.onload = (event) => {
        setResumeContent(event.target.result)
      }
      reader.readAsText(file)
    }
  }

  const handleAnalyze = () => {
    if (!apiKey) {
      alert('Please enter your Gemini API Key')
      return
    }
    if (!resumeContent) {
      alert('Please upload your resume first')
      return
    }

    setIsAnalyzing(true)
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false)
      alert('Analysis complete! Your ATS score is 85/100')
    }, 3000)
  }

  return (
    <div className="max-w-5xl mx-auto">

      {/* Resume Content Box with Enhanced Animation */}
      <div className={`bg-white border-4 border-[#4db8e8] rounded-2xl p-8 mb-8 min-h-[400px] shadow-lg hover:shadow-xl transition-all duration-500 ${selectedFile ? 'border-green-400 shadow-green-100' : 'hover:border-[#4db8e8]/80'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
        <div className="flex items-start gap-3 mb-6">
          <svg className={`w-6 h-6 flex-shrink-0 mt-1 transition-all duration-300 ${selectedFile ? 'text-green-500' : 'text-gray-400 hover:text-[#4db8e8]'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <div className="flex-1">
            {resumeContent ? (
              <div className="text-gray-700 whitespace-pre-wrap animate-fadeInUp">{resumeContent}</div>
            ) : (
              <>
                {selectedFile && analysisProgress < 100 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Processing file...</span>
                      <span>{analysisProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${analysisProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                <div className="text-gray-500">
                  <p className="mb-2 hover:text-gray-600 transition-colors duration-300">AI will scan your resume to evaluate:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="hover:text-gray-600 transition-colors duration-300 cursor-default">ATS Compatibility</li>
                    <li className="hover:text-gray-600 transition-colors duration-300 cursor-default">Keyword Strength</li>
                    <li className="hover:text-gray-600 transition-colors duration-300 cursor-default">Experience Highlights</li>
                    <li className="hover:text-gray-600 transition-colors duration-300 cursor-default">Skills Relevance</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Analyze Button with Enhanced Effects */}
      <div className={`flex justify-end transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className={`text-white px-12 py-4 rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isAnalyzing
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#e85d75] hover:bg-[#d94967]'
            }`}
        >
          {isAnalyzing ? (
            <div className="flex items-center gap-3">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </div>
          ) : (
            'Analyze Resume'
          )}
        </button>
      </div>
    </div>
  )
}

// AI Mock Quiz Content Component
const AIMockQuizContent = () => {
  const [jobDescription, setJobDescription] = useState('')

  const handleGenerateQuestions = () => {
    if (!jobDescription.trim()) {
      alert('Please enter a job description and desired skills')
      return
    }
    alert('Generating AI-powered interview questions...')
  }

  return (
    <div className="max-w-4xl mx-auto">

      {/* Input Box */}
      <div className="bg-gray-100 rounded-2xl p-12 mb-8 shadow-lg">
        <div>
        Enter Your Job Description To Generate Quiz Questions.
      </div>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Enter here..."
          className="w-full h-64 px-6 py-4 bg-white border-2 border-gray-300 rounded-xl text-lg resize-none focus:outline-none focus:border-[#e85d75] transition-colors"
        />
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerateQuestions}
          className="bg-[#e85d75] hover:bg-[#d94967] text-white px-16 py-5 rounded-lg text-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Generate Questions
        </button>
      </div>
    </div>
  )
}

// AI HR Interview Content Component
const AIHRInterviewContent = () => {
  const [interviewType, setInterviewType] = useState('Technical Interview')
  const [currentQuestion, setCurrentQuestion] = useState('Tell me about the tools you can use for EDA.')
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('Transcript appears here....')
  const [feedback, setFeedback] = useState('')

  const handleGenerateQuestion = () => {
    const questions = [
      'Tell me about the tools you can use for EDA.',
      'Explain your experience with data visualization.',
      'How do you handle missing data in datasets?',
      'Describe a challenging project you worked on.',
      'What is your approach to problem-solving?'
    ]
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    setCurrentQuestion(randomQuestion)
    setTranscript('Transcript appears here....')
    setFeedback('')
  }

  const handleSpeak = () => {
    setIsRecording(true)
    // Simulate recording
    setTimeout(() => {
      setTranscript('This is a sample transcript of your answer. In a real implementation, this would capture your actual speech.')
    }, 2000)
  }

  const handleStop = () => {
    setIsRecording(false)
  }

  const handleGetFeedback = () => {
    if (transcript === 'Transcript appears here....') {
      alert('Please record your answer first')
      return
    }
    setFeedback('Great answer! Your response was clear and well-structured. Consider adding more specific examples to strengthen your points.')
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-10 h-10 text-[#8b7dd8]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2A3 3 0 0 1 15 5v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5 5 5 0 0 0 5-5h2z" />
          </svg>
          <h1 className="text-4xl font-black text-black tracking-tight">
            Communication Practice (Gemini)
          </h1>
        </div>
        <p className="text-lg text-[#e85d75] italic font-bold">
          "For smooth practice, open this page in Chrome and ensure your microphone is ready. Speak in a steady rhythm for the best analysis."
        </p>
      </div>

      {/* Main Content Box with Dashed Border */}
      <div className="bg-white border-4 border-dashed border-gray-400 rounded-3xl p-12 shadow-lg">
        {/* Interview Type Selector */}
        <div className="flex items-center gap-4 mb-8">
          <label className="text-lg font-bold text-black">Interview Type :</label>
          <select
            value={interviewType}
            onChange={(e) => setInterviewType(e.target.value)}
            className="px-6 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#8b7dd8] transition-colors bg-white"
          >
            <option value="Technical Interview">Technical Interview</option>
            <option value="Behavioral Interview">Behavioral Interview</option>
            <option value="HR Interview">HR Interview</option>
            <option value="Case Study">Case Study</option>
          </select>
        </div>

        {/* Generate Question Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleGenerateQuestion}
            className="bg-[#e85d75] hover:bg-[#d94967] text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Generate Question
          </button>
        </div>

        {/* Question Display Box */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 shadow-inner">
          <p className="text-base font-bold text-black mb-3">Question :</p>
          <p className="text-base text-gray-800 leading-relaxed">{currentQuestion}</p>
        </div>

        {/* Speak and Stop Buttons */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={handleSpeak}
            disabled={isRecording}
            className={`flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-300 ${isRecording
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#22c55e] hover:bg-[#16a34a] text-white hover:scale-105'
              }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2A3 3 0 0 1 15 5v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" />
            </svg>
            Speak
          </button>
          <button
            onClick={handleStop}
            disabled={!isRecording}
            className={`flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-300 ${!isRecording
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#ef4444] hover:bg-[#dc2626] text-white hover:scale-105'
              }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="6" width="12" height="12" rx="2" />
            </svg>
            Stop
          </button>
        </div>

        {/* Transcript Area */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 shadow-inner min-h-[120px]">
          <p className="text-base text-gray-600 leading-relaxed">{transcript}</p>
        </div>

        {/* Get Feedback Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleGetFeedback}
            className="bg-[#8b7dd8] hover:bg-[#7a6bc7] text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
            </svg>
            Get Feedback
          </button>
        </div>

        {/* Feedback Display */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-inner min-h-[100px]">
          <p className="text-base font-bold text-black mb-3">Feedback :</p>
          {feedback ? (
            <p className="text-base text-gray-800 leading-relaxed">{feedback}</p>
          ) : (
            <p className="text-base text-gray-500 italic">Feedback will appear here after analysis...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard