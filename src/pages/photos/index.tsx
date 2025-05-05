import { Typography, Paper, Box } from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import { galleryList } from '@/data/galleryList';
import PortfolioSection from '@/components/PortfolioSection';
import InstagramEmbed from '@/components/InstagramEmbed';

export async function getStaticProps() {
  const galleries = galleryList();
  return {
    props: {
      galleries
    }
  };
}

export default function PhotosPage({ galleries }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PortfolioSection
      title="Published Photographs"
      subtitle="Photojournalism | Published in Maktoob Media"
      description="My photographs documenting powerful moments of protest were featured in Maktoob Media, capturing the urgency, emotion, and collective strength of student and citizen movements in Hyderabad."
      galleries={galleries}
      section="photos"
      keywords="published photos, photojournalism, protest, maktoob media, campus protest, palestine solidarity, hyderabad, visual storytelling"
    >
      <Typography variant="body1" paragraph>
        My photographs documenting two powerful moments of protest were featured in Maktoob Media, capturing the urgency, emotion, and collective strength of student and citizen movements in Hyderabad.
      </Typography>
      
      <Typography variant="body1" paragraph>
        The first series covered a campus protest demanding the closure of the Rohith Vemula institutional murder case. Through intimate frames of slogans, marches, and candlelight vigils, the images highlight ongoing student resistance and the fight for institutional accountability.
      </Typography>
      
      <Typography variant="body1" paragraph>
        The second series portrayed the Solidarity Gathering for Palestine held at Nampally, Hyderabad. From keffiyeh-clad demonstrators to handwritten placards, the visuals aimed to reflect a shared political consciousness that bridges local and global struggles for justice.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Both sets of photographs document protest not only as resistance but as remembrance and resilience, offering a visual archive of voices demanding to be heard.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>Published Photography</Typography>
        
        <Box sx={{ mb: 4 }}>
          <InstagramEmbed 
            postUrl="https://www.instagram.com/p/C6i7u9hMeaG/?utm_source=ig_embed"
            caption="Campus Protest for Justice"
          />
        </Box>
        
        <Box>
          <InstagramEmbed 
            postUrl="https://www.instagram.com/p/C8KJtaUM6wG/?utm_source=ig_embed"
            caption="Solidarity Gathering for Palestine"
          />
        </Box>
      </Paper>
    </PortfolioSection>
  );
} 