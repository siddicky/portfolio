#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "src/app/work/projects");
const expected = {
  thebehumancompany: { title: "The Be Human Company — AI Governance Audit Framework", image: true },
  "offsec-kai": { title: "KAI — AI-Powered Mentor for OffSec Learners", image: false },
  oscar: { title: "OSCAR — Natural-Language Data Agent on Slack", image: false },
  "healthcare-rag-langgraph": { title: "Nymble Health — Healthcare RAG Assistant", image: true, link: "https://github.com/siddicky/healthcare-rag-langgraph" },
  "monetate-chat-app": { title: "Monetate — Monet Chat App", image: true },
  "ai-red-teaming": { title: "ai_red_teaming — Automated AI Red-Teaming Framework", image: true },
  "trustcall-ts": { title: "TrustCallJS — Validated LLM Tool-Calling in TypeScript", image: true, link: "https://github.com/siddicky/trustcall-ts" },
  "oh-my-dcode": { title: "oh-my-dcode — Multi-Agent Orchestration on Deep Agents", image: true, link: "https://github.com/siddicky/oh-my-dcode" },
  "assistant-ui-vue": { title: "assistant-ui-vue — AI Chat Interfaces for Vue 3", image: true, link: "https://github.com/siddicky/assistant-ui-vue" },
};

function fail(slug, message) {
  console.error(`${slug}: ${message}`);
  process.exitCode = 1;
}

function parseFrontmatter(file, slug) {
  if (!existsSync(file)) {
    fail(slug, "MDX file is missing");
    return null;
  }
  const text = readFileSync(file, "utf8");
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    fail(slug, "missing YAML frontmatter fences");
    return null;
  }
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const item = line.match(/^([A-Za-z][\w-]*):(?:\s*(.*))?$/);
    if (!item) continue;
    const [, key, raw = ""] = item;
    const value = raw.trim();
    data[key] = value.startsWith("[") && value.endsWith("]")
      ? value.slice(1, -1).trim() ? value.slice(1, -1).split(",").map((v) => v.trim().replace(/^['\"]|['\"]$/g, "")) : []
      : value.replace(/^['\"]|['\"]$/g, "");
  }
  return data;
}

function validate(slug) {
  const rule = expected[slug];
  if (!rule) {
    fail(slug, "slug is not locked");
    return;
  }
  const data = parseFrontmatter(join(root, `${slug}.mdx`), slug);
  if (!data) return;
  for (const key of ["title", "publishedAt", "summary"]) {
    if (!(key in data) || data[key] === "") fail(slug, `missing required key ${key}`);
  }
  if (data.title !== rule.title) fail(slug, `title must be exactly ${rule.title}`);
  if (data.publishedAt !== "2026-08-31") fail(slug, 'publishedAt must be exactly "2026-08-31"');
  if (rule.image && (!Array.isArray(data.images) || data.images.length === 0)) fail(slug, "images[] is required");
  if (!rule.image && "images" in data) fail(slug, "images[] must be absent");
  if (rule.link && data.link !== rule.link) fail(slug, `link must be exactly ${rule.link}`);
  if (!rule.link && "link" in data) fail(slug, "link must be absent");
}

const mode = process.argv[2];
if (mode === "--slug") {
  const slug = process.argv[3];
  if (!slug || !expected[slug]) fail(slug ?? "unknown", "expected a locked slug after --slug");
  else validate(slug);
} else if (mode === "--all") {
  const actual = existsSync(root) ? readdirSync(root).filter((name) => name.endsWith(".mdx")).map((name) => name.slice(0, -4)) : [];
  for (const slug of actual.filter((name) => !expected[name])) fail(slug, "unexpected project slug");
  for (const slug of Object.keys(expected)) validate(slug);
} else {
  console.error("Usage: validate-frontmatter.mjs --slug <slug> | --all");
  process.exitCode = 2;
}
