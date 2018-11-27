const fs = require("fs");
const path = require("path");

const indexDir = path.resolve(process.cwd(), "src/components/index.js");
const destDir = path.resolve(process.cwd(), "lib/index.js");

// that's all!
fs.copyFile(indexDir, destDir, (err) => {
  if (err) throw err;
});
