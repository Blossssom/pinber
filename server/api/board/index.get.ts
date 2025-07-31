import { promises as fs } from "fs";
import path from "path";

export default defineEventHandler(async () => {
  try {
    console.log("Fetching board images...");
    const assetsPath = path.join(process.cwd(), "public/images");

    try {
      await fs.access(assetsPath);
    } catch (err) {
      console.error("Error reading assets directory:", err);
    }

    const files = await fs.readdir(assetsPath);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    const images = imageFiles.map((filename, idx) => {
      return {
        id: idx + 1,
        filename,
        url: `/images/${filename}`,
        height: Math.floor(Math.random() * 300) + 200,
      };
    });

    return images;
  } catch (err) {
    console.error("Error reading images:", err);
    return [];
  }
});
