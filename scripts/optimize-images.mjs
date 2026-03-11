import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = path.resolve(process.cwd());
const IMAGES_DIR = path.join(PROJECT_ROOT, "public", "images");

const EXT_RE = /\.(png|jpe?g|webp)$/i;

async function listFiles(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await listFiles(full)));
    } else if (entry.isFile() && EXT_RE.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function toWebpPath(inputPath) {
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath).replace(/\.(png|jpe?g|webp)$/i, "");
  return path.join(dir, `${base}.webp`);
}

async function optimizeOne(inputPath) {
  const rel = path.relative(PROJECT_ROOT, inputPath);
  const outputPath = toWebpPath(inputPath);

  // Skip if already webp and exists
  if (inputPath.toLowerCase().endsWith(".webp")) return { rel, skipped: true };

  const img = sharp(inputPath, { failOn: "none" });
  const meta = await img.metadata();

  // Resize down only if huge (keeps clarity on mobile)
  const MAX_WIDTH = 2000;
  const pipeline =
    meta.width && meta.width > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img;

  // High quality webp for clarity (photos + UI exports)
  await pipeline
    .webp({
      quality: 84,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath);

  return { rel, outputRel: path.relative(PROJECT_ROOT, outputPath) };
}

async function main() {
  try {
    await fs.access(IMAGES_DIR);
  } catch {
    console.error(`Missing folder: ${path.relative(PROJECT_ROOT, IMAGES_DIR)}`);
    process.exit(1);
  }

  const files = await listFiles(IMAGES_DIR);
  if (files.length === 0) {
    console.log("No images found under public/images");
    return;
  }

  console.log(`Found ${files.length} images under public/images`);
  for (const file of files) {
    const res = await optimizeOne(file);
    if (res.skipped) continue;
    console.log(`webp: ${res.rel} -> ${res.outputRel}`);
  }
}

await main();
