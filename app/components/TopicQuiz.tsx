"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Topic, QuizQuestion } from "../data/topics";

interface Props {
  topic: Topic;
  topicNumber: number;
  totalTopics: number;
  onComplete: (score: number, total: number) => void;
  onBack: () => void;
}

const TIMER_SECONDS = 30;
const LABELS = ["A", "B", "C"];

function shuffleOptions(q: QuizQuestion): { opts: string[]; correctIdx: number } {
  const indices = [0, 1, 2];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return { opts: indices.map(i => q.options[i]), correctIdx: indices.indexOf(q.correctIndex) };
}

export default function TopicQuiz({ topic, topicNumber, totalTopics, onComplete, onBack }: Props) {
  const [shuffled] = useState(() => topic.questions.map(shuffleOptions));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [revealed, setRevealed] = useState(false);
  const [scores, setScores] = useState<boolean[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasAnswered = useRef(false);

  const q = topic.questions[current];
  const { opts, correctIdx } = shuffled[current];

  const reveal = useCallback((picked: number | null) => {
    if (hasAnswered.current) return;
    hasAnswered.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
    setSelected(picked);
    setRevealed(true);
    setScores(prev => [...prev, picked === correctIdx]);
  }, [correctIdx]);

  useEffect(() => {
    if (revealed) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timerRef.current!); reveal(null); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, revealed, reveal]);

  const goNext = useCallback(() => {
    if (current + 1 >= topic.questions.length) {
      const finalScore = [...scores].filter(Boolean).length + (revealed && selected === correctIdx ? 0 : 0);
      onComplete(scores.filter(Boolean).length, topic.questions.length);
    } else {
      setCurrent(prev => prev + 1);
      setSelected(null);
      setRevealed(false);
      setTimeLeft(TIMER_SECONDS);
      hasAnswered.current = false;
    }
  }, [current, topic.questions.length, scores, onComplete, revealed, selected, correctIdx]);

  const timerPct = (timeLeft / TIMER_SECONDS) * 100;
  const progressPct = (current / topic.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <div className="px-4 pt-5 pb-3 max-w-lg mx-auto w-full">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="text-gray-500 hover:text-gray-300 transition-colors text-xs px-2 py-1 rounded-lg hover:bg-gray-800">
              ← Back
            </button>
            <span className="text-xs text-gray-500 truncate max-w-[120px]">{topic.emoji} {topic.title}</span>
          </div>
          <span className="text-xs text-gray-500">{current + 1}/{topic.questions.length}</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-1.5">
          <div className="h-1.5 rounded-full bg-indigo-500 transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 px-4 pb-8 max-w-lg mx-auto w-full flex flex-col">
        {/* Timer row */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Question {current + 1}</span>
          <div className="flex items-center gap-1.5">
            <div className={`text-xl font-bold tabular-nums transition-colors ${timeLeft <= 8 ? "text-red-400" : timeLeft <= 15 ? "text-yellow-400" : "text-white"}`}>
              {revealed ? "—" : timeLeft}
            </div>
            <span className="text-gray-600 text-xs">sec</span>
          </div>
        </div>

        {/* Timer bar */}
        <div className="w-full bg-gray-800 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ${timeLeft <= 8 ? "bg-red-500" : timeLeft <= 15 ? "bg-yellow-400" : "bg-emerald-400"}`}
            style={{ width: revealed ? "0%" : `${timerPct}%` }}
          />
        </div>

        {/* Question */}
        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 mb-4">
          <p className="text-base font-medium leading-relaxed text-white">{q.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3 flex-1">
          {opts.map((opt, idx) => {
            const isSelected = selected === idx;
            const isCorrect = idx === correctIdx;
            let cls = "w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3";
            if (!revealed) cls += " bg-gray-900 border-gray-800 hover:border-indigo-500/50 hover:bg-gray-800 cursor-pointer";
            else if (isCorrect) cls += " bg-emerald-900/30 border-emerald-500 cursor-default";
            else if (isSelected && !isCorrect) cls += " bg-red-900/30 border-red-500 cursor-default";
            else cls += " bg-gray-900/50 border-gray-800/50 cursor-default opacity-40";

            return (
              <button key={idx} onClick={() => { if (!revealed) reveal(idx); }} disabled={revealed} className={cls}>
                <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${!revealed ? "bg-gray-800 text-gray-400" : isCorrect ? "bg-emerald-500 text-white" : isSelected ? "bg-red-500 text-white" : "bg-gray-800 text-gray-500"}`}>
                  {LABELS[idx]}
                </span>
                <span className={`text-sm leading-relaxed pt-0.5 ${!revealed ? "text-gray-200" : isCorrect ? "text-emerald-200 font-medium" : isSelected ? "text-red-200" : "text-gray-500"}`}>
                  {opt}
                </span>
                {revealed && isCorrect && <span className="ml-auto text-emerald-400 shrink-0">✓</span>}
                {revealed && isSelected && !isCorrect && <span className="ml-auto text-red-400 shrink-0">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Feedback + Next */}
        {revealed && (
          <div className={`mt-4 p-4 rounded-2xl border text-sm font-medium flex items-center justify-between gap-3 ${scores.at(-1) ? "bg-emerald-900/20 border-emerald-800 text-emerald-300" : selected === null ? "bg-gray-800/50 border-gray-700 text-gray-300" : "bg-red-900/20 border-red-800 text-red-300"}`}>
            <span>{scores.at(-1) ? "🎉 Correct!" : selected === null ? "⏱ Time's up!" : "❌ Incorrect."}</span>
            <button onClick={goNext} className="shrink-0 px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold transition-colors">
              {current + 1 >= topic.questions.length ? "See Score →" : "Next →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
