import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, basename, extname } from "path";

const ASSETS_DIR = new URL("../src/assets", import.meta.url).pathname;

const files = (await readdir(ASSETS_DIR)).filter((f) =>
  /\.(jpg|jpeg|png)$/i.test(f)
);

console.log(`Converting ${files.length} images to WebP…\n`);

for (const file of files) {
  const src = join(ASSETS_DIR, file);
  const dest = join(ASSETS_DIR, basename(file, extname(file)) + ".webp");

  const info = await sharp(src)
    .webp({ quality: 82, effort: 6 })
    .toFile(dest);

  const srcSize = (await import("fs")).statSync(src).size;
  const saving = (((srcSize - info.size) / srcSize) * 100).toFixed(1);

  console.log(
    `  ${file} → ${basename(dest)}  ${(srcSize / 1024).toFixed(0)} KB → ${(info.size / 1024).toFixed(0)} KB  (${saving}% smaller)`
  );

  // Remove the original after successful conversion
  await unlink(src);
}

console.log("\n✅ Done. All originals removed.");
