import React, { useState, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';

interface AnimatedDividerProps {
  width?: string;
  color?: string;
  height?: number;
  delay?: number;
}

export default function AnimatedDivider({
  width = '80px',
  color,
  height = 3,
  delay = 300
}: AnimatedDividerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  
  // Default color is primary color if not specified
  const dividerColor = color || theme.palette.primary.main;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <Box
      sx={{
        my: 3,
        position: 'relative',
        height: `${height}px`,
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: width,
          height: '100%',
          backgroundColor: dividerColor,
          left: 0,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.6s ease, opacity 0.6s ease',
          borderRadius: '2px',
          '&:hover': {
            width: '120px',
            transition: 'width 0.5s ease'
          }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: `${dividerColor}20`, // 20% opacity version of the color
          left: 0,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.2s',
          borderRadius: '2px'
        }}
      />
    </Box>
  );
} 