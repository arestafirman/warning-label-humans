// warning-label-humans — entry for Make.fun competition
// "Warning Label for Humans: One Line, Big Laugh"
// (slug: u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
//
// Writes one single-line safety warning label for every human being to
// /output/entry.txt, with no trailing newline. Deterministic: no network,
// no randomness, no dependencies. Node 22, TypeScript run as-is.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: 153 characters, pure ASCII, one line, one idea.
// Verified locally 2026-11-24: 153 bytes == 153 chars, 1 line, no trailing
// newline. Label form first (WARNING / DO NOT), the laugh lands in the last
const ENTRY =
  "WARNING: Contents: one human, mostly water, held together by caffeine and deadlines. DO NOT shake, microwave, or ask why the fridge light is on at 3 a.m.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
