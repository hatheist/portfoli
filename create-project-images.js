const fs = require('fs');
const path = require('path');

// Function to create featured project images
function createProjectImages() {
  console.log('Creating featured project images...');
  
  // Make sure public/images/projects directory exists
  const projectsDir = path.join(__dirname, 'public', 'images', 'projects');
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
    console.log('Created projects directory');
  }

  // Create a simple HTML placeholder image with project-specific styling
  const projects = [
    {
      name: 'photo-essay',
      title: 'Muslimah, Beyond the Veil',
      color: '#3f51b5', // Blue
      text: 'PHOTO ESSAY'
    },
    {
      name: 'podcast',
      title: 'The Dialogues Podcast',
      color: '#f50057', // Pink
      text: 'PODCAST'
    },
    {
      name: 'reels',
      title: 'Behind the Reel',
      color: '#ff9800', // Orange
      text: 'VIDEO REEL'
    }
  ];

  // Create an HTML file for each project that displays a colored background with text
  for (const project of projects) {
    const htmlPath = path.join(projectsDir, `${project.name}.html`);
    const svgPath = path.join(projectsDir, `${project.name}.svg`);
    
    // Create a simple SVG with project name and styling
    const svgContent = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${project.color}" />
  <text x="50%" y="40%" font-family="Arial" font-size="60" fill="white" text-anchor="middle">${project.text}</text>
  <text x="50%" y="60%" font-family="Arial" font-size="40" fill="white" text-anchor="middle">${project.title}</text>
</svg>`;
    
    fs.writeFileSync(svgPath, svgContent);
    console.log(`Created SVG image for ${project.name}`);
    
    // Also create a helper HTML file in case you want to convert to PNG manually
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>${project.title}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: ${project.color};
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .container {
      width: 80%;
    }
    .tag {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      letter-spacing: 2px;
    }
    .title {
      font-size: 3.5rem;
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="tag">${project.text}</div>
    <h1 class="title">${project.title}</h1>
  </div>
</body>
</html>`;
    
    fs.writeFileSync(htmlPath, htmlContent);
  }
  
  console.log('Project images created. SVG files are ready to use.');
  console.log('For best results, you might want to convert the SVGs to PNGs.');
}

createProjectImages(); 