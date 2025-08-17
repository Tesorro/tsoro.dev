import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public/images");
const formats = ["webp", "avif"];

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);

  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  for (const format of formats) {
    const outPath = path.join(dir, `${fileName}.${format}`);
    await sharp(filePath)
      .toFormat(format, { quality: 75 })
      .toFile(outPath);
    console.log(`✅ ${outPath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else {
      processImage(filePath);
    }
  });
}

(async () => {
  console.log("🚀 Оптимизация изображений...");
  await walkDir(inputDir);
  console.log("✨ Готово!");
})();
