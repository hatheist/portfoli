import React, { useState, useEffect } from 'react';
import { Box, Skeleton, Typography, Link, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

type InstagramEmbedProps = {
  postUrl: string;
  maxWidth?: string;
  caption?: string;
};

// Custom lightweight Instagram embed component
export default function InstagramEmbed({
  postUrl,
  maxWidth = '540px',
  caption
}: InstagramEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract post ID for creating a unique container ID
  const postId = postUrl.split('/p/')[1]?.split('/')[0] || 'instagram-post';
  const containerId = `instagram-embed-${postId}`;
  
  useEffect(() => {
    // Create intersection observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '200px' // Start loading when within 200px of viewport
    });
    
    // Get the container element
    const container = document.getElementById(containerId);
    if (container) {
      observer.observe(container);
    }
    
    return () => observer.disconnect();
  }, [containerId]);
  
  useEffect(() => {
    // Only load Instagram script when embed is visible
    if (!isVisible) return;
    
    // Check if script is already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      setIsLoaded(true);
      return;
    }
    
    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = '//www.instagram.com/embed.js';
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        setIsLoaded(true);
      }
    };
    
    // Add script to document
    document.body.appendChild(script);
    
    // Cleanup
    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Script might have been removed already
      }
    };
  }, [isVisible]);
  
  return (
    <Box 
      id={containerId}
      sx={{ 
        width: '100%', 
        maxWidth, 
        margin: '0 auto',
        mb: 3
      }}
    >
      {caption && (
        <Typography 
          variant="subtitle1" 
          gutterBottom 
          align="center"
          sx={{ mt: 1 }}
        >
          {caption}
        </Typography>
      )}
      
      {isVisible ? (
        <>
          {!isLoaded && (
            <Skeleton 
              variant="rectangular" 
              width="100%" 
              height="400px" 
              animation="wave"
              sx={{ borderRadius: 1 }}
            />
          )}
          
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink={postUrl}
            data-instgrm-version="14" 
            style={{ 
              width: '100%', 
              minWidth: '326px',
              margin: '0 auto',
              border: '1px solid #dbdbdb',
              borderRadius: '4px',
              display: isLoaded ? 'block' : 'none'
            }}
          ></blockquote>
        </>
      ) : (
        <Paper 
          elevation={1} 
          sx={{ 
            p: 3, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
            borderRadius: 1,
            bgcolor: 'rgba(0,0,0,0.02)'
          }}
        >
          <InstagramIcon sx={{ fontSize: 40, color: '#E1306C', mb: 2 }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Instagram post will load when scrolled into view
          </Typography>
          <Link href={postUrl} target="_blank" rel="noopener">
            View on Instagram
          </Link>
        </Paper>
      )}
    </Box>
  );
}

// Add TypeScript declaration for Instagram's global object
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
} 