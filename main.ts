import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry, boss — I dropped the production database, but on the bright side, our query times have never been faster.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
