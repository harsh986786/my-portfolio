import {
  Boxes,
  FlaskConical,
  Globe,
  LayoutDashboard,
  Network,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Edit this file to make the portfolio yours. All copy lives here.          */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "HARSH KESHRI",
  role: "Full-stack engineer",
  email: "harshkeshri.234.hk@gmail.com",
  headline: "Engineering fast, scalable web apps",
  subheadline:
    "I'm Harsh, a full-stack engineer who builds React and TypeScript products with the backend and infrastructure to keep them quick as they grow.",
  socials: [
    { label: "GitHub", href: "https://github.com/harsh986786" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-keshri-b549b631b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    
  ],
} as const;

/* ------------------------------- Skills ----------------------------------- */

export const frontend = {
  title: "Frontend",
  icon: LayoutDashboard as LucideIcon,
  blurb: "Interfaces that stay responsive with real data, real traffic, and real users.",
  groups: [
    { label: "Core", items: ["React", "Next.js", "TypeScript", "Astro"] },
    { label: "Interface", items: ["Tailwind CSS", "Radix UI", "Framer Motion", "Three.js"] },
    { label: "State and data", items: ["TanStack Query", "Zustand", "tRPC"] },
    { label: "Quality", items: ["Vitest", "Playwright", "Storybook", "Lighthouse CI"] },
  ],
};

export const backend = {
  title: "Backend & Infra",
  icon: Server as LucideIcon,
  blurb: "Boring, observable services that scale out before they fall over.",
  rows: [
    { label: "Runtime", value: "Node.js, Go" },
    { label: "Data", value: "PostgreSQL, Redis, ClickHouse" },
    { label: "Infra", value: "AWS, Terraform, Docker" },
    { label: "Observability", value: "OpenTelemetry, Grafana, Sentry" },
  ],
};

export const architecture = {
  title: "Architecture",
  icon: Network as LucideIcon,
  blurb: "Decisions made early that keep changes cheap later.",
  principles: [
    { icon: Boxes as LucideIcon, title: "Clear boundaries", body: "Domain-driven modules with explicit contracts." },
    { icon: Workflow as LucideIcon, title: "Event-driven pipelines", body: "Queues and idempotent consumers over tight coupling." },
    { icon: Globe as LucideIcon, title: "Edge-first delivery", body: "Cache close to users, compute close to data." },
    { icon: ShieldCheck as LucideIcon, title: "Designed for failure", body: "Timeouts, retries, and graceful degradation by default." },
  ],
};

export type ExperimentStatus = "In progress" | "Prototyping" | "Exploring";

export const experiments = {
  title: "Current experiments",
  icon: FlaskConical as LucideIcon,
  blurb: "What I'm building on the side to stay sharp.",
  items: [
    {
      title: "Local-first sync",
      body: "CRDTs with Yjs and SQLite in the browser, so apps work offline and merge cleanly.",
      status: "In progress" as ExperimentStatus,
    },
    {
      title: "Streaming agent UIs",
      body: "Tool-calling LLM agents with partial results rendered as they arrive.",
      status: "Prototyping" as ExperimentStatus,
    },
    {
      title: "Rust to WebAssembly",
      body: "Moving image processing off the main thread and out of JavaScript.",
      status: "Exploring" as ExperimentStatus,
    },
    {
      title: "WebGPU compute",
      body: "GPU-accelerated data visualisation for million-point charts.",
      status: "Exploring" as ExperimentStatus,
    },
  ],
};

/* ------------------------------- Projects --------------------------------- */

export type MockupKey = "pulse" | "relay" | "lumen";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  metric: { value: string; label: string };
  mockup: MockupKey;
  demo: string;
  github: string;
};

export const projects: Project[] = [
  {
    slug: "pulse",
    title: "Pulse",
    description:
      "A real-time product analytics platform. Ingests billions of events and answers dashboard queries while the data is still arriving.",
    tags: ["Next.js", "ClickHouse", "WebSockets"],
    metric: { value: "38ms", label: "p95 query latency across 2.1B events" },
    mockup: "pulse",
    demo: "https://example.com/pulse",
    github: "https://github.com/your-handle/pulse",
  },
  {
    slug: "relay",
    title: "Relay",
    description:
      "A deploy CLI and build cache for monorepos. Content-addressed caching skips work that hasn't changed, from install to tests to release.",
    tags: ["Go", "Turborepo", "AWS"],
    metric: { value: "4.2×", label: "faster CI pipelines than the previous setup" },
    mockup: "relay",
    demo: "https://example.com/relay",
    github: "https://github.com/your-handle/relay",
  },
  {
    slug: "lumen",
    title: "Lumen",
    description:
      "A headless storefront rendered at the edge. Streaming server components and aggressive image and cache tuning keep every page instant.",
    tags: ["React Server Components", "Edge", "Stripe"],
    metric: { value: "0.6s", label: "median LCP on 4G, 99 Lighthouse performance" },
    mockup: "lumen",
    demo: "https://example.com/lumen",
    github: "https://github.com/your-handle/lumen",
  },
];
