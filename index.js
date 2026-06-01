// file-reader.js
// Usage: node file-reader.js <path-to-file>

const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];

if (!filePath) {
  console.log("Usage: node file-reader.js <path-to-file>");
  process.exit(1);
}

try {
  const stats = fs.statSync(filePath);

  if (!stats.isFile()) {
    console.log("Provided path is not a file.");
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, "utf8");

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;

  const lineCount = content ? content.split("\n").length : 0;

  const fileSizeKB = (stats.size / 1024).toFixed(2);

  const fileExtension = path.extname(filePath) || "No extension";

  console.log("File Details:");
  console.log(`Words: ${wordCount}`);
  console.log(`Lines: ${lineCount}`);
  console.log(`Size: ${fileSizeKB} KB`);
  console.log(`Type: ${fileExtension}`);
} catch (error) {
  console.error("Error:", error.message);
}
