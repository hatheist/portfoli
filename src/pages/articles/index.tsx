import { Typography, Paper, Button, Card, CardContent, CardActions, Box } from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import { galleryList } from '@/data/galleryList';
import PortfolioSection from '@/components/PortfolioSection';
import LaunchIcon from '@mui/icons-material/Launch';
import { getSectionGalleryImages } from '@/data/getSectionGalleryImages';
import { sizes, captionWordCaps } from '@/options';
import GalleryDisplay from '@/components/GalleryDisplay';

export async function getStaticProps() {
  const galleries = galleryList();
  
  // Get articles gallery images
  const articlesGalleryImages = await getSectionGalleryImages(
    'articles', 
    'The News Minute Article', 
    sizes, 
    captionWordCaps
  );
  
  return {
    props: {
      galleries,
      articlesGalleryImages
    }
  };
}

export default function ArticlesPage({ 
  galleries, 
  articlesGalleryImages 
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PortfolioSection
      title="Featured Articles"
      subtitle="Published Writing"
      description="In this feature for The News Minute, I explored the vibrant and evolving food landscape of Tolichowki—one of Hyderabad's most culturally diverse neighbourhoods."
      galleries={galleries}
      section="articles"
      keywords="articles, writing, journalism, Hyderabad, Tolichowki, food, culture, migration, The News Minute"
    >
      {/* Display gallery images */}
      {articlesGalleryImages.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <GalleryDisplay 
            sectionKey="articles" 
            photos={articlesGalleryImages} 
            caption="The News Minute Article"
          />
        </Box>
      )}
      
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Published Article | The News Minute
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Beyond the Hyderabadi Biryani: The Global Flavours of Tolichowki&apos;s Food Scene
          </Typography>
          <Typography variant="body1" paragraph>
            In this feature for The News Minute, I explored the vibrant and evolving food landscape of Tolichowki—one of Hyderabad&apos;s most culturally diverse neighbourhoods. Known for its influx of Arab and African students, expats, and migrants, Tolichowki&apos;s streets serve up more than just Hyderabadi biryani. From Yemeni mandi and Somali cuisine to Iranian kebabs and Iraqi-style shawarma, the area has quietly become a culinary melting pot of global flavours.
          </Typography>
          
          <Typography variant="body1" paragraph>
            Through on-ground interviews, taste trails, and community conversations, the piece uncovers how food in Tolichowki reflects migration, memory, and the everyday negotiations of belonging. It&apos;s a story about more than just what&apos;s on the plate—it&apos;s about the people who bring those plates to life, and the cross-cultural ties being formed, one meal at a time.
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            variant="contained" 
            endIcon={<LaunchIcon />}
            href="https://www.thenewsminute.com/telangana/beyond-the-hyderabadi-biriyani-the-global-flavours-of-tolichowkis-food-scene"
            target="_blank"
          >
            Read the article
          </Button>
        </CardActions>
      </Card>
    </PortfolioSection>
  );
} 