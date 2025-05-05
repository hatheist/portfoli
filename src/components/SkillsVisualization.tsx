import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import CreateIcon from '@mui/icons-material/Create';
import CampaignIcon from '@mui/icons-material/Campaign';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <Card 
      variant="outlined" 
      sx={{
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.5s ease, opacity 0.5s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transform: 'translateY(-5px)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Box sx={{ fontSize: '2.5rem', color: 'primary.main', mb: 2 }}>
          {icon}
        </Box>
        <Typography variant="h6" component="div" gutterBottom align="center">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function SkillsVisualization() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const skills = [
    {
      icon: <PhotoCameraIcon fontSize="inherit" />,
      title: "Photography",
      description: "Documentary, photojournalism, and photo essays that capture moments of cultural significance",
    },
    {
      icon: <VideocamIcon fontSize="inherit" />,
      title: "Video",
      description: "Documentaries and reels that tell powerful visual stories with emotional impact",
    },
    {
      icon: <CreateIcon fontSize="inherit" />,
      title: "Writing",
      description: "Articles and longform pieces exploring identity, culture, and community",
    },
    {
      icon: <MicIcon fontSize="inherit" />,
      title: "Audio",
      description: "Podcasts and interviews that bring authentic voices to the foreground",
    },
    {
      icon: <CampaignIcon fontSize="inherit" />,
      title: "Advocacy",
      description: "Social impact campaigns that amplify marginalized voices and perspectives",
    }
  ];

  return (
    <Box sx={{ mt: 4, mb: 6 }}>
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
        Storytelling Mediums
      </Typography>
      
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', 
          gap: 2,
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard 
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            delay={300 + index * 150}
          />
        ))}
      </Box>
    </Box>
  );
} 