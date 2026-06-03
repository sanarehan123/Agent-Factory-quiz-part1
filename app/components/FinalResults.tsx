"use client";

import { TOPICS } from "../data/topics";
import { TopicResult } from "../page";

interface Props {
  results: TopicResult[];
  onRestart: () => void;
  onHome: () => void;
}

export default function FinalResults({ results, onRestart, onHome }: Props) {
  const totalScore = results.reduce((s, r) => s + r.score, 0);
  const totalQ = results.reduce((s, r) => s + r.total, 0);
  const pct = Math.round((totalScore / totalQ) * 100);

  const grade =
    pct >= 90 ? { label: "Outstanding!", emoji: "🏆", color: "text-emerald-400" } :
    pct >= 75 ? { label: "Great Work!", emoji: "⭐", color: "text-blue-400" } :
    pct >= 60 ? { label: "Good Effort!", emoji: "👍", color: "text-yellow-400" } :
    { label: "Keep Studying!", emoji: "📚", color: "text-orange-400" };

  // Sort results by topic order
  const ordered = TOPICS.map(t => results.find(r => r.topicId === t.id)).filter(Boolean) as TopicResult[];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <div className="flex-1 px-4 py-8 max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-7">
          <div className="text-6xl mb-3">{grade.emoji}</div>
          <h1 className="text-2xl font-bold mb-1">{grade.label}</h1>
          <p className="text-gray-400 text-sm">All Topics Complete</p>
        </div>

        {/* Overall score card */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-4">
          <div className="flex items-center justify-around mb-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{totalScore}</div>
              <div className="text-xs text-gray-400 mt-1">Correct</div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold ${grade.color}`}>{pct}%</div>
              <div className="text-xs text-gray-400 mt-1">Overall</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300">{totalQ - totalScore}</div>
              <div className="text-xs text-gray-400 mt-1">Wrong</div>
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 rounded-full transition-all duration-1000"
              style={{ width: `${pct}%`, background: pct >= 75 ? "linear-gradient(90deg,#10b981,#34d399)" : pct >= 50 ? "linear-gradient(90deg,#f59e0b,#fbbf24)" : "linear-gradient(90deg,#ef4444,#f87171)" }}
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">{totalScore} of {totalQ} questions correct</p>
        </div>

        {/* Per-topic breakdown */}
        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 mb-5">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Per-Topic Breakdown</h3>
          <div className="space-y-3">
            {ordered.map((r, i) => {
              const topic = TOPICS.find(t => t.id === r.topicId);
              const tPct = Math.round((r.score / r.total) * 100);
              return (
                <div key={r.topicId}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-sm shrink-0">{topic?.emoji}</span>
                      <span className="text-xs text-gray-300 truncate">{topic?.title}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="text-xs text-gray-500">{r.score}/{r.total}</span>
                      <span className={`text-xs font-bold w-9 text-right ${tPct >= 75 ? "text-emerald-400" : tPct >= 50 ? "text-yellow-400" : "text-red-400"}`}>
                        {tPct}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all duration-700"
                      style={{ width: `${tPct}%`, background: tPct >= 75 ? "#10b981" : tPct >= 50 ? "#f59e0b" : "#ef4444", transitionDelay: `${i * 60}ms` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <button onClick={onHome} className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all font-semibold text-white text-base">
            Back to Topics
          </button>
          <button onClick={onRestart} className="w-full py-3.5 rounded-2xl bg-gray-800 hover:bg-gray-700 active:scale-95 transition-all font-medium text-gray-300 text-sm">
            Reset All & Restart
          </button>
        </div>
      </div>
    </div>
  );
}
