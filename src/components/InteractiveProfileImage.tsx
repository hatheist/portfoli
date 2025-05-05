import React, { useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

interface InteractiveProfileImageProps {
  src: string;
  alt: string;
  blurSrc?: string;
}

export default function InteractiveProfileImage({ src, alt, blurSrc }: InteractiveProfileImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <Box 
      sx={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '300px' : '400px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: isHovered ? '30%' : '0%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
          transition: 'height 0.3s ease',
          zIndex: 1
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ 
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
        placeholder={blurSrc ? "blur" : "empty"}
        blurDataURL={blurSrc}
        priority
      />
      
      <Box 
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '16px',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          zIndex: 2,
          display: { xs: 'none', sm: 'block' }
        }}
      >
        <Typography variant="body2" color="white" fontWeight="bold">
          Hathim Ashir
        </Typography>
        <Typography variant="body2" color="white" fontSize="0.8rem">
          Multimedia Storyteller based in Hyderabad
        </Typography>
      </Box>
    </Box>
  );
} 