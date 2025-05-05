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

export default function DocumentaryPage({ galleries }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PortfolioSection
      title="Documentary"
      subtitle="Thottunkal Palli Since 1904 | Documenting the 118 years old ancient mosque in Malappuram Valanchery"
      description="This documentary explores Thottunkal Palli, a 118-year-old mosque located in the quiet village of Pookkattiri, in Malappuram, Kerala."
      galleries={galleries}
      section="documentary"
      keywords="documentary, thottunkal palli, mosque, kerala, malappuram, heritage, architecture, community, film, video"
    >
      <Typography variant="body1" paragraph>
        This documentary explores Thottunkal Palli, a 118-year-old mosque located in the quiet village of Pookkattiri, in Malappuram, Kerala. More than a religious space, the mosque stands as a symbol of the region's cultural identity and community life.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Through visuals and oral histories, the film traces the mosque's origins, architectural significance, and the emotional connection it holds for the people of Pookkattiri and nearby Valanchery. Villagers and travelers alike visit not just to pray, but to find peace, reflection, and a sense of belonging.
      </Typography>
      
      <Typography variant="body1" paragraph>
        The documentary captures the mosque not only as a place of worship but as a living archive of memory, heritage, and continuity — where faith and beauty come together in everyday life.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>Watch the Documentary</Typography>
        <ResponsiveEmbed 
          src="https://www.youtube.com/embed/jkczdSzopFw?si=LKRv-muMd6rbVkME" 
          title="Thottunkal Palli Documentary"
        />
      </Paper>
    </PortfolioSection>
  );
} 