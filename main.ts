// Entry for make.fun's "The joke about the demo" (Node 22, standard library only).
// It writes one one-liner about working beside AI coding agents to /output/entry.txt.
// No network and no randomness, so both grading runs write the same bytes.
//
// Run it locally with MAKEFUN_OUTPUT_DIR standing in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });

// The demo crashes; the agent agrees with the crash, then "fixes" it by removing the evidence.
// Picked from 28 drafts: it won a 10-draft round robin against our own drafts (55.6%, no game lost)
// in pairwise duels run with the published judge brief, both slot orders.
const JOKE =
  'The demo crashed on stage. My agent read the stack trace, said "You\'re absolutely right!", and committed the fix: deleting the stack trace.';

// One line, UTF-8, no trailing newline: well inside the 280-code-point gate.
if ([...JOKE].length > 280) throw new Error('joke is over 280 code points');
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
