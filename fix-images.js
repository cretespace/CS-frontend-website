const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

function normalizeFileNames(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      normalizeFileNames(filePath); // recurse into subfolders
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".png") {
        const safeName = file
          .toLowerCase()
          .replace(/\s+/g, "-") // spaces → dashes
          .replace(/[^a-z0-9._-]/g, ""); // remove weird chars

        if (safeName !== file) {
          const newPath = path.join(dir, safeName);
          fs.renameSync(filePath, newPath);
          console.log(`Renamed: ${file} → ${safeName}`);
        }
      }
    }
  });
}

normalizeFileNames(publicDir);
