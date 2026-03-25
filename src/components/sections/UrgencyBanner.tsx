"use client";

import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

const DURATION_HOURS = 6;

function getEndTime(): number {
  if (typeof window === "undefined") return Date.now() + DURATION_HOURS * 3600000;
  const stored = localStorage.getItem("spinora_urgency_end");
  if (stored) {
    const end = parseInt(stored, 10);
    if (end > Date.now()) return end;
  }
  const end = Date.now() + DURATION_HOURS * 3600000;
  localStorage.setItem("spinora_urgency_end", String(end));
  return end;
}

function formatTime(ms: number) {
  if (ms <= 0) return { h: "00", m: "00", s: "00" };
  const s = Math.floor(ms / 1000);
  return {
    h: String(Math.floor(s / 3600)).padStart(2, "0"),
    m: String(Math.floor((s % 3600) / 60)).padStart(2, "0"),
    s: String(s % 60).padStart(2, "0"),
  };
}

export function UrgencyBanner() {
  const [time, setTime] = useState({ h: "05", m: "59", s: "59" });

  useEffect(() => {
    const endTime = getEndTime();
    const tick = () => setTime(formatTime(endTime - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-slate-900 py-2.5 text-center text-sm text-white">
      <div className="flex items-center justify-center gap-2 flex-wrap px-4">
        <Flame className="h-4 w-4 text-brand-400 flex-shrink-0" />
        <span className="font-medium">
          Sale price ends in —
        </span>
        <span className="flex items-center gap-1 font-mono font-bold text-brand-400">
          <span className="rounded bg-slate-700 px-1.5 py-0.5">{time.h}</span>:
          <span className="rounded bg-slate-700 px-1.5 py-0.5">{time.m}</span>:
          <span className="rounded bg-slate-700 px-1.5 py-0.5">{time.s}</span>
        </span>
        <span className="text-slate-400">left</span>
      </div>
    </div>
  );
}
