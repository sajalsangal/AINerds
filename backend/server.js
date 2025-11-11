// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));

const PORT = process.env.PORT || 5000;
const GEMINI_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite';

if (!GEMINI_KEY) {
  console.warn("⚠️  No GEMINI_API_KEY set in .env");
}

// POST /extract-skills
// body: { text: "<resume text>" }
app.post('/extract-skills', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || !text.trim()) return res.status(400).json({ error: 'No text provided' });

    // Build a prompt instructing the model to return JSON array of skills
    const prompt = `
You are a resume parser. Extract the candidate's technical and professional skills from the resume text below.
Return output ONLY as a JSON array of strings, for example:
["Python", "SQL", "React", "Machine Learning"]

Resume text:
"""${text}"""
`;

    // Call Gemini REST generateContent endpoint (model-specific)
    const url = `https://generativelanguage.googleapis.com/v1/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_KEY}`;

    // The request shape below follows the generic "contents" approach.
    // If Google returns a slightly different shape, we try to read from candidates.
    const body = {
      contents: [
        {
          // content parts: plain text instructions
          parts: [{ text: prompt }]
        }
      ],
      // optional: request candidate_count, safety settings etc. (keep minimal)
      candidate_count: 1
    };

    const geminiResp = await axios.post(url, body, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 30000
    });

    // Safely extract model text output from response
    const raw = geminiResp?.data;
    let outputText = '';

    // Common shape: data.candidates[0].content.parts[0].text
    if (raw?.candidates && raw.candidates.length > 0) {
      try {
        outputText = raw.candidates[0].content.parts.map(p => p.text).join('\n');
      } catch (e) {
        outputText = JSON.stringify(raw);
      }
    } else if (raw?.outputs && raw.outputs.length > 0) {
      // alternative shapes
      try {
        outputText = raw.outputs[0].content?.[0]?.text || JSON.stringify(raw.outputs[0]);
      } catch {
        outputText = JSON.stringify(raw.outputs[0]);
      }
    } else {
      outputText = JSON.stringify(raw);
    }

    // Try parse JSON array
    let skills = [];
    try {
      const parsed = JSON.parse(outputText);
      // Expecting array
      if (Array.isArray(parsed)) skills = parsed.map(s => String(s).trim()).filter(Boolean);
      else {
        // If JSON object with key "skills"
        if (parsed?.skills && Array.isArray(parsed.skills)) {
          skills = parsed.skills.map(s => String(s).trim()).filter(Boolean);
        } else {
          // fallback: treat parsed as string, split by newline/commas
          skills = String(outputText).split(/,|\n/).map(s => s.replace(/[\[\]"']/g, '').trim()).filter(Boolean);
        }
      }
    } catch (err) {
      // Not strict JSON — split by newline or commas
      skills = String(outputText).split(/,|\n/).map(s => s.replace(/[\[\]"']/g, '').trim()).filter(Boolean);
    }

    // Deduplicate
    skills = [...new Set(skills)];

    return res.json({ success: true, skills, raw: outputText });
  } catch (err) {
    console.error('Error in /extract-skills:', err?.response?.data || err.message || err);
    return res.status(500).json({ error: 'Failed to extract skills', details: err?.message || String(err) });
  }
});

app.get('/', (req, res) => res.send('Resume AI backend running'));

app.listen(PORT, () => {
  console.log(`✅ Backend running: http://localhost:${PORT}`);
});
