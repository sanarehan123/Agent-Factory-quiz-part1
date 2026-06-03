"use client";

import { Topic } from "../data/topics";

interface Props {
  topic: Topic;
  topicNumber: number;
  totalTopics: number;
  isCompleted: boolean;
  onStartQuiz: () => void;
  onBack: () => void;
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g;
  let last = 0; let m: RegExpExecArray | null; let k = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(<span key={k++}>{text.slice(last, m.index)}</span>);
    if (m[2]) parts.push(<strong key={k++} className="font-bold text-white italic">{m[2]}</strong>);
    else if (m[3]) parts.push(<strong key={k++} className="font-semibold text-white">{m[3]}</strong>);
    else if (m[4]) parts.push(<em key={k++} className="italic text-gray-200">{m[4]}</em>);
    else if (m[5]) parts.push(<code key={k++} className="bg-gray-800 text-indigo-300 px-1.5 py-0.5 rounded text-xs font-mono">{m[5]}</code>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<span key={k++}>{text.slice(last)}</span>);
  return parts.length > 0 ? <>{parts}</> : <>{text}</>;
}

function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const result: React.ReactNode[] = [];
  let i = 0; let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      result.push(<h2 key={key++} className="text-xl font-bold text-white mt-6 mb-3">{line.slice(3)}</h2>);
      i++; continue;
    }
    if (line.startsWith("### ")) {
      result.push(<h3 key={key++} className="text-base font-bold text-indigo-300 mt-5 mb-2">{line.slice(4)}</h3>);
      i++; continue;
    }
    if (line.startsWith("> ")) {
      result.push(
        <blockquote key={key++} className="border-l-4 border-indigo-500 pl-4 py-1 my-3 text-gray-300 italic text-sm">
          {renderInline(line.slice(2))}
        </blockquote>
      );
      i++; continue;
    }
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) { tableLines.push(lines[i]); i++; }
      const rows = tableLines.filter(r => !r.match(/^\|[-| ]+\|$/));
      result.push(
        <div key={key++} className="overflow-x-auto my-4 rounded-xl border border-gray-800">
          <table className="w-full text-xs">
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split("|").filter((_, ci) => ci > 0 && ci < row.split("|").length - 1);
                return (
                  <tr key={ri} className={ri === 0 ? "bg-gray-800 text-gray-200 font-semibold" : "border-t border-gray-800 text-gray-300"}>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-3 py-2">{renderInline(cell.trim())}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      continue;
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) { items.push(lines[i].slice(2)); i++; }
      result.push(
        <ul key={key++} className="list-none space-y-1.5 my-3 pl-1">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-indigo-400 mt-1 shrink-0">•</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(lines[i].replace(/^\d+\. /, "")); i++; }
      result.push(
        <ol key={key++} className="space-y-1.5 my-3 pl-1">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-indigo-400 font-bold shrink-0 mt-0.5">{ii + 1}.</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }
    if (line.startsWith("---")) { result.push(<hr key={key++} className="border-gray-800 my-5" />); i++; continue; }
    if (line.trim() === "") { i++; continue; }
    result.push(<p key={key++} className="text-sm text-gray-300 leading-relaxed mb-2">{renderInline(line)}</p>);
    i++;
  }
  return result;
}

export default function TopicReader({ topic, topicNumber, totalTopics, isCompleted, onStartQuiz, onBack }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-gray-950/95 backdrop-blur border-b border-gray-800 px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors text-sm px-2 py-1 rounded-lg hover:bg-gray-800">
            ← Back
          </button>
          <div className="flex-1 flex justify-center gap-1">
            {Array.from({ length: totalTopics }).map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i < topicNumber - 1 ? "w-4 bg-emerald-500" : i === topicNumber - 1 ? "w-4 bg-indigo-500" : "w-2 bg-gray-700"}`} />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">{topicNumber}/{totalTopics}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 max-w-lg mx-auto w-full">
        {/* Topic heading */}
        <div className="flex items-center gap-3 mb-5">
          <div className="text-4xl">{topic.emoji}</div>
          <div>
            <div className="text-xs text-indigo-400 font-medium uppercase tracking-wider mb-0.5">Topic {topicNumber}</div>
            <h1 className="text-xl font-bold text-white leading-tight">{topic.title}</h1>
          </div>
        </div>

        {/* Read reminder */}
        <div className="flex items-center gap-2 bg-amber-900/20 border border-amber-800/40 rounded-xl px-4 py-2.5 mb-5">
          <span className="text-amber-400 text-base">📖</span>
          <p className="text-amber-200 text-xs font-medium">Read this section thoroughly before starting the quiz.</p>
        </div>

        {/* Markdown content */}
        <div className="bg-gray-900/60 rounded-2xl border border-gray-800 p-5 mb-6">
          {renderMarkdown(topic.content)}
        </div>

        <div className="text-center text-xs text-gray-500 mb-4">{topic.questions.length} questions for this topic · 30 sec each</div>

        <button
          onClick={onStartQuiz}
          className={`w-full py-4 rounded-2xl font-semibold text-white text-base shadow-lg transition-all active:scale-95 ${isCompleted ? "bg-gray-700 hover:bg-gray-600" : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-900/30"}`}
        >
          {isCompleted ? "Retake Quiz →" : "Start Quiz for this Topic →"}
        </button>
      </div>
    </div>
  );
}
