import { Typography, Paper, Button } from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import { galleryList } from '@/data/galleryList';
import PortfolioSection from '@/components/PortfolioSection';
import ResponsiveEmbed from '@/components/ResponsiveEmbed';
import LaunchIcon from '@mui/icons-material/Launch';

export async function getStaticProps() {
  const galleries = galleryList();
  return {
    props: {
      galleries
    }
  };
}

export default function CampaignPage({ galleries }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PortfolioSection
      title="Marketing Campaign"
      subtitle="📢 Sahodari Foundation – Campaign for Change"
      description="A multi-format campaign for Sahodari Foundation, India's pioneering organization advocating for transgender and gender-diverse communities."
      galleries={galleries}
      section="campaign"
      keywords="marketing campaign, sahodari foundation, transgender rights, advocacy, social impact, NGO, branding, multimedia"
    >
      <Typography variant="body1" paragraph>
        As part of a communication initiative for Sahodari Foundation, India&apos;s pioneering organization advocating for transgender and gender-diverse communities, we developed a multi-format campaign to amplify their voice and mission.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Founded by activist and artist Kalki Subramaniam, Sahodari has led landmark victories in transgender inclusion and empowerment across India. Our campaign focused on storytelling, visibility, and accessibility — through:
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
        <Typography component="li" variant="body1" paragraph>
          <strong>📖 Brochure Design</strong> – Clear, inclusive, and visually rich material that introduces the foundation&apos;s work and impact.
        </Typography>
        <Typography component="li" variant="body1" paragraph>
          <strong>📱 Social Media Carousels</strong> – A series of informative and empowering Instagram posts tailored for wider engagement.
        </Typography>
        <Typography component="li" variant="body1" paragraph>
          <strong>📝 Blog Article</strong> – A longform narrative piece highlighting the foundation&apos;s journey, milestones, and lived experiences from the community.
        </Typography>
        <Typography component="li" variant="body1" paragraph>
          <strong>🎞️ Reel Video</strong> – A short, emotionally resonant video that brings together visuals, voiceovers, and text to share Sahodari&apos;s message in under a minute.
        </Typography>
      </Typography>
      
      <Typography variant="body1" paragraph>
        The campaign was designed to uplift not just visibility, but dignity and solidarity — centering trans voices in every step of the process.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>Sahodari Foundation Campaign Materials</Typography>
        
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Canva Carousel</Typography>
        <ResponsiveEmbed 
          src="https://www.canva.com/design/DAGmX6qO_HM/AKM9FXJJy-0kBBylokWuVA/view?embed" 
          title="Sahodari Canva Carousel"
          aspectRatio="125%"
        />
        
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 4 }}>Promo Video</Typography>
        <ResponsiveEmbed 
          src="https://www.canva.com/design/DAGmiwPIaGU/cSmF-sUUYhBC7m316njkeA/watch?embed" 
          title="Green and White Collage World NGO Day Instagram Reel Video"
          aspectRatio="177.7778%"
        />
        
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 4 }}>Campaign Blog</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href="https://drive.google.com/file/d/1YizGSaXHnSc5Vztos789F8pSGijBdSP1/view?usp=drivesdk" 
          target="_blank"
          endIcon={<LaunchIcon />}
          sx={{ mt: 1 }}
        >
          View Campaign Blog (PDF)
        </Button>
      </Paper>
    </PortfolioSection>
  );
} 