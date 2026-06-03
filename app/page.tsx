"use client";

import { useState } from "react";
import { TOPICS } from "./data/topics";
import StartScreen from "./components/StartScreen";
import TopicReader from "./components/TopicReader";
import TopicQuiz from "./components/TopicQuiz";
import FinalResults from "./components/FinalResults";

type Phase = "home" | "reading" | "quiz" | "results" | "final";

export interface TopicResult {
  topicId: string;
  score: number;
  total: number;
}

export default function Home() {
  const [phase, setPhase] = useState<Phase>("home");
  const [topicIndex, setTopicIndex] = useState(0);
  const [results, setResults] = useState<TopicResult[]>([]);
  const [lastResult, setLastResult] = useState<TopicResult | null>(null);

  const topic = TOPICS[topicIndex];
  const completedIds = new Set(results.map(r => r.topicId));
  const allDone = results.length === TOPICS.length;

  // Open a topic for reading (from home screen)
  const handleOpenTopic = (index: number) => {
    setTopicIndex(index);
    setPhase("reading");
  };

  // Start quiz for the current topic
  const handleStartQuiz = () => setPhase("quiz");

  // Quiz finished — save result, show topic results screen
  const handleTopicComplete = (score: number, total: number) => {
    const result: TopicResult = { topicId: topic.id, score, total };
    setLastResult(result);
    // Replace existing result or append
    setResults(prev => {
      const filtered = prev.filter(r => r.topicId !== topic.id);
      return [...filtered, result];
    });
    setPhase("results");
  };

  // From topic results: go to next topic or final
  const handleNextTopic = () => {
    const nextIndex = topicIndex + 1;
    if (nextIndex >= TOPICS.length) {
      setPhase("final");
    } else {
      setTopicIndex(nextIndex);
      setPhase("reading");
    }
  };

  // From topic results: go back home
  const handleBackHome = () => setPhase("home");

  // From topic results: view final results (if all done)
  const handleViewFinal = () => setPhase("final");

  const handleRestart = () => {
    setPhase("home");
    setTopicIndex(0);
    setResults([]);
    setLastResult(null);
  };

  if (phase === "home") return (
    <StartScreen
      onOpenTopic={handleOpenTopic}
      completedIds={completedIds}
      results={results}
      onViewFinal={allDone ? handleViewFinal : undefined}
    />
  );

  if (phase === "reading") return (
    <TopicReader
      topic={topic}
      topicNumber={topicIndex + 1}
      totalTopics={TOPICS.length}
      isCompleted={completedIds.has(topic.id)}
      onStartQuiz={handleStartQuiz}
      onBack={handleBackHome}
    />
  );

  if (phase === "quiz") return (
    <TopicQuiz
      topic={topic}
      topicNumber={topicIndex + 1}
      totalTopics={TOPICS.length}
      onComplete={handleTopicComplete}
      onBack={() => setPhase("reading")}
    />
  );

  if (phase === "results" && lastResult) return (
    <TopicResults
      topic={topic}
      topicNumber={topicIndex + 1}
      totalTopics={TOPICS.length}
      result={lastResult}
      allDone={results.length === TOPICS.length}
      onNext={handleNextTopic}
      onHome={handleBackHome}
      onFinal={handleViewFinal}
    />
  );

  return <FinalResults results={results} onRestart={handleRestart} onHome={handleBackHome} />;
}

// ── Inline TopicResults component ──────────────────────────────────────────
import { Topic } from "./data/topics";

function TopicResults({
  topic, topicNumber, totalTopics, result, allDone, onNext, onHome, onFinal,
}: {
  topic: Topic;
  topicNumber: number;
  totalTopics: number;
  result: TopicResult;
  allDone: boolean;
  onNext: () => void;
  onHome: () => void;
  onFinal: () => void;
}) {
  const pct = Math.round((result.score / result.total) * 100);
  const isLast = topicNumber >= totalTopics;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-center">
        <div className="text-5xl mb-3">{topic.emoji}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Topic {topicNumber} of {totalTopics}</div>
        <h2 className="text-xl font-bold mb-6">{topic.title}</h2>

        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-5">
          <div className="flex items-center justify-around mb-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{result.score}</div>
              <div className="text-gray-400 text-xs mt-1">Correct</div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold ${pct >= 75 ? "text-emerald-400" : pct >= 50 ? "text-yellow-400" : "text-red-400"}`}>
                {pct}%
              </div>
              <div className="text-gray-400 text-xs mt-1">Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300">{result.total - result.score}</div>
              <div className="text-gray-400 text-xs mt-1">Wrong</div>
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 rounded-full transition-all duration-1000"
              style={{
                width: `${pct}%`,
                background: pct >= 75 ? "linear-gradient(90deg,#10b981,#34d399)" : pct >= 50 ? "linear-gradient(90deg,#f59e0b,#fbbf24)" : "linear-gradient(90deg,#ef4444,#f87171)"
              }}
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">{result.score} of {result.total} questions correct</p>
        </div>

        <div className="space-y-3">
          {allDone && (
            <button onClick={onFinal} className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all font-semibold text-white text-sm">
              View Final Results 🏆
            </button>
          )}
          {!isLast && (
            <button onClick={onNext} className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all font-semibold text-white text-sm">
              Next Topic →
            </button>
          )}
          <button onClick={onHome} className="w-full py-3.5 rounded-2xl bg-gray-800 hover:bg-gray-700 active:scale-95 transition-all font-medium text-gray-300 text-sm">
            Back to Topics
          </button>
        </div>
      </div>
    </div>
  );
}
