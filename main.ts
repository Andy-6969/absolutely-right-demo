// the-joke-about-the-demo entry (Node 22, standard library only): writes one one-liner about AI coding agents
// to /output/entry.txt. No network, no randomness: both runs write the same bytes.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The demo crashes; the agent agrees with the crash, then "fixes" it by removing the evidence.
const JOKE =
  'The demo crashed on stage. My agent read the stack trace, said "You\'re absolutely right!", and committed the fix: deleting the stack trace.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
