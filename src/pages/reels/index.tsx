import { Typography, Paper, Box } from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import { galleryList } from '@/data/galleryList';
import PortfolioSection from '@/components/PortfolioSection';
import ResponsiveEmbed from '@/components/ResponsiveEmbed';
import GalleryDisplay from '@/components/GalleryDisplay';
import { getSectionGalleryImages } from '@/data/getSectionGalleryImages';
import { sizes, captionWordCaps } from '@/options';

export async function getStaticProps() {
  const galleries = galleryList();
  
  // Get gallery images for this section
  const reelsGalleryImages = await getSectionGalleryImages(
    'reels', 
    'Reels', 
    sizes, 
    captionWordCaps
  );
  
  return {
    props: {
      galleries,
      reelsGalleryImages
    }
  };
}

export default function ReelsPage({ 
  galleries, 
  reelsGalleryImages 
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PortfolioSection
      title="Reels"
      subtitle="🎬 Behind the Reel: Iconic Movie Moments, Unveiled"
      description="A five-part reel series exploring the behind-the-scenes truths of some of cinema's most iconic scenes."
      galleries={galleries}
      section="reels"
      keywords="movie reels, filmmaking, behind the scenes, iconic moments, titanic, baahubali, big b, the dark knight, kiarostami"
    >
      <Typography variant="body1" paragraph>
        Behind the Reel is a five-part reel series exploring the behind-the-scenes truths of some of cinema's most iconic scenes — from Titanic to Baahubali. Each reel unpacks what the audience never saw: close calls, creative improvisations, physical endurance, and cinematic risks that shaped unforgettable moments on screen.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>Featuring:</strong>
      </Typography>

      <Box component="ul" sx={{ pl: 4 }}>
        <Typography component="li" variant="body1" paragraph>
          <strong>Titanic</strong> – The freezing reality behind the final scene and the ongoing debate around that floating door.
        </Typography>
        <Typography component="li" variant="body1" paragraph>
          <strong>Where Is the Friend's Home?</strong> – Kiarostami's quiet masterpiece built from real locations, unscripted emotion, and lived sincerity.
        </Typography>
        <Typography component="li" variant="body1" paragraph>
          <strong>Big B</strong> – A real explosion, a near-miss, and Mammootty's unshaken presence on set.
        </Typography>
        <Typography component="li" variant="body1" paragraph>
          <strong>The Dark Knight</strong> – Heath Ledger's iconic hospital scene saved by his quick improvisation during a real glitch.
        </Typography>
        <Typography component="li" variant="body1" paragraph>
          <strong>Baahubali</strong> – The epic waterfall climb shot over 109 days, driven by grit, injury, and vision.
        </Typography>
      </Box>

      <Typography variant="body1" paragraph>
        Told through engaging voice-overs and tight editing, these reels are cinematic stories in motion — not confined by time limits, but driven by narrative impact. The series balances pop culture nostalgia with insightful storytelling, making it both accessible and richly informative.
      </Typography>
      
      {/* Display gallery images */}
      {reelsGalleryImages.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Gallery
          </Typography>
          <GalleryDisplay 
            sectionKey="reels" 
            photos={reelsGalleryImages} 
            caption="Behind the Reel: Visual Elements"
          />
        </Box>
      )}

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Embedded Videos
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Titanic Reel
        </Typography>
        <ResponsiveEmbed 
          src="https://drive.google.com/file/d/1rrU2b5AkWoF9PI-9yTC3_6xNUeH-_zfM/preview" 
          title="Titanic Reel" 
        />

        <Typography variant="h6" gutterBottom>
          Big B Reel
        </Typography>
        <ResponsiveEmbed 
          src="https://drive.google.com/file/d/1rrU2b5AkWoF9PI-9yTC3_6xNUeH-_zfM/preview" 
          title="Big B Reel" 
        />

        <Typography variant="h6" gutterBottom>
          Where Is the Friend's Home? Reel
        </Typography>
        <ResponsiveEmbed 
          src="https://drive.google.com/file/d/1wPrcm7a3z5X7XG6SdFM_jGDM9nYFW26l/preview" 
          title="Where Is the Friend's Home? Reel" 
        />

        <Typography variant="h6" gutterBottom>
          The Dark Knight Reel
        </Typography>
        <ResponsiveEmbed 
          src="https://drive.google.com/file/d/12aqe1iJDh_RrN0tTE2nlWzBxW8GqQ4ra/preview" 
          title="The Dark Knight Reel" 
        />

        <Typography variant="h6" gutterBottom>
          Baahubali Reel
        </Typography>
        <ResponsiveEmbed 
          src="https://drive.google.com/file/d/1SmRZERdmYvxxqWRmlAoyjpyaa3eL93-Z/preview" 
          title="Baahubali Reel" 
        />
      </Paper>
    </PortfolioSection>
  );
} 