import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Dialog, Grid, useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const projects: ProjectProps[] = [
  {
    title: "Muslimah, Beyond the Veil",
    description: "A photo essay exploring Muslim womanhood through intimate moments of devotion and resilience",
    image: "/gallery/Photo Essay/Muslimah/Muslimah_3.png",
    link: "/photo-essay",
    category: "Photography"
  },
  {
    title: "The Dialogues Podcast",
    description: "Conversations that explore Hyderabad's unique communities and cultural spaces",
    image: "/gallery/Podcast/Podcast Cover_Poster.png",
    link: "/podcast",
    category: "Audio"
  },
  {
    title: "Behind the Reel",
    description: "A five-part series exploring the behind-the-scenes truths of iconic film moments",
    image: "/gallery/Reels/Behind The Reel Poster.png",
    link: "/reels",
    category: "Video"
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenDialog = (project: ProjectProps) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <Box sx={{ my: 6 }}>
      <Typography 
        variant="h5" 
        component="h3" 
        sx={{ 
          mb: 3,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '50%',
            height: '2px',
            bottom: '-4px',
            left: '0',
            backgroundColor: 'primary.main',
            transition: 'width 0.5s ease',
          },
          '&:hover::after': {
            width: '100%',
          }
        }}
      >
        Featured Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  gutterBottom 
                  variant="subtitle1" 
                  component="div" 
                  color="primary"
                  sx={{ fontWeight: 'bold' }}
                >
                  {project.category}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                <Button 
                  size="small" 
                  onClick={() => handleOpenDialog(project)}
                >
                  Preview
                </Button>
                <Button 
                  size="small" 
                  endIcon={<ArrowForwardIcon />} 
                  component={Link} 
                  href={project.link}
                >
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Project Preview Dialog */}
      <Dialog
        fullScreen={fullScreen}
        open={Boolean(selectedProject)}
        onClose={handleCloseDialog}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 2,
            overflow: 'hidden'
          }
        }}
      >
        {selectedProject && (
          <>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="300"
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{ 
                  objectFit: 'cover',
                  backgroundColor: 'rgba(0,0,0,0.03)'
                }}
              />
              <Button 
                onClick={handleCloseDialog}
                sx={{ 
                  position: 'absolute', 
                  top: 10, 
                  right: 10,
                  minWidth: 'auto',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.7)',
                  }
                }}
              >
                <CloseIcon />
              </Button>
            </Box>
            <Box sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                {selectedProject.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {selectedProject.description}
              </Typography>
              <Button 
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                component={Link} 
                href={selectedProject.link}
                onClick={handleCloseDialog}
              >
                View Full Project
              </Button>
            </Box>
          </>
        )}
      </Dialog>
    </Box>
  );
} 