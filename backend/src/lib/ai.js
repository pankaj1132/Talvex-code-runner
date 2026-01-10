import { ENV } from "./env.js";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = ENV.GROQ_MODEL || "llama-3.3-70b-versatile";

if (!ENV.GROQ_API_KEY) {
  console.warn("GROQ_API_KEY is not set. AI features will be disabled.");
}

export async function generateAiText(prompt, options = {}) {
  if (!ENV.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not configured on the server.");
  }

  const model = options.model || DEFAULT_MODEL;

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ENV.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: options.temperature ?? 0.4,
      max_tokens: options.maxTokens ?? 1024,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(
      `Groq API error: ${response.status} ${response.statusText} - ${errorText}`
    );
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("No content returned from Groq API.");
  }

  return content;
}
