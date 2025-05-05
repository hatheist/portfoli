import { useState, useEffect } from 'react';
import { PhotoAlbum, Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Typography, useMediaQuery } from '@mui/material';
import { useWindowHeight } from '@react-hook/window-size/throttled';
import { darkTheme } from '@/themes/DarkTheme';

interface GalleryDisplayProps {
  sectionKey: string;
  photos: Photo[];
  caption?: string;
  showCaptions?: boolean;
  externalLink?: string;
}

export default function GalleryDisplay({
  sectionKey,
  photos,
  caption,
  showCaptions = true,
  externalLink
}: GalleryDisplayProps) {
  // We use a mediaQuery to work out if we are lg breakpoint or more.
  // For lg and up we show thumbnails in the lightbox
  const isMdOrMore = useMediaQuery(darkTheme.breakpoints.up('lg'));

  // We need the window height to calculate the target height of the photo gallery images (3 rows)
  const height = useWindowHeight();

  // We need to ensure the target height is only computed in an effect, because window will not exist server side
  const [targetHeight, setTargetHeight] = useState(100);

  // Here's the effect for the calculation
  useEffect(() => {
    setTargetHeight(height / 3);
  }, [height]);

  // Selected photo for the lightbox
  // -1 means we're not in the lightbox and should show the album
  const [index, setIndex] = useState(-1);

  // Our set of lightbox plugins, set in the useEffect below
  const [lightboxPlugins, setLightboxPlugins] = useState([Fullscreen, Slideshow, Thumbnails, Zoom]);

  // Select lightbox options based on the showCaptions option and larger screen size (show thumbnails)
  useEffect(() => {
    if (showCaptions && isMdOrMore) {
      // Captions and wide
      setLightboxPlugins([Fullscreen, Slideshow, Thumbnails, Captions, Zoom]);
    } else if (isMdOrMore) {
      // no captions and wide
      setLightboxPlugins([Fullscreen, Slideshow, Thumbnails, Zoom]);
    } else if (showCaptions) {
      // captions and small
      setLightboxPlugins([Fullscreen, Slideshow, Captions, Zoom]);
    } else {
      // no captions and small
      setLightboxPlugins([Fullscreen, Slideshow, Zoom]);
    }
  }, [isMdOrMore, showCaptions]);

  if (!photos || photos.length === 0) {
    return <Typography>No images found for this gallery.</Typography>;
  }

  // Handle click function - either open lightbox or navigate to external link
  const handleClick = ({ index }: { index: number }) => {
    if (externalLink) {
      // Open external link in a new tab
      window.open(externalLink, '_blank', 'noopener,noreferrer');
    } else {
      // Open lightbox
      setIndex(index);
    }
  };

  return (
    <>
      {/* Display caption if provided */}
      {caption && (
        <div id="caption" style={{ marginTop: 3, marginBottom: 5 }}>
          <Typography variant="h6" gutterBottom>
            {caption}
          </Typography>
          {externalLink && (
            <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
              Click any image to view the full photo essay
            </Typography>
          )}
        </div>
      )}

      {/* Display either the photo album or lightbox */}
      {index < 0 ? (
        <PhotoAlbum
          key={`album-${sectionKey}`}
          photos={photos}
          layout="rows"
          targetRowHeight={targetHeight}
          spacing={10}
          padding={0}
          onClick={handleClick}
          componentsProps={{
            containerProps: {
              style: {
                cursor: externalLink ? 'pointer' : 'zoom-in'
              }
            }
          }}
        />
      ) : (
        <Lightbox
          key={`lightbox-${sectionKey}`}
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={lightboxPlugins}
          captions={{ showToggle: true, descriptionTextAlign: 'center' }}
        />
      )}
    </>
  );
} 