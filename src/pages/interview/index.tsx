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
  const interviewGalleryImages = await getSectionGalleryImages(
    'interview', 
    'Interview', 
    sizes, 
    captionWordCaps
  );
  
  return {
    props: {
      galleries,
      interviewGalleryImages
    }
  };
}

export default function InterviewPage({ 
  galleries, 
  interviewGalleryImages 
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PortfolioSection
      title="Interview"
      subtitle="Witnessing with the Lens: A Conversation with Chempkumar"
      description="In this interview, I spoke with photographer and educator Chempkumar, whose work focuses on caste violence, manual scavenging, and marginalized communities."
      galleries={galleries}
      section="interview"
      keywords="interview, photography, caste violence, marginalized communities, social justice, documentary photography"
    >
      <Typography variant="body1" paragraph>
        In this interview, I spoke with photographer and educator Chempkumar, whose work focuses on caste violence, manual scavenging, and marginalized communities. For him, photography is not just a medium — it is a long-term act of witnessing, shaped by ethics, empathy, and political commitment.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Chempkumar spoke about building trust with the people he photographs, rejecting sensationalism, and focusing on dignity. &quot;I don&apos;t shoot immediately,&quot; he says. &quot;I sit, I listen, I explain. That&apos;s how stories unfold honestly.&quot;
      </Typography>
      
      <Typography variant="body1" paragraph>
        With no institutional support, his work is grounded in personal commitment and collective memory. He sees each photograph as a potential archive — a tool for justice and resistance. &quot;Photography taught me political ideology,&quot; he says, and now he passes that forward through teaching and mentoring.
      </Typography>
      
      <Typography variant="body1" paragraph>
        His advice to young photographers is simple and powerful:
        &quot;Go to the ground. Witness like you&apos;re witnessing your own people. The camera is not just for seeing — it&apos;s for standing with.&quot;
      </Typography>
      
      {/* Display gallery images */}
      {interviewGalleryImages.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Gallery
          </Typography>
          <GalleryDisplay 
            sectionKey="interview" 
            photos={interviewGalleryImages} 
            caption="Behind the Interview"
          />
        </Box>
      )}
      
      <Typography variant="body1" paragraph>
        Listen to the full interview below.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <ResponsiveEmbed 
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hathim-ashir/interview-witnessing-with-the-lens-a-conversation-with-chempkumar&color=%23ff5500&inverse=false&auto_play=false&show_user=true" 
          title="Interview | Witnessing with the Lens" 
          height="166px"
          aspectRatio="0"
        />
      </Paper>
    </PortfolioSection>
  );
} 