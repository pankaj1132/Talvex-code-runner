import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENV } from "./env.js";

let genAI = null;

if (!ENV.GEMINI_API_KEY) {
  console.warn("GEMINI_API_KEY is not set. AI features will be disabled.");
} else {
  genAI = new GoogleGenerativeAI(ENV.GEMINI_API_KEY);
}

// Match the model you tested via curl; overridable via GEMINI_MODEL
const DEFAULT_MODEL = ENV.GEMINI_MODEL || "gemini-2.0-flash";

export async function generateAiText(prompt, options = {}) {
  if (!genAI) {
    throw new Error("GEMINI_API_KEY is not configured on the server.");
  }

  const model = genAI.getGenerativeModel({ model: options.model || DEFAULT_MODEL });

  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
}
