import React from 'react';
import { Box, Stack, Typography, IconButton, Tooltip, useTheme, useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

export default function AnimatedSocialLinks() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const socialLinks: SocialLink[] = [
    {
      icon: <InstagramIcon />,
      label: '@hatheist__',
      href: 'https://www.instagram.com/hatheist__/',
      color: '#E1306C'
    },
    {
      icon: <LinkedInIcon />,
      label: 'hathim-ashir',
      href: 'https://www.linkedin.com/in/hathim-ashir-79548a268/',
      color: '#0077B5'
    },
    {
      icon: <EmailIcon />,
      label: 'hathim396@gmail.com',
      href: 'mailto:hathim396@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <PhoneIcon />,
      label: '+919995945256',
      href: 'tel:+919995945256',
      color: '#4CAF50'
    }
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant="h5" 
        component="h3" 
        sx={{ 
          mb: 2, 
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
        Connect With Me
      </Typography>

      <Stack 
        direction={isMobile ? 'column' : 'row'} 
        spacing={isMobile ? 2 : 3}
        sx={{ 
          mt: 3,
          justifyContent: isMobile ? 'center' : 'flex-start',
          alignItems: 'center'
        }}
      >
        {socialLinks.map((link, index) => (
          <Tooltip title={link.label} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isMobile ? 2 : 1,
                width: isMobile ? '100%' : 'auto',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                }
              }}
            >
              <IconButton
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                sx={{
                  bgcolor: 'rgba(0,0,0,0.03)',
                  width: 56,
                  height: 56,
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.06)',
                    color: link.color,
                    transform: 'scale(1.1)',
                  },
                  transition: 'transform 0.3s ease, color 0.3s ease, background-color 0.3s ease',
                }}
              >
                {link.icon}
              </IconButton>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: 'center',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: link.color,
                  },
                }}
              >
                {link.label}
              </Typography>
            </Box>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
} 
 