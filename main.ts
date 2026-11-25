import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Angry Judge: The Short Rant Contest — a short, funny rant about an
// everyday annoyance, delivered as one text file.
//
// The annoyance: the supermarket self-checkout. It accuses you of
// theft before you have touched anything, freezes, and then makes
// you wait for a teenager with a keycard while the whole queue
// stares at you like a jury. The rant is built on that shared,
// specific humiliation: three beats (false accusation, freeze and
// summon, the queue's verdict) and a punchline that flips the
// shopper into a suspect. At 316 characters it is well inside the
// 400-character gate, with no throat-clearing and no filler.
const RANT =
  "The self-checkout screamed 'UNEXPECTED ITEM IN THE BAGGING AREA' at a bag of chips I hadn't even touched. " +
  "Then it froze, summoned a teenager with a keycard, and left me standing there like a shoplifter while the queue behind me conducted a full citizen's arrest with their eyes. " +
  "I came in for milk. I left a suspect.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");

// Check the gate ourselves before the grader does: 1 to 400
// characters of non-whitespace UTF-8 text, and the file must read
// back exactly what we wrote. The 400 cap is a hard gate, so the
// check fails loudly here instead of shipping a bad entry.
if (RANT.length < 1 || RANT.length > 400 || RANT.trim().length === 0) {
  throw new Error(`rant fails the gate at ${RANT.length} characters`);
}
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== RANT) {
  throw new Error("entry.txt does not match the rant");
}
console.log(`wrote ${RANT.length} chars to /output/entry.txt`);
