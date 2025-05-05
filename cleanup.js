const fs = require('fs');
const path = require('path');

/**
 * This script helps clean up the project by removing unwanted files and components.
 * It will:
 * 1. Remove the original owner's attribution in README.md
 * 2. Add a script to remove sample images that aren't relevant to the current project
 */

// Function to remove unwanted images
function removeUnwantedImages() {
  console.log('Removing unwanted sample images...');
  
  // Get the list of galleries
  const galleryDir = path.join(__dirname, 'public', 'gallery');
  
  try {
    // Check if the directory exists before reading
    if (fs.existsSync(galleryDir)) {
      const portfolioSections = [
        'Reels',
        'Interview',
        'Photo Essay',
        'Podcast',
        'Marketing Campaign',
        'Multmedia Internship',
        'The News Minute Article',
        'Magazine'
      ];
      
      // Keep only the portfolio section folders and remove any other sample galleries
      const folders = fs.readdirSync(galleryDir);
      
      folders.forEach(folder => {
        const folderPath = path.join(galleryDir, folder);
        const isDirectory = fs.statSync(folderPath).isDirectory();
        
        // If it's a directory and not in our portfolioSections list, remove it
        if (isDirectory && !portfolioSections.includes(folder)) {
          console.log(`Removing sample gallery: ${folder}`);
          fs.rmSync(folderPath, { recursive: true, force: true });
        }
      });
      
      console.log('Sample galleries cleaned up.');
    } else {
      console.log('Gallery directory not found.');
    }
  } catch (error) {
    console.error('Error cleaning up sample images:', error);
  }
}

// Function to update README file
function updateReadme() {
  console.log('Updating README.md to remove previous owner attribution...');
  
  const readmePath = path.join(__dirname, 'README.md');
  
  try {
    if (fs.existsSync(readmePath)) {
      let readmeContent = fs.readFileSync(readmePath, 'utf8');
      
      // Replace the attribution section
      readmeContent = readmeContent.replace(
        /## Attributions[\s\S]*?(\n## |\n$)/,
        '$1'
      );
      
      // Remove any other mentions of the previous owner
      readmeContent = readmeContent.replace(/Seth Osher/g, 'Hathim Ashir');
      
      // Write the updated README
      fs.writeFileSync(readmePath, readmeContent);
      console.log('README.md updated.');
    } else {
      console.log('README.md not found.');
    }
  } catch (error) {
    console.error('Error updating README:', error);
  }
}

// Run the cleanup functions
removeUnwantedImages();
updateReadme();

console.log('Cleanup complete!');
console.log('Note: You should review the project manually to ensure all unwanted content is removed.');
console.log('Additional steps:');
console.log('1. Update the LICENSE file with your information if needed');
console.log('2. Manually check for any remaining sample images in the "public" folder');
console.log('3. Check for any remaining attribution or sample content in other files'); 