const fs = require('fs');
const path = require('path');

// List of portfolio sections that should have gallery folders
const portfolioSections = [
  'Reels',
  'Interview',
  'Photo Essay',
  'Podcast',
  'Marketing Campaign',
  'Multmedia Internship',
  'The News Minute Article',
  'Magazine',
  'Documentary'
];

// Function to create gallery metadata files
function createGalleryMetafiles() {
  console.log('Creating gallery metadata files...');
  
  const galleryDir = path.join(__dirname, 'public', 'gallery');
  
  // Check if the directory exists
  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
    console.log('Created gallery directory');
  }
  
  // Create metadata files for each section
  for (const section of portfolioSections) {
    const sectionDir = path.join(galleryDir, section);
    const metafilePath = path.join(sectionDir, '_index.mdx');
    
    // Create the section directory if it doesn't exist
    if (!fs.existsSync(sectionDir)) {
      fs.mkdirSync(sectionDir, { recursive: true });
      console.log(`Created directory for ${section}`);
    }
    
    // Skip if the metafile already exists
    if (fs.existsSync(metafilePath)) {
      console.log(`Skipping ${section}/_index.mdx - already exists`);
      continue;
    }
    
    // Create a template metafile
    const metafileContent = `---
title: ${section}
description: ${section} gallery for the portfolio of Hathim Ashir
keywords: hathim ashir, ${section.toLowerCase()}, portfolio, multimedia, storyteller
caption: ${section}
---
Gallery content for ${section}.
`;
    
    fs.writeFileSync(metafilePath, metafileContent);
    console.log(`Created metafile for ${section}`);
  }
  
  console.log('Gallery metafile creation complete!');
}

createGalleryMetafiles(); 