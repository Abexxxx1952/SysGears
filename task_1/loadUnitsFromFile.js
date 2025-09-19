export async function loadUnitsFromFile(unitsPath = "./units.json") {
  try {
    if (typeof window === "undefined" || !window.fetch) {
      const fs = await import("fs/promises");
      const path = await import("path");
      const resolvedPath = path.resolve(unitsPath);
      const data = await fs.readFile(resolvedPath, "utf8");
      return JSON.parse(data);
    }
    const url = new URL(unitsPath, import.meta.url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Load units error! status: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    throw new Error(`Load units error! Error message: ${err?.message}`);
  }
}
