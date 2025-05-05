import React, { useState, useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';

type ResponsiveEmbedProps = {
  src: string;
  title: string;
  height?: string;
  aspectRatio?: string;
  allow?: string;
  priority?: boolean;
  maxWidth?: string;
};

export default function ResponsiveEmbed({
  src,
  title,
  height = '0',
  aspectRatio = '56.25%', // Default 16:9 aspect ratio
  allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  priority = false,
  maxWidth = '100%'
}: ResponsiveEmbedProps) {
  const [isLoading, setIsLoading] = useState(!priority);
  const [isVisible, setIsVisible] = useState(priority);
  
  useEffect(() => {
    // If priority is true, we don't need the intersection observer
    if (priority) return;
    
    // Create intersection observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '200px' // Load when within 200px of viewport
    });
    
    // Get the container element
    const container = document.getElementById(`embed-container-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (container) {
      observer.observe(container);
    }
    
    return () => observer.disconnect();
  }, [title, priority]);
  
  // Determine embed type to apply specific optimizations
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
  const isDrive = src.includes('drive.google.com');
  const isSoundCloud = src.includes('soundcloud.com');
  const isIssuu = src.includes('issuu.com');
  
  // Apply specific aspect ratios based on embed type
  const finalAspectRatio = height === '0' ? 
    (isSoundCloud ? '25%' : isIssuu ? '65%' : aspectRatio) : '0';
  
  return (
    <Box 
      id={`embed-container-${title.replace(/\s+/g, '-').toLowerCase()}`}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: maxWidth,
        height: height === '0' ? '0' : height,
        paddingTop: finalAspectRatio,
        mb: 4,
        mx: 'auto'
      }}
    >
      {isLoading && isVisible && (
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          animation="wave"
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0,
            bgcolor: 'rgba(0,0,0,0.05)'
          }}
        />
      )}
      
      {isVisible && (
        <iframe
          src={src}
          title={title}
          allow={allow}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setIsLoading(false)}
          frameBorder="0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      )}
      
      {!isVisible && (
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(0,0,0,0.03)',
            color: 'text.secondary'
          }}
        >
          <Typography variant="body2">Loading {isYouTube ? 'video' : isDrive ? 'document' : isSoundCloud ? 'audio' : 'content'}...</Typography>
        </Box>
      )}
    </Box>
  );
} 