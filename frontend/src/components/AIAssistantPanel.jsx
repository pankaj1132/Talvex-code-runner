import { useState } from "react";
import { aiApi } from "../api/ai";
import { SparklesIcon, MessageCircleIcon, BookOpenIcon, LightbulbIcon } from "lucide-react";

function AIAssistantPanel({ problemData, selectedLanguage, code }) {
  const [activeTab, setActiveTab] = useState("hint");
  const [isLoading, setIsLoading] = useState(false);
  const [responseText, setResponseText] = useState("");

  const buildProblemPayload = () => {
    if (!problemData) return {};

    return {
      problemTitle: problemData.title,
      problemDescription: problemData.description?.text,
      constraints: problemData.constraints,
      examples: problemData.examples,
    };
  };

  const handleCall = async (type) => {
    try {
      setActiveTab(type);
      setIsLoading(true);
      setResponseText("");

      const base = buildProblemPayload();
      const payload = {
        ...base,
        language: selectedLanguage,
        code,
      };

      let data;
      if (type === "hint") {
        data = await aiApi.getHint(payload);
        setResponseText(data.hint);
      } else if (type === "review") {
        data = await aiApi.getReview(payload);
        setResponseText(data.review);
      } else if (type === "summary") {
        data = await aiApi.getSummary(payload);
        setResponseText(data.summary);
      } else if (type === "followup") {
        data = await aiApi.getFollowup(base);
        const f = data.followup;
        const text = `**${f.title}** (Difficulty: ${f.difficulty})\n\n${f.description}\n\n` +
          (f.examples?.length
            ? `**Example**\nInput: ${f.examples[0].input}\nOutput: ${f.examples[0].output}\n${
                f.examples[0].explanation ? `Explanation: ${f.examples[0].explanation}` : ""
              }\n\n`
            : "") +
          (f.constraints?.length ? `**Constraints**\n- ${f.constraints.join("\n- ")}` : "");
        setResponseText(text);
      }
    } catch (error) {
      console.error("AI request failed", error);
      const code = error?.response?.data?.code;
      const message = error?.response?.data?.message;

      if (code === "AI_DISABLED") {
        setResponseText(
          message ||
            "AI assistant is currently disabled on the server. Please try again later."
        );
      } else if (code === "AI_QUOTA_EXCEEDED") {
        setResponseText(
          message ||
            "AI service has hit its quota or rate limit. Please wait a bit and try again."
        );
      } else {
        setResponseText("Failed to get AI response. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-base-200 border border-base-300 rounded-lg flex flex-col overflow-hidden">
      <div className="px-3 py-2 bg-base-300 border-b border-base-300 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <SparklesIcon className="w-4 h-4 text-primary" />
          <span>AI Assistant</span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => handleCall("hint")}
            className={`btn btn-xs gap-1 ${
              activeTab === "hint" ? "btn-primary" : "btn-ghost"
            }`}
          >
            <LightbulbIcon className="w-3 h-3" />
            Hint
          </button>
          <button
            onClick={() => handleCall("review")}
            className={`btn btn-xs gap-1 ${
              activeTab === "review" ? "btn-primary" : "btn-ghost"
            }`}
          >
            <MessageCircleIcon className="w-3 h-3" />
            Review
          </button>
          <button
            onClick={() => handleCall("summary")}
            className={`btn btn-xs gap-1 ${
              activeTab === "summary" ? "btn-primary" : "btn-ghost"
            }`}
          >
            <BookOpenIcon className="w-3 h-3" />
            Summary
          </button>
          <button
            onClick={() => handleCall("followup")}
            className={`btn btn-xs gap-1 ${
              activeTab === "followup" ? "btn-primary" : "btn-ghost"
            }`}
          >
            <SparklesIcon className="w-3 h-3" />
            Follow-up
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-3 text-sm bg-base-200">
        {isLoading ? (
          <p className="text-base-content/60">Thinking with AI...</p>
        ) : responseText ? (
          <pre className="whitespace-pre-wrap font-mono text-base-content/90">{responseText}</pre>
        ) : (
          <p className="text-base-content/50">
            Use the buttons above to get a hint, code review, session summary, or a new follow-up
            problem powered by AI.
          </p>
        )}
      </div>
    </div>
  );
}

export default AIAssistantPanel;
