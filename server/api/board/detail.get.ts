import { promises as fs } from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { id } = query;

  console.log("Fetching detail for ID:", id);

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID parameter is required",
    });
  }

  try {
    const assetsPath = path.join(process.cwd(), "public/images");
    const files = await fs.readdir(assetsPath);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    const imageId = parseInt(id as string);
    const filename = imageFiles[imageId - 1];

    if (!filename) {
      throw createError({
        statusCode: 404,
        statusMessage: "Image not found",
      });
    }

    const detailInfo = {
      id: imageId,
      filename,
      url: `/images/${filename}`,
      related: [],
    };

    return {
      success: true,
      data: detailInfo,
    };
  } catch (err) {
    console.error("Error fetching image detail:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
