const fs = require('fs');
const path = require('path');

console.log('🧹 Nettoyage du projet...\n');

// Files to delete
const filesToDelete = [
  'app/page-updated.tsx',
  'app/page-new.tsx',
  'app/page-new-with-modal.tsx',
  'app/page-fixed.tsx',
  'app/page-clean.tsx',
  'app/watch[id]page.tsx',
  'app/watch.tsx',
  'app/watch-video.tsx',
  'app/watch-page.tsx',
  'app/watch-id-page.tsx',
  'app/theme-slug.tsx',
  'app/theme.tsx',
  'app/themes.tsx'
];

// Delete individual files
filesToDelete.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted: ${file}`);
    } catch (e) {
      console.log(`✗ Failed to delete ${file}: ${e.message}`);
    }
  }
});

// Delete directories
const dirsToDelete = [
  'app/watch'
];

dirsToDelete.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✓ Deleted directory: ${dir}`);
    } catch (e) {
      console.log(`✗ Failed to delete ${dir}: ${e.message}`);
    }
  }
});

// Clear .next cache
const nextCachePath = path.join(__dirname, '.next');
if (fs.existsSync(nextCachePath)) {
  try {
    fs.rmSync(nextCachePath, { recursive: true, force: true });
    console.log('✓ Cleared .next cache');
  } catch (e) {
    console.log(`✗ Failed to clear .next: ${e.message}`);
  }
}

console.log('\n✅ Cleanup complete!');
