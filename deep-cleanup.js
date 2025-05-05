const fs = require('fs');
const path = require('path');

/**
 * Enhanced cleanup script to:
 * 1. Remove the original owner's attribution in README.md and LICENSE
 * 2. Remove any sample images that aren't relevant to the current project
 * 3. Replace placeholders with actual content
 */

// Function to remove any unwanted gallery folders
function removeUnwantedGalleries() {
  console.log('Checking for unwanted gallery folders...');
  
  const galleryDir = path.join(__dirname, 'public', 'gallery');
  
  try {
    if (fs.existsSync(galleryDir)) {
      const portfolioSections = [
        'Reels',
        'Interview',
        'Photo Essay',
        'Podcast',
        'Marketing Campaign',
        'Multmedia Internship',
        'The News Minute Article',
        'Magazine',
        'About.jpg'  // Keep the About image file
      ];
      
      console.log(`Examining gallery directory: ${galleryDir}`);
      const folders = fs.readdirSync(galleryDir);
      console.log(`Found ${folders.length} items in gallery directory`);
      
      folders.forEach(folder => {
        const folderPath = path.join(galleryDir, folder);
        
        // Skip if it's About.jpg or a known portfolio section
        if (folder === 'About.jpg' || portfolioSections.includes(folder)) {
          console.log(`Keeping needed gallery item: ${folder}`);
          return;
        }
        
        const isDirectory = fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory();
        
        // Remove any unknown directories
        if (isDirectory) {
          console.log(`Removing unwanted gallery: ${folder}`);
          fs.rmSync(folderPath, { recursive: true, force: true });
        } else {
          console.log(`Keeping file: ${folder}`);
        }
      });
      
      console.log('Unwanted galleries cleaned up.');
    } else {
      console.log('Gallery directory not found.');
    }
  } catch (error) {
    console.error('Error cleaning up unwanted galleries:', error);
  }
}

// Function to check for and remove placeholder images
function removePlaceholderImages() {
  console.log('Checking for placeholder images...');
  
  // List of image folders to check
  const imageFolders = [
    path.join(__dirname, 'public', 'images')
  ];
  
  // Keep these image files
  const keepFiles = [
    'me.jpg',
    'me-preview.jpg',
    'logo.png',
    'logo-preview.png',
    'icon.png'
  ];
  
  for (const folder of imageFolders) {
    try {
      if (fs.existsSync(folder)) {
        console.log(`Examining image directory: ${folder}`);
        const files = fs.readdirSync(folder);
        console.log(`Found ${files.length} files in ${folder}`);
        
        for (const file of files) {
          // Skip files we want to keep
          if (keepFiles.includes(file)) {
            console.log(`Keeping needed image: ${file}`);
            continue;
          }
          
          const filePath = path.join(folder, file);
          
          // If it's a directory, skip it as we're only looking for files
          if (fs.statSync(filePath).isDirectory()) {
            console.log(`Skipping directory: ${file}`);
            continue;
          }
          
          // Check if the file is an image
          const ext = path.extname(file).toLowerCase();
          if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
            console.log(`Removing placeholder image: ${file}`);
            fs.unlinkSync(filePath);
          } else {
            console.log(`Keeping non-image file: ${file}`);
          }
        }
      } else {
        console.log(`Image folder does not exist: ${folder}`);
      }
    } catch (error) {
      console.error(`Error checking folder ${folder}:`, error);
    }
  }
  
  console.log('Placeholder images cleanup complete.');
}

// Function to update README and LICENSE files
function updateAttributionFiles() {
  console.log('Updating attribution files...');
  
  // Update README.md
  const readmePath = path.join(__dirname, 'README.md');
  if (fs.existsSync(readmePath)) {
    console.log('Updating README.md...');
    let readmeContent = fs.readFileSync(readmePath, 'utf8');
    
    // Replace any mentions of the previous owner
    readmeContent = readmeContent.replace(/Seth Osher/g, 'Hathim Ashir');
    readmeContent = readmeContent.replace(/pilotso11/g, 'hathim-ashir');
    
    // Remove any attribution sections
    readmeContent = readmeContent.replace(
      /## Attributions[\s\S]*?(\n## |\n$)/,
      '$1'
    );
    
    fs.writeFileSync(readmePath, readmeContent);
    console.log('README.md updated.');
  } else {
    console.log('README.md not found.');
  }
  
  // Update LICENSE file
  const licensePath = path.join(__dirname, 'LICENSE');
  if (fs.existsSync(licensePath)) {
    console.log('Updating LICENSE file...');
    let licenseContent = fs.readFileSync(licensePath, 'utf8');
    
    // Replace any mentions of the previous owner
    licenseContent = licenseContent.replace(/Copyright \(c\) \d{4} Seth Osher/g, `Copyright (c) ${new Date().getFullYear()} Hathim Ashir`);
    
    fs.writeFileSync(licensePath, licenseContent);
    console.log('LICENSE file updated.');
  } else {
    console.log('LICENSE file not found.');
  }
}

// Function to check for and clean up resizes folders
function cleanupResizeFolders() {
  console.log('Cleaning up resize folders...');
  
  const galleryDir = path.join(__dirname, 'public', 'gallery');
  
  try {
    if (fs.existsSync(galleryDir)) {
      const folders = fs.readdirSync(galleryDir);
      console.log(`Found ${folders.length} items in gallery directory for resize cleanup`);
      
      folders.forEach(folder => {
        const folderPath = path.join(galleryDir, folder);
        
        // Skip if it's not a directory
        if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
          console.log(`Skipping non-directory: ${folder}`);
          return;
        }
        
        const resizesPath = path.join(folderPath, 'resizes');
        
        // Remove the resizes folder if it exists
        if (fs.existsSync(resizesPath) && fs.statSync(resizesPath).isDirectory()) {
          console.log(`Removing resizes folder in: ${folder}`);
          fs.rmSync(resizesPath, { recursive: true, force: true });
        } else {
          console.log(`No resizes folder found in: ${folder}`);
        }
      });
      
      console.log('Resize folders cleaned up.');
    } else {
      console.log('Gallery directory not found for resize cleanup.');
    }
  } catch (error) {
    console.error('Error cleaning up resize folders:', error);
  }
}

// Run all cleanup functions
console.log("Starting comprehensive cleanup...");
removeUnwantedGalleries();
removePlaceholderImages();
updateAttributionFiles();
cleanupResizeFolders();

console.log('Comprehensive cleanup complete!');
console.log('Additional manual steps you may want to take:');
console.log('1. Check if there are any remaining references to the previous owner in the codebase');
console.log('2. Verify that all images are displayed correctly in their respective sections');
console.log('3. Make sure the About.jpg image is properly set as the profile image');
console.log('4. Update any remaining metadata or configuration specific to your needs'); 