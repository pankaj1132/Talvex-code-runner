import { generateAiText } from "../lib/ai.js";

function buildProblemContext({ problemTitle, problemDescription, constraints, examples }) {
  let text = "";

  if (problemTitle) text += `Title: ${problemTitle}\n`;
  if (problemDescription) text += `Description: ${problemDescription}\n`;
  if (constraints && constraints.length) {
    text += "Constraints:\n";
    for (const c of constraints) text += `- ${c}\n`;
  }
  if (examples && examples.length) {
    text += "Examples:\n";
    for (const ex of examples) {
      text += `Input: ${ex.input}\nOutput: ${ex.output}\n`;
      if (ex.explanation) text += `Explanation: ${ex.explanation}\n`;
    }
  }

  return text.trim();
}

export async function getHint(req, res) {
  try {
    // AI temporarily disabled (Gemini quota / billing not configured).
    return res.status(503).json({
      code: "AI_DISABLED",
      message: "AI assistant is temporarily disabled. Please try again later.",
    });

    const { problemTitle, problemDescription, constraints, examples, language, code } = req.body;

    const problemContext = buildProblemContext({
      problemTitle,
      problemDescription,
      constraints,
      examples,
    });

    const prompt = `You are an expert coding interview tutor.\n\nProblem:\n${problemContext}\n\nUser's chosen language: ${language}.\n\nUser's current code:\n\n\u3010CODE START\u3011\n${code || "// no code yet"}\n\u3010CODE END\u3011\n\nProvide 1-3 short, actionable hints that help the user progress without giving the full solution or exact final code. Focus on logic, edge cases and debugging direction. Answer in concise bullet points.`;

    const hint = await generateAiText(prompt);

    res.status(200).json({ hint });
  } catch (error) {
    console.error("Error in getHint:", error);
    if (error.status === 429 || (typeof error.message === "string" && error.message.toLowerCase().includes("quota"))) {
      return res
        .status(429)
        .json({ code: "AI_QUOTA_EXCEEDED", message: "AI quota exceeded for Gemini API. Please try again later or update your Gemini plan/billing." });
    }
    res.status(500).json({ message: error.message || "Failed to generate hint" });
  }
}

export async function getReview(req, res) {
  try {
    // AI temporarily disabled (Gemini quota / billing not configured).
    return res.status(503).json({
      code: "AI_DISABLED",
      message: "AI assistant is temporarily disabled. Please try again later.",
    });

    const { problemTitle, problemDescription, constraints, examples, language, code } = req.body;

    const problemContext = buildProblemContext({
      problemTitle,
      problemDescription,
      constraints,
      examples,
    });

    const prompt = `You are a senior engineer reviewing a candidate's solution.\n\nProblem:\n${problemContext}\n\nLanguage: ${language}.\n\nCandidate's code:\n\n\u3010CODE START\u3011\n${code}\n\u3010CODE END\u3011\n\nWrite a brief code review with the following sections:\n1. Correctness (does it solve the problem, any bugs?)\n2. Time & space complexity (big-O)\n3. Edge cases that might fail\n4. Readability & style\n5. 2-3 concrete improvement suggestions.\n\nKeep each section short and to the point. Use markdown with headings and bullet points.`;

    const review = await generateAiText(prompt);

    res.status(200).json({ review });
  } catch (error) {
    console.error("Error in getReview:", error);
    if (error.status === 429 || (typeof error.message === "string" && error.message.toLowerCase().includes("quota"))) {
      return res
        .status(429)
        .json({ code: "AI_QUOTA_EXCEEDED", message: "AI quota exceeded for Gemini API. Please try again later or update your Gemini plan/billing." });
    }
    res.status(500).json({ message: error.message || "Failed to generate review" });
  }
}

export async function getSummary(req, res) {
  try {
    // AI temporarily disabled (Gemini quota / billing not configured).
    return res.status(503).json({
      code: "AI_DISABLED",
      message: "AI assistant is temporarily disabled. Please try again later.",
    });

    const { problemTitle, problemDescription, language, code, notes } = req.body;

    const problemContext = buildProblemContext({ problemTitle, problemDescription });

    const prompt = `You are summarizing a coding practice session.\n\nProblem:\n${problemContext}\n\nLanguage: ${language}.\n\nFinal code:\n\n\u3010CODE START\u3011\n${code}\n\u3010CODE END\u3011\n\nOptional notes from the user or system:\n${notes || "(none)"}\n\nWrite a short session summary with:\n- Overall approach in 2-3 sentences\n- Key mistakes or bugs that were fixed\n- What the user learned\n- One suggestion for a follow-up practice problem (topic only).`;

    const summary = await generateAiText(prompt);

    res.status(200).json({ summary });
  } catch (error) {
    console.error("Error in getSummary:", error);
    if (error.status === 429 || (typeof error.message === "string" && error.message.toLowerCase().includes("quota"))) {
      return res
        .status(429)
        .json({ code: "AI_QUOTA_EXCEEDED", message: "AI quota exceeded for Gemini API. Please try again later or update your Gemini plan/billing." });
    }
    res.status(500).json({ message: error.message || "Failed to generate summary" });
  }
}

export async function getFollowup(req, res) {
  try {
    // AI temporarily disabled (Gemini quota / billing not configured).
    return res.status(503).json({
      code: "AI_DISABLED",
      message: "AI assistant is temporarily disabled. Please try again later.",
    });

    const { problemTitle, problemDescription, difficulty = "medium" } = req.body;

    const problemContext = buildProblemContext({ problemTitle, problemDescription });

    const prompt = `You are an expert DSA instructor. Based on the original problem below, generate ONE new follow-up problem that builds on similar concepts.\n\nOriginal problem:\n${problemContext}\n\nTarget difficulty: ${difficulty}.\n\nReturn the follow-up in the following JSON format only (no extra text):\n{\n  "title": string,\n  "difficulty": "easy" | "medium" | "hard",\n  "description": string,\n  "examples": [\n    { "input": string, "output": string, "explanation": string }\n  ],\n  "constraints": string[]\n}`;

    const raw = await generateAiText(prompt);

    let parsed;
    try {
      // Try to extract JSON from the model output
      const jsonStart = raw.indexOf("{");
      const jsonEnd = raw.lastIndexOf("}");
      const jsonText = jsonStart !== -1 && jsonEnd !== -1 ? raw.slice(jsonStart, jsonEnd + 1) : raw;
      parsed = JSON.parse(jsonText);
    } catch (parseError) {
      console.error("Error parsing follow-up JSON:", parseError, raw);
      return res.status(500).json({ message: "Failed to parse follow-up problem" });
    }

    res.status(200).json({ followup: parsed });
  } catch (error) {
    console.error("Error in getFollowup:", error);
    if (error.status === 429 || (typeof error.message === "string" && error.message.toLowerCase().includes("quota"))) {
      return res
        .status(429)
        .json({ code: "AI_QUOTA_EXCEEDED", message: "AI quota exceeded for Gemini API. Please try again later or update your Gemini plan/billing." });
    }
    res.status(500).json({ message: error.message || "Failed to generate follow-up problem" });
  }
}
