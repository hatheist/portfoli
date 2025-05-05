import { Typography, Paper, Button, Box } from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import { galleryList } from '@/data/galleryList';
import PortfolioSection from '@/components/PortfolioSection';
import ResponsiveEmbed from '@/components/ResponsiveEmbed';
import LaunchIcon from '@mui/icons-material/Launch';
import { getSectionGalleryImages } from '@/data/getSectionGalleryImages';
import { sizes, captionWordCaps } from '@/options';
import GalleryDisplay from '@/components/GalleryDisplay';

export async function getStaticProps() {
  const galleries = galleryList();
  
  // Get magazine gallery images
  const magazineGalleryImages = await getSectionGalleryImages(
    'magazine', 
    'Magazine', 
    sizes, 
    captionWordCaps
  );
  
  return {
    props: {
      galleries,
      magazineGalleryImages
    }
  };
}

export default function MagazinePage({ 
  galleries, 
  magazineGalleryImages 
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PortfolioSection
      title="Magazine"
      subtitle="Home – Cultural Crossroads"
      description="For this special issue of Home – Cultural Crossroads, I contributed both the cover photograph and in-depth stories capturing the layered cultural life of Hyderabad's Paramount Colony."
      galleries={galleries}
      section="magazine"
      keywords="magazine, home, cultural crossroads, hyderabad, paramount colony, medical tourism, migration, food culture, cover photographer"
    >
      {/* Display gallery images */}
      {magazineGalleryImages.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <GalleryDisplay 
            sectionKey="magazine" 
            photos={magazineGalleryImages} 
            caption="Magazine Cover"
          />
        </Box>
      )}
      
      <Typography variant="body1" paragraph>
        For this special issue of Home – Cultural Crossroads, I contributed both the cover photograph and in-depth stories capturing the layered cultural life of Hyderabad's Paramount Colony—a neighbourhood shaped by migration, medical tourism, and culinary hybridity.
      </Typography>
      
      <Typography variant="body1" paragraph>
        My writing explored why people from countries like Yemen, Somalia, and Nigeria are coming to India, particularly to Hyderabad, for medical treatment. Through conversations with families, patients, and local businesses, I documented how Paramount Colony has become a refuge and resource hub for many.
      </Typography>
      
      <Typography variant="body1" paragraph>
        I also traced the neighbourhood's distinct food culture, shaped by global palates and local ingredients, where shawarmas, mandi, and African dishes coexist with Hyderabadi staples. The stories spotlight resilience, adaptation, and the ways food and care bind communities in unfamiliar lands.
      </Typography>
      
      <Typography variant="body1" paragraph>
        The photo featured on the magazine's cover was part of a larger series capturing daily life in Paramount Colony—moments of care, commerce, waiting, and connection.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>Magazine Feature</Typography>
        
        <Button 
          variant="contained" 
          color="primary" 
          href="https://issuu.com/abhishek777/docs/homeculturalcrossroads" 
          target="_blank"
          endIcon={<LaunchIcon />}
          sx={{ mt: 1 }}
        >
          Read the full magazine on Issuu
        </Button>
        
        {/* Alternatively, we could embed the Issuu magazine directly with the ResponsiveEmbed component */}
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 4 }}>Magazine Preview</Typography>
        <ResponsiveEmbed
          src="https://e.issuu.com/embed.html?d=homeculturalcrossroads&hideIssuuLogo=true&u=abhishek777"
          title="Home - Cultural Crossroads Magazine"
          aspectRatio="65%"
        />
      </Paper>
    </PortfolioSection>
  );
} 