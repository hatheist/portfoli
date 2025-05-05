# Components Directory

This directory contains reusable React components used throughout the portfolio website.

## Key Components

### Layout Components
- **MainFrame**: The main layout wrapper providing navigation and global structure
- **TopNav**: Main navigation bar
- **SideNav**: Side navigation drawer for mobile devices
- **Footer**: Global footer with contact links
- **MetaHead**: Manages meta tags, SEO, and Open Graph data

### Content Components
- **GalleryDisplay**: Displays gallery images with a lightbox for a given section
- **PortfolioSection**: Wrapper component for portfolio section pages
- **ResponsiveEmbed**: Optimized component for embedding external content like YouTube videos
  - Features lazy loading for improved performance
  - Provides a loading state for better UX
  - Automatically handles aspect ratios based on content type
  - Usage: `<ResponsiveEmbed url="https://www.youtube.com/embed/VIDEO_ID" type="youtube" />`

- **InstagramEmbed**: Optimized component for embedding Instagram posts
  - Features lazy loading to improve page performance
  - Shows a loading skeleton for better UX
  - Renders a preview with a link to Instagram before loading
  - Usage: `<InstagramEmbed postUrl="https://www.instagram.com/p/POST_ID/?utm_source=ig_embed" caption="Optional caption" />`

## Usage Guidelines

### Embedding External Content
For optimal performance, always use the dedicated embedding components rather than raw iframes:

- For videos, use: `<ResponsiveEmbed url="..." type="youtube|vimeo" />`
- For Instagram posts, use: `<InstagramEmbed postUrl="..." caption="..." />`

These components improve page performance by:
1. Only loading external content when it's visible in the viewport
2. Providing appropriate loading states for better user experience
3. Optimizing the layout to prevent content shifts during loading 