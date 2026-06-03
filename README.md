# Agent Factory Thesis — Quiz App

A mobile-friendly Next.js quiz app with 100 questions covering the [Agent Factory Thesis](https://agentfactory.panaversity.org/docs/thesis).

## Features

- 100 questions across all topics (Seven Invariants, Seven Principles, Core Concepts, etc.)
- 10-second countdown timer per question
- Correct answer revealed after answering or when time expires
- Auto-advance to next question after 3 seconds
- Full progress bar
- Final results screen with percentage, score breakdown, and per-topic performance

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy (no extra config needed)

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
