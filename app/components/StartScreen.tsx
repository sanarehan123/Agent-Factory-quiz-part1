"use client";

import { TOPICS, Topic } from "../data/topics";
import { TopicResult } from "../page";

interface Props {
  onOpenTopic: (index: number) => void;
  completedIds: Set<string>;
  results: TopicResult[];
  onViewFinal?: () => void;
}

export default function StartScreen({ onOpenTopic, completedIds, results, onViewFinal }: Props) {
  const totalQ = TOPICS.reduce((s, t) => s + t.questions.length, 0);
  const totalCorrect = results.reduce((s, r) => s + r.score, 0);
  const totalAnswered = results.reduce((s, r) => s + r.total, 0);
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : null;
  const completedCount = completedIds.size;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col px-4 py-8">
      <div className="max-w-lg mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">🏭</div>
          <h1 className="text-2xl font-bold mb-1">Agent Factory Thesis</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Select any topic to study and quiz yourself.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { icon: "📚", label: `${TOPICS.length} Topics` },
            { icon: "❓", label: `${totalQ} Questions` },
            { icon: "⏱", label: "30 sec / question" },
            { icon: "✅", label: completedCount > 0 ? `${completedCount}/${TOPICS.length} Done` : "Full results report" },
          ].map(({ icon, label }) => (
            <div key={label} className="bg-gray-900 border border-gray-800 rounded-xl p-3 flex items-center gap-2">
              <span className="text-lg">{icon}</span>
              <span className="text-xs text-gray-300 font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Overall progress (shown once any topic is done) */}
        {totalAnswered > 0 && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 mb-1">Overall Progress</p>
              <div className="w-48 bg-gray-800 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-indigo-500 transition-all"
                  style={{ width: `${(completedCount / TOPICS.length) * 100}%` }}
                />
              </div>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${overallPct! >= 75 ? "text-emerald-400" : overallPct! >= 50 ? "text-yellow-400" : "text-red-400"}`}>
                {overallPct}%
              </div>
              <div className="text-xs text-gray-500">{totalCorrect}/{totalAnswered}</div>
            </div>
          </div>
        )}

        {/* Topic list */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden mb-5">
          <div className="px-4 py-3 border-b border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Topics — Click to Study</p>
          </div>
          <div className="divide-y divide-gray-800/60">
            {TOPICS.map((t, i) => {
              const done = completedIds.has(t.id);
              const result = results.find(r => r.topicId === t.id);
              const tPct = result ? Math.round((result.score / result.total) * 100) : null;
              return (
                <button
                  key={t.id}
                  onClick={() => onOpenTopic(i)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-gray-800/60 active:bg-gray-800 transition-colors text-left"
                >
                  {/* Number */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${done ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-800 text-gray-400"}`}>
                    {done ? "✓" : i + 1}
                  </div>
                  {/* Emoji */}
                  <span className="text-base shrink-0">{t.emoji}</span>
                  {/* Title */}
                  <span className={`text-sm flex-1 min-w-0 truncate ${done ? "text-gray-300" : "text-white"}`}>
                    {t.title}
                  </span>
                  {/* Right side */}
                  <div className="flex items-center gap-2 shrink-0">
                    {tPct !== null && (
                      <span className={`text-xs font-bold ${tPct >= 75 ? "text-emerald-400" : tPct >= 50 ? "text-yellow-400" : "text-red-400"}`}>
                        {tPct}%
                      </span>
                    )}
                    <span className="text-xs text-gray-500">{t.questions.length}Q</span>
                    <span className="text-gray-600 text-xs">›</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Final results button (when all done) */}
        {onViewFinal && (
          <button
            onClick={onViewFinal}
            className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all font-semibold text-white text-base"
          >
            View Final Results 🏆
          </button>
        )}

        {completedCount === 0 && (
          <p className="text-center text-gray-600 text-xs mt-3">Tap any topic to begin studying</p>
        )}
      </div>
    </div>
  );
}
