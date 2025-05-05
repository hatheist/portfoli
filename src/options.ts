// Enable the lightbox captions options
// Captions are taken from the file name, everything after the first dash ('-')
export const showCaptions = true
// Capitalize the first letter of each word in the caption.
// If false only the first word is capitalized.
// ex:  'The quick brown fox' vs 'The Quick Brown Fox
export const captionWordCaps = true

// These are the fixed sizes we make available
// in practice this creates images of about 5k, 150k, 400k and 1.5mb in addition to the original source file.
// For a multimedia portfolio, we provide various sizes to ensure efficient loading across different devices
export const sizes = [100, 512, 1024, 1800, 3600]

// File types we will accept as images
// This list includes common image formats used in professional photography and multimedia work
// We ignore case.
export const imageTypes = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']

// Portfolio site settings
export const portfolioSettings = {
  // General site settings
  siteName: 'Hathim Ashir',
  siteDescription: 'Multimedia Storyteller based in Hyderabad',
  
  // Contact information
  email: 'hathim396@gmail.com',
  instagram: 'hatheist__',
  linkedin: 'hathim-ashir-79548a268',
  phone: '+919995945256',
  
  // SEO settings
  defaultTitle: 'Hathim Ashir | Multimedia Storyteller',
  defaultDescription: 'Multimedia storyteller exploring identity, culture, and community through photography, writing, video, and audio.',
  defaultKeywords: 'multimedia, storytelling, photography, documentary, hyderabad, journalism, podcast',
  
  // Analytics - can be added later when deploying to production
  // analyticsId: 'UA-XXXXXXXXX-X',
}

// External embed sources allowed in the portfolio
export const allowedEmbedSources = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'drive.google.com',
  'soundcloud.com',
  'w.soundcloud.com',
  'instagram.com',
  'www.instagram.com',
  'issuu.com',
  'e.issuu.com',
  'canva.com',
  'www.canva.com'
]

// Map gallery folders to portfolio sections
export const portfolioSectionMap: Record<string, string> = {
  'Reels': 'reels',
  'Interview': 'interview',
  'Photo Essay': 'photo-essay',
  'Podcast': 'podcast',
  'Marketing Campaign': 'campaign',
  'Multmedia Internship': 'internship',
  'The News Minute Article': 'articles',
  'Magazine': 'magazine',
  'Documentary': 'documentary'
};

// List of portfolio sections that should not have separate gallery pages
export const portfolioSections = [
  'Reels',
  'Interview',
  'Photo Essay',
  'Podcast',
  'Marketing Campaign',
  'Multmedia Internship',
  'The News Minute Article',
  'Magazine',
  'Documentary'
];
