export interface QuizQuestion {
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
}

export interface Topic {
  id: string;
  title: string;
  emoji: string;
  content: string;
  questions: QuizQuestion[];
}

export const TOPICS: Topic[] = [
  {
    id: "intro",
    title: "The AI Era & Digital FTEs",
    emoji: "🏭",
    content: `## What Is the Agent Factory Thesis?

In the AI era, the most valuable companies won't sell software — they'll **manufacture AI employees** called **Digital FTEs** (Digital Full-Time Employees): role-based systems that compose tools, spawn specialist agents, and deliver outcomes at scale.

These AI employees are the operating substrate of **AI-Native companies** — firms where the workforce is mostly AI and the product line is whatever that workforce ships: software, decisions, services, and transactions.

> **You don't buy from these companies. You hire them.**

### AI Agents as Economic Actors

AI employees are on the verge of becoming *economic actors in their own right* — autonomously buying services, procuring compute, and acquiring data to accomplish what they're tasked with.

**Four open payment protocols (shipping 2025–2026) make this real:**

- **ACP** (OpenAI + Stripe) — powers ChatGPT's Instant Checkout
- **AP2** (Google) — backed by 60+ companies, uses cryptographically signed mandates
- **x402** (Coinbase) — crypto-native; Stripe integrated with it on Coinbase's Base blockchain in early 2026
- **MPP** (Stripe / Tempo) — built for micropayments, agents pay pennies per second under a preset cap

### The Paradigm Shift

| Feature | SaaS Era | Agent Factory Era |
|---|---|---|
| **Product** | Software Tools | AI Employees |
| **Value Metric** | Per-Seat Subscriptions | Per-Outcome Results |
| **Human Role** | Operator | Supervisor & Verifier |
| **Integration** | Rigid point-to-point APIs | Model Context Protocol (MCP) |

**This is no longer a tool category. It's a company category.**`,
    questions: [
      {
        question: "What does 'Digital FTE' stand for in the Agent Factory thesis?",
        options: ["Digital Full-Time Employee", "Digital Framework and Technology Engine", "Digital Feature and Tool Ecosystem"],
        correctIndex: 0,
      },
      {
        question: "In the AI era, instead of selling software, the most valuable companies will do what?",
        options: ["Provide cloud infrastructure", "Manufacture AI employees that deliver outcomes", "Sell per-seat SaaS subscriptions"],
        correctIndex: 1,
      },
      {
        question: "Which payment protocol was developed by OpenAI and Stripe to power ChatGPT's Instant Checkout?",
        options: ["x402", "MPP", "ACP"],
        correctIndex: 2,
      },
      {
        question: "Which payment protocol is backed by 60+ companies and uses cryptographically signed mandates?",
        options: ["AP2", "ACP", "MPP"],
        correctIndex: 0,
      },
      {
        question: "What is the MPP protocol specifically designed for?",
        options: ["Large enterprise bulk payments", "Micropayments — AI agents paying pennies per second under a preset cap", "Cross-border wire transfers"],
        correctIndex: 1,
      },
      {
        question: "In the paradigm shift table, what replaced 'Operator' as the human role in the Agent Factory era?",
        options: ["Developer", "Supervisor & Verifier", "Data Scientist"],
        correctIndex: 1,
      },
      {
        question: "What replaced rigid point-to-point APIs as the integration method in the Agent Factory era?",
        options: ["GraphQL", "REST APIs", "Model Context Protocol (MCP)"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "vocabulary",
    title: "Core Vocabulary & The Production Engine",
    emoji: "📖",
    content: `## Key Terms — Not Interchangeable

### The Agent Factory
The **process**. The spec-driven, human-supervised method by which AI Workers are designed, manufactured, and deployed. Not a product you buy — a practice you adopt.

### The AI-Native Company
The **output**. The running enterprise the Agent Factory produces: a firm staffed by AI Workers, coordinated by a management layer, and directed by humans at the edge. Also called the **Agentic Enterprise**.

### AI Workers
The **workforce**. Role-based agents inside the AI-Native Company — the ones that get hired, assigned, rostered, and retired. Also called **Digital FTEs** or **Digital Workers**.

> OpenClaw and Paperclip are **permanent fixtures** of the company. AI Workers are the **workforce** hired and retired through them.

### System of Record
The **substrate**. The authoritative databases, ledgers, and platforms that hold the truth of the AI-Native Company.

### An Engagement
A **single bounded interaction** between a human and a general agent.

### Invariant vs. Reference Implementation
- **Invariant** — a structural requirement that stays true across every version of the system, regardless of which product realizes it
- **Reference implementation** — the specific product used in 2026 to realize an invariant; can be swapped for better options

---

## The Production Engine

The production engine is the **most important idea in this entire thesis**. It's the system that takes what you want and turns it into what you get — everything that happens between your instruction and the final result.

**Three things power the factory:**
1. **Specs** — written instructions that tell AI Workers what needs to be done
2. **Skills** — packaged abilities each AI Worker brings to the job, captured as portable version-controlled folders following the open Agent Skills format (agentskills.io)
3. **Feedback loops** — how the system learns from its results and improves over time

**MCP** — a universal standard connecting every AI Worker to every tool, like a power outlet standard for the factory floor.

> **Said another way:** The Factory builds the Company; the Company employs Workers; the Workers run against the system of record.`,
    questions: [
      {
        question: "What is 'The Agent Factory' in precise terms?",
        options: ["A product you buy to manage AI tools", "The process for designing, manufacturing, and deploying AI Workers", "A cloud platform run by Anthropic"],
        correctIndex: 1,
      },
      {
        question: "What is the 'system of record' in an AI-Native Company?",
        options: ["The AI model that records all conversations", "The authoritative databases, ledgers, and platforms holding company truth", "Log files produced by AI Workers"],
        correctIndex: 1,
      },
      {
        question: "What is a 'reference implementation' vs. an 'invariant'?",
        options: ["They are the same thing", "An invariant is the permanent rule; a reference implementation is today's product realizing it", "A reference implementation is permanent; an invariant changes yearly"],
        correctIndex: 1,
      },
      {
        question: "What does the thesis call 'the most important idea in this entire thesis'?",
        options: ["The 10-80-10 Rule", "The Two-Layer Model", "The Production Engine"],
        correctIndex: 2,
      },
      {
        question: "What are the three things that power the Production Engine?",
        options: ["Models, APIs, and databases", "Specs, Skills, and Feedback loops", "Humans, robots, and software"],
        correctIndex: 1,
      },
      {
        question: "What open format do Skills follow according to the thesis?",
        options: ["OpenAI Skills Format", "Agent Skills format (agentskills.io)", "SKILL-JSON by Google"],
        correctIndex: 1,
      },
      {
        question: "Which statement correctly describes OpenClaw and Paperclip vs. AI Workers?",
        options: ["All three are AI Workers that get hired and retired", "OpenClaw and Paperclip are permanent fixtures; AI Workers are the workforce hired and retired through them", "Paperclip is a fixture but OpenClaw is an AI Worker"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "human",
    title: "Humans in the Loop & The 10-80-10 Rule",
    emoji: "👤",
    content: `## The Human in the Loop

A common fear: agents replace people. The evidence says otherwise. AI paired with a human outperforms either one working alone.

The Agent Factory **promotes** the human:
- From operator → **supervisor**
- From typist → **editor**
- From coder → **architect of outcomes**

What remains for humans after AI absorbs execution:
> **Intent. Verification. Outcome.**

---

## The 10-80-10 Rule: The Operating Rhythm

Steve Jobs famously followed the 10-80-10 rule: spend 10% setting the vision, let the team execute for 80%, then return for the final 10% to polish and perfect.

**Now replace "talented people" with "AI employees":**

| Phase | Jobs's Apple | The Agent Factory |
|---|---|---|
| **First 10% — Intent** | Jobs sets vision and constraints | Human defines the spec: goals, constraints, budget, permissions |
| **Middle 80% — Execution** | Apple's teams build the product | AI Workers execute: compose tools, spawn sub-agents, deliver outcomes |
| **Final 10% — Verification** | Jobs polishes and says "ship it" | Human reviews, refines, and approves the verified outcome |

### Real-World Measurement
As of **February 2026**, Cursor reports that **35% of pull requests** merged into its own product are produced by autonomous agents running on cloud VMs. Cursor's CEO Michael Truell projects the vast majority of development work will look this way within a year.

### The Changing Verification Surface
In the cloud-agent era, agents work for hours on dedicated VMs and return **quickly reviewable artifacts** — logs, video recordings, and live previews — rather than line-level diffs. A human cannot read twelve diffs at once, but they **can** scan twelve previews.

> The 10-80-10 rule is the quantified version of: *"Humans define intent. Agents execute. Humans verify outcomes."*`,
    questions: [
      {
        question: "What does the thesis say happens to the human role in the Agent Factory — do humans get eliminated?",
        options: ["Yes — AI fully replaces humans over time", "No — humans are promoted from operators to supervisors and architects of outcomes", "Humans only keep creative tasks"],
        correctIndex: 1,
      },
      {
        question: "Who is credited with originally practicing the 10-80-10 operating rhythm?",
        options: ["Elon Musk", "Bill Gates", "Steve Jobs"],
        correctIndex: 2,
      },
      {
        question: "In the 10-80-10 rule applied to the Agent Factory, what happens in the middle 80%?",
        options: ["Humans manually execute tasks", "AI Workers execute: compose tools, spawn sub-agents, deliver outcomes", "The spec is written and reviewed"],
        correctIndex: 1,
      },
      {
        question: "As of February 2026, what percentage of Cursor's own pull requests were produced by autonomous agents?",
        options: ["10%", "35%", "75%"],
        correctIndex: 1,
      },
      {
        question: "What three things does the thesis say remain for humans after AI absorbs execution?",
        options: ["Planning, coding, and testing", "Intent, Verification, and Outcome", "Strategy, design, and management"],
        correctIndex: 1,
      },
      {
        question: "Why is the verification surface changing from diffs to artifacts in the cloud-agent era?",
        options: ["Diffs are harder to generate automatically", "A human cannot read twelve diffs at once but can scan twelve previews — making parallel work practical", "Artifacts are cheaper to produce"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "personal-agents",
    title: "Personal Agents & The Two-Layer Model",
    emoji: "🧑‍💼",
    content: `## Identic AI — Your Personal Agent

As AI Workers multiply, no professional can orchestrate them all by hand. They'll act through a **personal agent** that reflects their judgment and delegates on their behalf.

Don Tapscott calls this **identic AI** — "identic" because this agent carries your **identity**: your judgment, your preferences, your authority. It's not a generic assistant — it's your representative.

> The Agent Factory manufactures the AI-Native Company's workforce. Identic AI is how each human commands it.

---

## The Two-Layer Model

The future firm operates across two connected layers:

| Layer | What It Is | Who It Serves | What It Does |
|---|---|---|---|
| **Edge Layer** | Personal identic agents | The individual | Translates human intent, delegates to AI Workers, governs on behalf of the principal |
| **AI Workforce Layer** | Role-based AI Workers | The enterprise | Executes tasks, coordinates workflows, delivers verified outcomes |

### Why Both Layers Are Necessary

**Personal agents without an industrialized workforce** = digital assistants with no one to command.

**AI Workforce Layer without personal agents at the edge** = humans forced back into manual orchestration.

> The Two-Layer Model is what makes the Agent Factory thesis **complete**: an industrialized workforce at the core, human sovereignty at the edge, and specs as the contract language between them.`,
    questions: [
      {
        question: "Who coined the term 'identic AI' as cited in the thesis?",
        options: ["Sam Altman", "Don Tapscott", "Dario Amodei"],
        correctIndex: 1,
      },
      {
        question: "Why is a personal agent called 'identic'?",
        options: ["It identifies security threats", "It carries your identity — your judgment, preferences, and authority — and acts as your representative", "It has a unique system identifier"],
        correctIndex: 1,
      },
      {
        question: "In the Two-Layer Model, what is the Edge Layer?",
        options: ["The cloud infrastructure layer", "Personal identic agents that serve the individual", "The data storage layer"],
        correctIndex: 1,
      },
      {
        question: "What happens if you have a personal agent at the edge but NO industrialized AI workforce behind it?",
        options: ["The system runs more efficiently", "You have a digital assistant with no one to command", "Workers compete with each other"],
        correctIndex: 1,
      },
      {
        question: "What happens if you have an AI Workforce Layer but NO personal agents at the edge?",
        options: ["The workforce becomes too expensive", "Humans are forced back into manual orchestration", "Workers cannot be retired"],
        correctIndex: 1,
      },
      {
        question: "What does the thesis describe as the 'contract language' between humans at the edge and the AI workforce?",
        options: ["API keys", "Specs", "Payment protocols"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "two-modes",
    title: "The Two Modes of General Agent Use",
    emoji: "⚡",
    content: `## Two Very Different Ways to Use General Agents

General agents like Claude Code, OpenCode, Claude Cowork, and OpenWork can be used in two fundamentally different ways.

---

### Mode 1 — Problem-Solving Engagement

A human uses a general agent to **solve an immediate problem**. When the problem is solved, the session ends. Nothing permanent is manufactured.

**Split by audience:**
- **Engineers** → Claude Code or OpenCode (terminal-native, tuned for code, infrastructure, systems)
- **Domain experts** → Claude Cowork or OpenWork (knowledge-work tools for documents, spreadsheets, briefs, reviews)

**Governed by:** The **Seven Principles** of General Agent Problem Solving

---

### Mode 2 — Manufacturing Engagement

A human uses a general agent to **build something that survives the session**: an agent harness, a workflow, or a custom AI Worker.

**Always uses:** Claude Code or OpenCode — regardless of who is building — because building an AI Worker is **fundamentally a coding task**.

**Governed by:** The **Seven Invariants** of the Agent Factory

---

### The Key Distinction

| Mode | Audience & Tools | Output | Governed By |
|---|---|---|---|
| **Problem-solving** | Engineer: Claude Code/OpenCode; Domain expert: Cowork/OpenWork | An immediate outcome | Seven Principles |
| **Manufacturing** | Anyone, always Claude Code or OpenCode | A piece of workforce | Seven Invariants |

> **The Principles govern the session. The Invariants govern the architecture.**
> Principles are the conduct. Invariants are the constitution.

The 10-80-10 rule applies equally to both modes: whether solving a problem or building a Worker, the human's time still splits into intent, execution, and verification.`,
    questions: [
      {
        question: "What are the two modes of general agent use described in the thesis?",
        options: ["Supervised mode and autonomous mode", "Problem-solving engagement and Manufacturing engagement", "Basic mode and advanced mode"],
        correctIndex: 1,
      },
      {
        question: "In a problem-solving engagement, which tools do engineers use?",
        options: ["Claude Cowork or OpenWork", "Paperclip", "Claude Code or OpenCode"],
        correctIndex: 2,
      },
      {
        question: "In a problem-solving engagement, which tools do domain experts use?",
        options: ["Claude Code or OpenCode", "Claude Cowork or OpenWork", "Dapr Agents"],
        correctIndex: 1,
      },
      {
        question: "Why must manufacturing engagements ALWAYS use Claude Code or OpenCode, regardless of who is building?",
        options: ["Because it has the most storage capacity", "Building an AI Worker is fundamentally a coding task", "Because Anthropic requires it for licensing reasons"],
        correctIndex: 1,
      },
      {
        question: "What governs problem-solving engagements?",
        options: ["The Seven Invariants", "The Seven Principles", "The 10-80-10 Rule"],
        correctIndex: 1,
      },
      {
        question: "What governs manufacturing engagements?",
        options: ["The Seven Principles", "The 10-80-10 Rule", "The Seven Invariants"],
        correctIndex: 2,
      },
      {
        question: "How does the thesis distinguish Principles from Invariants?",
        options: ["They are equivalent — both govern the same things", "Principles are the conduct (session); Invariants are the constitution (architecture)", "Principles apply to advanced users; Invariants apply to beginners"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "seven-principles",
    title: "The Seven Principles of Problem Solving",
    emoji: "🧭",
    content: `## The Seven Principles of General Agent Problem Solving

These seven principles are the **operating discipline of the session** — governing every problem-solving engagement.

---

### P1 — Bash is the Key
The agent can **act**, not just describe. Having shell access means the agent can execute commands, verify results, and change state in the real world — not just talk about it.

### P2 — Code as Universal Interface
Precision through structured formats — schemas, tables, code blocks — not prose. Code is unambiguous; prose is not.

### P3 — Verification as Core Step
Every meaningful output is **checked before it ships**. "Looks right" is the failure mode this principle exists to prevent.

### P4 — Small, Reversible Decomposition
Work moves in atomic steps; every step can be undone. Never make large irreversible changes when small reversible ones accomplish the same goal.

### P5 — Persisting State in Files
The conversation is volatile; the **filesystem is durable**. What mattered lives in a file, not in the context window.

### P6 — Constraints and Safety
Explicit permissions, explicit scope. Autonomy is **earned per task type**, not granted by default.

### P7 — Observability
You can **see what the agent did**. No black boxes, no surprises. Full traceability of every action.

---

### The Structure

> **P1–P5** are the five core working disciplines.
> **P6 (Constraints & Safety)** and **P7 (Observability)** are the two operational principles that wrap and govern the other five.

Think of P6 as *what the agent is allowed to touch* and P7 as *what it actually did*.`,
    questions: [
      {
        question: "What does Principle 1 'Bash is the Key' mean in practice?",
        options: ["The agent should use Bash scripts for all tasks", "The agent can act, not just describe — it has real execution capability", "Bash commands are more secure than GUI interactions"],
        correctIndex: 1,
      },
      {
        question: "What is Principle 2 of the Seven Principles?",
        options: ["Verification as Core Step", "Code as Universal Interface", "Persisting State in Files"],
        correctIndex: 1,
      },
      {
        question: "What failure mode does Principle 3 (Verification as Core Step) specifically aim to prevent?",
        options: ["Spending too much compute", "Accepting output that 'looks right' without actually checking it", "Creating overly complex workflows"],
        correctIndex: 1,
      },
      {
        question: "What is Principle 4 — Small, Reversible Decomposition — about?",
        options: ["Breaking the team into small groups", "Work moves in atomic steps; every step can be undone", "Using smaller AI models for efficiency"],
        correctIndex: 1,
      },
      {
        question: "Why is Principle 5 'Persisting State in Files' important?",
        options: ["Files are faster to access than memory", "The conversation is volatile; the filesystem is durable — important things must live in files", "Files can be shared across teams more easily"],
        correctIndex: 1,
      },
      {
        question: "What is Principle 6 — Constraints and Safety — about?",
        options: ["Making the agent work faster", "Explicit permissions, explicit scope — autonomy is earned per task type, not granted by default", "Reducing API costs"],
        correctIndex: 1,
      },
      {
        question: "Which two principles are described as 'operational' — wrapping the five core disciplines?",
        options: ["Verification and Decomposition", "Constraints & Safety (P6) and Observability (P7)", "Bash is the Key (P1) and Observability (P7)"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "invariants-1-4",
    title: "Seven Invariants — Part 1 (I1–I4)",
    emoji: "⚙️",
    content: `## The Seven Invariants of the Agent Factory

*Seven rules that don't change.* These are the architectural requirements the Agent Factory must satisfy — regardless of which specific products realize them.

---

### Invariant 1: The Human Is the Principal

**Claim:** Every legitimate chain of action originates with a human who sets intent, defines the budget, draws the authority envelope, and owns the outcome. No exceptions.

**Why:** Intent does not generate itself. Judgment, values, budget authority, and outcome accountability are non-transferable.

**Failure if absent:** Unowned systems → unaccountable outcomes. Liability evaporates. Alignment becomes impossible.

**Current realization:** Authored specs, approval gates, budget declarations, and verification checkpoints.

---

### Invariant 2: Every Human Needs a Delegate

**Claim:** A human cannot scale their intent across a workforce by hand. They need a personal agent that holds their context, represents their judgment, carries their authority envelope, and brokers all downstream work.

**Why:** Without a delegate, the human becomes a bottleneck — the workforce sits idle waiting for instructions the human can't issue fast enough.

**Failure if absent:** Scale collapses to human typing speed.

**Current realization:** **OpenClaw** is the delegate we ship.

---

### Invariant 3: The Workforce Needs a Management Layer

**Claim:** A pile of AI Workers is not a company. The workforce needs a layer that hires Workers, assigns work, enforces budgets, governs permissions, keeps the audit ledger, and retires Workers when their roles end.

**Why:** Coordination, accountability, and economic discipline are not emergent from individual agents. This layer is to the AI-Native Company what an **operating system is to a fleet of processes**.

**Failure if absent:** Workers collide. Budgets leak. No audit trail. Retired workers keep running.

**Current realization:** **Paperclip** is the management layer we ship.

---

### Invariant 4: Each Worker Picks Its Own Engine

**Claim:** Every AI Worker runs on some execution engine. The choice is made **per Worker**, not per company — matching reliability, cost, and operational burden to what the specific job demands.

**Why:** Mission-critical work needs durable execution; routine work does not. Forcing the whole workforce onto one engine fails both.

**Failure if absent:** Uniform engine choice → uniform trade-offs. Company either over-pays or under-trusts.

**Current realization:** Dapr Agents, Claude Managed Agents, OpenAI Agents SDK, Cursor SDK, OpenClaw-native.`,
    questions: [
      {
        question: "What is Invariant 1 of the Agent Factory?",
        options: ["Every human needs a delegate", "The workforce needs a management layer", "The human is the principal"],
        correctIndex: 2,
      },
      {
        question: "What happens without a human principal (Invariant 1 failure)?",
        options: ["The system runs faster but less accurately", "Unowned systems produce unaccountable outcomes — liability evaporates and alignment becomes impossible", "Workers become more autonomous"],
        correctIndex: 1,
      },
      {
        question: "What is Invariant 2 of the Agent Factory?",
        options: ["The workforce needs a management layer", "Every human needs a delegate", "The workforce runs on a nervous system"],
        correctIndex: 1,
      },
      {
        question: "What product is the current reference implementation for the delegate (Invariant 2)?",
        options: ["Paperclip", "Inngest", "OpenClaw"],
        correctIndex: 2,
      },
      {
        question: "What analogy does the thesis use for the management layer (Invariant 3)?",
        options: ["A bank that holds funds", "An operating system to a fleet of processes", "A project manager assigning tickets"],
        correctIndex: 1,
      },
      {
        question: "What product is the current management layer (Invariant 3)?",
        options: ["OpenClaw", "Dapr Agents", "Paperclip"],
        correctIndex: 2,
      },
      {
        question: "Why must each Worker pick its own engine (Invariant 4) rather than using one company-wide engine?",
        options: ["To avoid vendor lock-in for the whole company", "Mission-critical work needs durable execution while routine work does not — one engine fails both", "Because different Workers use different programming languages"],
        correctIndex: 1,
      },
      {
        question: "Which is NOT listed as a current engine option in the reference implementation?",
        options: ["Dapr Agents", "LangChain", "OpenAI Agents SDK"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "invariants-5-7",
    title: "Seven Invariants — Part 2 (I5–I7)",
    emoji: "🔧",
    content: `## Seven Invariants — Continued

### Invariant 5: Every Worker Runs Against a System of Record

**Claim:** Engine = what a Worker runs *on*. System of record = what a Worker runs *against*. Workers read from and write to an authoritative store — the durable record of what the company actually knows.

**Why:** A context window is **transient**. A system of record is **permanent**. Without it, agents hallucinate facts, double-write transactions, and produce artifacts no auditor can reconstruct.

**Failure if absent:** Outputs drift from reality. Two Workers tell the same customer different things. Liability is untraceable.

**Current realization:** Existing databases, CRMs, ERPs, ticketing systems, data warehouses, ledgers — all reached via **MCP** (every authoritative store becomes addressable to any Worker through an MCP server, under policy).

---

### Invariant 6: The Workforce Is Expandable Under Policy

**Claim:** The meta-layer exposes hiring as a **callable capability**. An authorized agent can generate a prompt, provision a runtime, and register a new AI Worker — inside the authority envelope, without waking a human.

**Why:** A fixed roster cannot fit a moving problem. When a capability gap appears (e.g., a customer writes in a language the workforce doesn't speak), the workforce must staff up on demand.

**Failure if absent:** Frozen roster. Every novel problem requires a human ticket. Scale stops where the org chart stops.

**Current realization:** **Claude Managed Agents** is the hiring substrate we ship.

---

### Invariant 7: The Workforce Runs on a Nervous System

**Claim:** Work arrives on its own and propagates between Workers without human routing. The workforce has a nervous system that provides four capabilities:
1. **External triggers** — schedules, webhooks, and inbound API calls wake Workers
2. **Internal events** — Workers hand off to each other without a human in the path
3. **Durability** — multi-step runs survive crashes (a 6-step Worker at 95%/step = only **74%** completion without durability vs. **~99.7%** with step memoization)
4. **Flow control** — concurrency caps and throttling prevent one customer's spike from starving others

**Failure if absent:** Without triggers → runs at human-typing speed. Without events → no coordination. Without durability → drops 1 in 4 runs. Without flow control → one spike drowns the rest.

**Current realization:** **Inngest** is the nervous system we ship. **Claude Code Routines** is the specialist trigger for coding-agent automation.

---

### The Trace: All 7 Invariants in Action

> A customer writes in **Bahasa Indonesia**. No AI Worker on the roster speaks it. Paperclip sees the gap and, within the authority envelope, calls its hiring API. A new Bahasa-speaking Worker is manufactured and deployed. It reads customer context from the System of Record, composes a reply, writes the log back, and delivers the reply through OpenClaw — all without waking a human.`,
    questions: [
      {
        question: "What is the key distinction in Invariant 5 between 'engine' and 'system of record'?",
        options: ["Engine is what the Worker runs on; system of record is what the Worker runs against", "Engine is the model; system of record is the agent", "Engine is the hardware; system of record is the cloud"],
        correctIndex: 0,
      },
      {
        question: "Why can't a context window replace a system of record?",
        options: ["Context windows are too slow", "A context window is transient; a system of record is permanent — without it agents hallucinate and outputs drift from reality", "Context windows cost more than databases"],
        correctIndex: 1,
      },
      {
        question: "How do Workers reach the system of record according to the thesis?",
        options: ["Through REST APIs directly", "Via MCP — every authoritative store becomes addressable through an MCP server, under policy", "Through a central database gateway"],
        correctIndex: 1,
      },
      {
        question: "What is Invariant 6 — the workforce is expandable under policy — about?",
        options: ["Hiring more human employees", "Hiring as a callable capability — an authorized agent can provision a new Worker without waking a human", "Expanding the cloud budget"],
        correctIndex: 1,
      },
      {
        question: "What product is the current hiring substrate for Invariant 6?",
        options: ["Paperclip", "Inngest", "Claude Managed Agents"],
        correctIndex: 2,
      },
      {
        question: "A 6-step Worker at 95% per-step reliability completes what percentage of runs WITHOUT durable execution?",
        options: ["95%", "74%", "50%"],
        correctIndex: 1,
      },
      {
        question: "A 6-step Worker at 95% per-step reliability completes what percentage of runs WITH step memoization and retry?",
        options: ["99.7%", "95%", "85%"],
        correctIndex: 0,
      },
      {
        question: "What product is named as the current nervous system for Invariant 7?",
        options: ["Dapr Agents", "OpenClaw", "Inngest"],
        correctIndex: 2,
      },
      {
        question: "What specialist trigger does the thesis name specifically for coding-agent automation?",
        options: ["Inngest Routines", "Dapr Triggers", "Claude Code Routines"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "engines",
    title: "Picking Your Engine",
    emoji: "🛠️",
    content: `## The Named Engines, Compared

Four engines are not mutually exclusive — a serious Agent Factory may use all of them. They represent different theories of where the agent ends and the infrastructure begins.

| Dimension | OpenAI Agents SDK | Claude Managed Agents | Dapr Agents | Cursor SDK |
|---|---|---|---|---|
| **Primary axis** | Model-native harness | Fully managed runtime | Durable distributed agents | Harness-first cloud agent platform |
| **Vendor lock-in** | High (OpenAI-tuned) | **Total** (harness + runtime + model) | **None** (Apache 2.0, CNCF) | High at harness; model-agnostic under |
| **Durability** | Sandbox snapshot + rehydrate | Server-side session persistence | Dapr Workflow checkpointing | Cloud VM persistence per task |

---

## Picking Your Engine

Two axes drive the choice: **how bad is failure** and **who runs the infrastructure**.

| Job Profile | Engine | Why |
|---|---|---|
| **Can't fail** | Dapr Agents wrapping an SDK | Durable execution, auto-recovery, full observability |
| **Shouldn't fail, don't want to operate** | Claude Managed Agents | Hosted and operated for you |
| **Shouldn't fail, want portability** | OpenAI Agents SDK | Production-grade, self-hosted, vendor-flexible |
| **Nice if it works** | OpenClaw-native | Lightweight, fast to deploy |
| **Engineering fleet, parallel cloud agents** | Cursor SDK | Purpose-built for parallel coding agents |

---

## Harness vs. Compute Plane

Every engine has two planes:
- **Harness** — the control plane: agent loop, model calls, tool routing, approvals, tracing, recovery
- **Compute** — the execution plane: the sandbox where model-directed code reads files, runs commands, writes artifacts

> Credentials stay in the **harness**. Untrusted model-generated code stays in the **compute sandbox**. The compute plane can be swapped without rewriting the agent.

**Important:** Triggers (Inngest, Claude Code Routines) and sandboxes (E2B, Cloudflare, Daytona, Modal) are **orthogonal choices** — they work with any engine.`,
    questions: [
      {
        question: "In picking an engine, what two axes primarily drive the choice?",
        options: ["Speed and cost", "How bad is failure, and who runs the infrastructure", "Model quality and latency"],
        correctIndex: 1,
      },
      {
        question: "Which engine has ZERO vendor lock-in (Apache 2.0, CNCF)?",
        options: ["Claude Managed Agents", "Dapr Agents", "OpenAI Agents SDK"],
        correctIndex: 1,
      },
      {
        question: "What is the vendor lock-in level for Claude Managed Agents?",
        options: ["None", "Partial — only at the model level", "Total — harness, runtime, and model"],
        correctIndex: 2,
      },
      {
        question: "For a job profile described as 'Can't fail', which engine does the thesis recommend?",
        options: ["OpenAI Agents SDK", "OpenClaw-native", "Dapr Agents wrapping an SDK"],
        correctIndex: 2,
      },
      {
        question: "For an 'Engineering fleet, parallel cloud agents' job profile, which engine is recommended?",
        options: ["Dapr Agents", "Claude Managed Agents", "Cursor SDK"],
        correctIndex: 2,
      },
      {
        question: "What is the 'harness' in an agent engine?",
        options: ["The compute sandbox where code runs", "The control plane — agent loop, model calls, tool routing, approvals, tracing, recovery", "The physical server hardware"],
        correctIndex: 1,
      },
      {
        question: "What is the 'compute plane' in an agent engine?",
        options: ["The cloud billing dashboard", "The execution environment where model-directed code reads files, runs commands, and writes artifacts", "The model weights stored in memory"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "workforce-future",
    title: "Workforce Opportunity & Future Trajectories",
    emoji: "🚀",
    content: `## The Workforce Opportunity

AI will unbundle jobs into tasks. Some tasks will be automated entirely. But unbundling also creates **new combinations** — new roles, new businesses, new markets.

### New Roles Created by the Agent Factory Era
- Agent designers
- Outcome architects
- Verification specialists
- Domain experts who teach machines what "correct" looks like in their field

By **2030**, the WEF Future of Jobs Report 2025 estimates **59 out of every 100 workers** globally will require reskilling or upskilling. This is one of the largest workforce training opportunities in history.

---

## The Infrastructure Is Already Physical

The Agent Factory era is not hypothetical:
- By **January 2026**, US data center construction reached **$42 billion annualized** — more than office construction
- A single hyperscale AI facility requires up to **50,000 tons of copper** — up to 10× a conventional data center
- Meta, Google, Amazon, and Microsoft project over **$600 billion** in AI infrastructure spending for 2026
- By **mid-2026**, single-digit-headcount firms were reporting **billion-dollar annualized revenue** against AI-operated workforces

---

## Three Future Trajectories

**1. Physical AI Workers**
The same factory architecture extends to embodied workers — robots, autonomous vehicles, factory machines — under the same authority envelope and management layer. The invariants don't change; the compute layer adds a body.

**2. Fully Autonomous Economic Agents**
As AI Workers gain durable identity, payment rails, reputation, and contractual capacity, they become economic actors — buying from other companies' AI Workers, selling capacity, accumulating capital, entering agreements without human sign-off per transaction.

**3. Cross-Company Workforce Mobility**
AI Workers become portable — hired into one company, transferred to another, possibly working for several simultaneously. Paperclip's hiring API generalizes from intra-company to cross-company. A real labor market for AI Workers, with rates, reputations, specializations, and turnover.

> **The invariants hold. The realizations evolve. The thesis stands.**`,
    questions: [
      {
        question: "By what year does the WEF estimate 59 out of 100 workers globally will need reskilling?",
        options: ["2028", "2030", "2035"],
        correctIndex: 1,
      },
      {
        question: "What new job roles does the thesis predict will be created in the Agent Factory era?",
        options: ["Programmers, designers, and testers", "Agent designers, outcome architects, verification specialists, and domain experts", "Cloud architects, data engineers, and DevOps engineers"],
        correctIndex: 1,
      },
      {
        question: "By January 2026, US data center construction reached what annualized figure?",
        options: ["$10 billion", "$42 billion", "$100 billion"],
        correctIndex: 1,
      },
      {
        question: "How much copper can a single hyperscale AI facility require?",
        options: ["Up to 5,000 tons", "Up to 50,000 tons — up to 10× a conventional data center", "Up to 500 tons"],
        correctIndex: 1,
      },
      {
        question: "How much AI infrastructure spending did the four largest tech companies project for 2026?",
        options: ["$100 billion", "$300 billion", "Over $600 billion"],
        correctIndex: 2,
      },
      {
        question: "What are the three future trajectories named in the thesis?",
        options: ["Physical AI Workers, fully autonomous economic agents, and cross-company workforce mobility", "Quantum computing, AR/VR, and blockchain", "Autonomous vehicles, smart contracts, and satellite internet"],
        correctIndex: 0,
      },
      {
        question: "What does 'cross-company workforce mobility' mean in the future trajectories?",
        options: ["Human employees moving between AI companies", "AI Workers becoming portable — hired into one company, transferred to another, possibly working for several simultaneously", "AI models being licensed across company boundaries"],
        correctIndex: 1,
      },
      {
        question: "Which publication declared 'the model is becoming a commodity and the harness is becoming the product'?",
        options: ["Harvard Business Review", "Forbes", "The New Stack"],
        correctIndex: 2,
      },
    ],
  },
];
