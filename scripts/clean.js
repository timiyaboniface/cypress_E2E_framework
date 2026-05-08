const fs = require('fs');
const path = require('path');

['cypress/reports', 'cypress/screenshots', 'cypress/videos'].forEach((folder) => {
  const fullPath = path.join(process.cwd(), folder);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`Deleted: ${folder}`);
  }
});
