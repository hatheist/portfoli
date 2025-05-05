import { Typography, Paper } from '@mui/material';
import { InferGetStaticPropsType } from 'next';
import { galleryList } from '@/data/galleryList';
import PortfolioSection from '@/components/PortfolioSection';
import ResponsiveEmbed from '@/components/ResponsiveEmbed';

export async function getStaticProps() {
  const galleries = galleryList();
  return {
    props: {
      galleries
    }
  };
}

export default function PodcastPage({ galleries }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PortfolioSection
      title="Podcast"
      subtitle="🎙️ The Dialogues – One Conversation at a Time"
      description="Episode: 'Birding Pals – A Community in Flight' - exploring Hyderabad's birding community."
      galleries={galleries}
      section="podcast"
      keywords="podcast, birding, community, hyderabad, dialogues, conversation, birding pals, audio storytelling"
    >
      <Typography variant="body1" paragraph>
        In this episode of The Dialogues, we take a quiet walk into the world of Hyderabad's birding community — the Birding Pals. What began as a group of friends with binoculars and curiosity has grown into a deeply rooted collective that celebrates, documents, and preserves the birdlife of the city.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Joined by Rajeev Khandelwal, one of the founding members, this conversation traces the journey of the group — from early morning walks to creating a space of shared learning, environmental awareness, and urban belonging. Rajeev reflects on the joy of spotting rare birds, the importance of slowing down, and how Birding Pals has become a gentle but vital part of Hyderabad's ecological and cultural rhythm.
      </Typography>
      
      <Typography variant="body1" paragraph>
        This episode is a window into how ordinary friendships can create extraordinary impact — one bird, one walk, one conversation at a time.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>Listen to the Podcast</Typography>
        <ResponsiveEmbed 
          src="https://drive.google.com/file/d/1nWsAp6dvB2XtmmfPnxjGn3cEpjnMdtkv/preview" 
          title="Birding Pals Podcast"
          height="120px"
          aspectRatio="0"
        />
      </Paper>
    </PortfolioSection>
  );
} 