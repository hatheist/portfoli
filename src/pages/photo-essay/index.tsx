import { Typography, Paper, ImageList, ImageListItem, Dialog, useMediaQuery, Box } from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';
import { galleryList } from '@/data/galleryList';
import PortfolioSection from '@/components/PortfolioSection';
import { useTheme } from '@mui/material/styles';
import { getSectionGalleryImages } from '@/data/getSectionGalleryImages';
import { sizes, captionWordCaps } from '@/options';
import GalleryDisplay from '@/components/GalleryDisplay';
import Image from 'next/image';

export async function getStaticProps() {
  const galleries = galleryList();
  
  // Get Muslimah gallery images
  const photoEssayImages = await getSectionGalleryImages(
    'photo-essay', 
    'Photo Essay', 
    sizes, 
    captionWordCaps
  );
  
  return {
    props: {
      galleries,
      photoEssayImages
    }
  };
}

export default function PhotoEssayPage({ 
  galleries,
  photoEssayImages
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Google Drive link for the Photo Essay as specified in the request
  const photoEssayLink = "https://drive.google.com/file/d/1STbGrSRvg0BSVGXuivwseYOSnGo-MWHE/view?usp=drive_link";

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <PortfolioSection
      title="Photo Essay"
      subtitle="Muslimah, Beyond the Veil: Stories of Faith and Femininity"
      description="This photo essay explores Muslim womanhood through quiet moments of faith, solitude, and shared sisterhood."
      galleries={galleries}
      section="photo-essay"
      keywords="photo essay, muslimah, faith, femininity, muslim womanhood, photography, documentary photography"
    >
      <Typography variant="body1" paragraph>
        This photo essay explores Muslim womanhood through quiet moments of faith, solitude, and shared sisterhood. Each frame captures devotion not as retreat, but as resistance—a form of everyday defiance against erasure, prejudice, and forgetting. From prayers whispered in solitude to joy shared in companionship, these images trace how belief becomes belonging, how memory outlives violence, and how femininity and faith intertwine in strength, color, and calm.
      </Typography>
      
      <Typography variant="body1" paragraph>
        These women are not just subjects of the lens—they are seekers, storytellers, and witnesses. Their presence, veiled or unspoken, is a testament to inner resolve and divine intimacy. Through these images, Muslimah tells a visual story of rootedness, resistance, and the power of quiet revolution.
      </Typography>

      {/* Display gallery images */}
      {photoEssayImages.length > 0 ? (
        <GalleryDisplay 
          sectionKey="photo-essay" 
          photos={photoEssayImages} 
          caption="Muslimah, Beyond the Veil"
          showCaptions={true}
          externalLink={photoEssayLink}
        />
      ) : (
        <Typography variant="body1">Loading gallery images...</Typography>
      )}

      {/* Lightbox Dialog for clicked images - this is no longer needed with external link */}
      {!photoEssayLink && (
        <Dialog
          fullScreen={fullScreen}
          open={Boolean(selectedImage)}
          onClose={handleClose}
          maxWidth="lg"
        >
          {selectedImage && (
            <Box sx={{ position: 'relative', width: '100%', height: '90vh' }}>
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                style={{ objectFit: 'contain' }}
                onClick={handleClose}
                unoptimized // Since these could be dynamic paths
              />
            </Box>
          )}
        </Dialog>
      )}
    </PortfolioSection>
  );
} 