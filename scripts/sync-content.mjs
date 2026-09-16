import fs from 'node:fs';
import path from 'node:path';

const SOURCE_BASE = process.env.OBSIDIAN_PATH || `C:\\Users\\rjohnson\\OneDrive - Johnson, Mirmiran Thompson\\Obsidian Notes\\RJ Notes\\Storytelling`;
const TARGET_CONTENT = path.resolve('content');

if (
  process.argv.includes('--no-sync') ||
  process.argv.includes('--skip-sync') ||
  process.env.npm_config_no_sync === 'true' ||
  process.env.npm_config_skip_sync === 'true'
) {
  console.log('⚡ Skipping OneDrive sync (using existing content)...');
  process.exit(0);
}

console.log(`Syncing notes from: ${SOURCE_BASE}`);
console.log(`Target directory: ${TARGET_CONTENT}`);

if (!fs.existsSync(SOURCE_BASE)) {
  console.error(`Error: Source path does not exist: ${SOURCE_BASE}`);
  process.exit(1);
}

// Clean target content directory
if (fs.existsSync(TARGET_CONTENT)) {
  fs.rmSync(TARGET_CONTENT, { recursive: true, force: true });
}
fs.mkdirSync(TARGET_CONTENT, { recursive: true });

// Copy index.md
const sourceIndex = path.join(SOURCE_BASE, 'index.md');
if (fs.existsSync(sourceIndex)) {
  fs.copyFileSync(sourceIndex, path.join(TARGET_CONTENT, 'index.md'));
  console.log('✓ Synced index.md');
}

// Recursive directory copy helper
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(path.join(SOURCE_BASE, 'wiki'), path.join(TARGET_CONTENT, 'wiki'));
console.log('✓ Synced wiki/ directory');

console.log('\n✨ Sync complete! Content folder is ready for Quartz.');
