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

export default function InternshipPage({ galleries }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PortfolioSection
      title="Multimedia Internship"
      subtitle="The Siasat Daily"
      description="During my internship at The Siasat Daily, one of Hyderabad's leading Urdu-English news platforms, I worked across multiple formats to tell stories rooted in the city's political, cultural, and everyday life."
      galleries={galleries}
      section="internship"
      keywords="internship, journalism, multimedia, news, hyderabad, siasat daily, video reporting, elections, data visualization"
    >
      <Typography variant="body1" paragraph>
        During my internship at The Siasat Daily, one of Hyderabad's leading Urdu-English news platforms, I worked across multiple formats to tell stories rooted in the city's political, cultural, and everyday life. I wrote a wide range of articles—feature stories, political commentary, entertainment pieces—each shaped by a commitment to clarity, context, and relevance.
      </Typography>
      
      <Typography variant="body1" paragraph>
        In the run-up to the elections, I contributed to the visualization of election data, helping readers make sense of trends, turnout, and results through accessible and engaging formats. I also worked on video stories and reports, handling scripting, on-ground shooting, and post-production. These included coverage of local events, community voices, and cultural festivals, blending journalistic depth with visual storytelling.
      </Typography>
      
      <Typography variant="body1" paragraph>
        This internship allowed me to strengthen my skills as a multimedia journalist—moving between text, data, and video to build narratives that resonate with a wide audience. It also deepened my understanding of newsroom workflows, digital publishing, and the editorial responsibility that comes with reporting on a diverse and dynamic region like Hyderabad.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>Video Reports</Typography>
        
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Siasat Video Report 1</Typography>
        <ResponsiveEmbed 
          src="https://www.youtube.com/embed/0bwVhY4zcKg?si=RLVHLwH4uEPRDC4S" 
          title="Siasat Video 1"
        />
        
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 4 }}>Siasat Video Report 2</Typography>
        <ResponsiveEmbed 
          src="https://www.youtube.com/embed/S0ULvb4CrMw?si=oblXpcs4_lbkBool" 
          title="Siasat Video 2"
        />
      </Paper>
    </PortfolioSection>
  );
} 