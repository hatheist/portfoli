import fs from 'fs';
import path from 'path';
import { Photo } from 'react-photo-album';
import { getSinglePhoto } from './getSinglePhoto';
import { imageTypes } from '../options';

// Helper function to determine if a file is an image
function isImage(file: string): boolean {
  const ext = path.extname(file).toLowerCase();
  return imageTypes.includes(ext);
}

// Function to get gallery images for a specific portfolio section
export async function getSectionGalleryImages(sectionKey: string, sectionFolder: string, sizes: number[], captionWordCaps: boolean): Promise<Photo[]> {
  try {
    // If this is the Photo Essay section, check for the Muslimah subfolder
    if (sectionKey === 'photo-essay') {
      const muslimahPath = path.join('public', 'gallery', sectionFolder, 'Muslimah');
      
      // Check if Muslimah subfolder exists and use it instead
      if (fs.existsSync(muslimahPath)) {
        const files = fs.readdirSync(muslimahPath);
        const imageFiles = files.filter(file => isImage(file));
        
        const photos = await Promise.all(
          imageFiles.map(async (file) => {
            const { name, ext } = path.parse(file);
            // Create a path that includes the Muslimah subfolder
            return await getSinglePhoto(
              captionWordCaps, 
              sizes, 
              `${sectionFolder}/Muslimah`, 
              name, 
              ext
            );
          })
        );
        
        return photos;
      }
    }
    
    // Standard path for other sections (or if Muslimah folder doesn't exist)
    const folderPath = path.join('public', 'gallery', sectionFolder);
    const files = fs.readdirSync(folderPath);
    
    // Filter out non-image files
    const imageFiles = files.filter(file => isImage(file));
    
    // Map each image file to a Photo object
    const photos = await Promise.all(
      imageFiles.map(async (file) => {
        const { name, ext } = path.parse(file);
        return await getSinglePhoto(captionWordCaps, sizes, sectionFolder, name, ext);
      })
    );
    
    return photos;
  } catch (error) {
    console.error(`Error loading gallery images for section ${sectionKey}:`, error);
    return [];
  }
} 