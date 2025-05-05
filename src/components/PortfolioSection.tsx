import { ReactNode } from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import MainFrame from '@/components/MainFrame';
import { gallery } from '@/data/galleryList';

type PortfolioSectionProps = {
  title: string;
  subtitle?: string;
  description: string;
  children: ReactNode;
  galleries: gallery[];
  section: string;
  keywords: string;
};

export default function PortfolioSection({
  title,
  subtitle,
  description,
  children,
  galleries,
  section,
  keywords
}: PortfolioSectionProps) {
  
  const meta = {
    title: `${title} | Hathim Ashir`,
    description: description,
    url: `/${section}`,
    keywords: keywords
  };

  return (
    <MainFrame meta={meta} galleries={galleries} index={section}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" gutterBottom>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="subtitle1" gutterBottom>
                <strong>{subtitle}</strong>
              </Typography>
            )}
          </Grid>
          
          <Grid item xs={12}>
            <Box sx={{ mt: 2, mb: 4 }}>
              {children}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MainFrame>
  );
} 