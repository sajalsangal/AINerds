import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./components/Home";
import ResumeUploadModal from "./components/ResumeUploadModal";
import Dashboard from "./components/Dashboard";
import AiNews from "./components/AINews";

export default function App() {
  return (
    <Router>
      <Navbar />

      {/* Gap so content doesn’t hide under fixed navbar */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload-resume" element={<ResumeUploadModal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-news" element={<AiNews />} />
        </Routes>
      </div>
    </Router>
  );
}
