const fs = require('fs');
const path = require('path');

// List of sections that need open-graph images
const sections = [
  'photo-essay',
  'podcast',
  'reels',
  'documentary',
  'interview',
  'campaign',
  'internship',
  'articles',
  'photos',
  'magazine',
  'index' // For the homepage
];

// Function to create placeholder open-graph images
function createPlaceholders() {
  console.log('Creating placeholder open-graph images...');
  
  const openGraphDir = path.join(__dirname, 'public', 'open-graph');
  
  // Check if the directory exists
  if (!fs.existsSync(openGraphDir)) {
    fs.mkdirSync(openGraphDir, { recursive: true });
    console.log('Created open-graph directory');
  }
  
  // Create a simple HTML template to redirect to actual images when they exist
  for (const section of sections) {
    const filePath = path.join(openGraphDir, `${section}.png`);
    
    // Skip if the file already exists
    if (fs.existsSync(filePath)) {
      console.log(`Skipping ${section}.png - already exists`);
      continue;
    }
    
    // Create a text file with instructions instead of an actual image
    // This is a placeholder so the app won't break with 404 errors
    const placeholderText = `This is a placeholder for the ${section} open-graph image.
Please replace with an actual image (1200x630px) for proper social media previews.`;
    
    fs.writeFileSync(filePath + '.txt', placeholderText);
    console.log(`Created placeholder for ${section}.png`);
  }
  
  console.log('Placeholder creation complete!');
  console.log('Note: For production, replace these placeholder files with actual PNG images.');
}

createPlaceholders(); 