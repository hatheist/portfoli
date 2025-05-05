import React, { useEffect, useState } from 'react';
import { Box, Container, Fade, Grid, Typography } from '@mui/material';
import MainFrame from '@/components/MainFrame';
import { InferGetStaticPropsType } from 'next';
import { galleryList } from '@/data/galleryList';
import InteractiveProfileImage from '@/components/InteractiveProfileImage';
import AnimatedSocialLinks from '@/components/AnimatedSocialLinks';
import SkillsVisualization from '@/components/SkillsVisualization';
import FeaturedProjects from '@/components/FeaturedProjects';
import AnimatedDivider from '@/components/AnimatedDivider';

// We need to load the list of galleries from the file system
// This is done at build time
export async function getStaticProps() {
    const galleries = galleryList()
    return {
        props: {
            galleries
        }
    }
}

// This is our home / about me page
export default function Index({galleries}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [animate, setAnimate] = useState(false);
    
    // Start animations after component mounts
    useEffect(() => {
        setAnimate(true);
    }, []);
    
    const meta = {
        title: 'Hathim Ashir Portfolio',
        description: 'Multimedia Storyteller based in Hyderabad',
        url: '/about',
        keywords: 'multimedia, photography, storytelling, Hyderabad, documentary, writing, podcast, interview',
    }

    const date = new Date()
    return <MainFrame meta={meta} galleries={galleries} index="about">
        <Container maxWidth="lg">
            {/* Hero Section */}
            <Fade in={animate} timeout={800}>
                <Grid container spacing={4} sx={{ mb: 6, mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pt: { xs: 2, md: 4 } }}>
                            <Typography 
                                variant="h1" 
                                sx={{ 
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 'bold',
                                    mb: 1,
                                    backgroundImage: 'linear-gradient(45deg, #3f51b5, #f50057)',
                                    backgroundSize: '100%',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateX(5px)'
                                    }
                                }}
                            >
                                Hathim Ashir
                            </Typography>
                            
                            <Typography 
                                variant="h2" 
                                sx={{ 
                                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                                    mb: 3,
                                    color: 'text.secondary'
                                }}
                            >
                                <strong>Multimedia Storyteller — Hyderabad</strong>
                            </Typography>
                            
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                                I'm a multimedia storyteller based in Hyderabad, weaving narratives that explore identity, culture, and community. My work spans various mediums—photography, writing, video, and audio—each chosen with intention to best capture the essence of the stories I tell.
                            </Typography>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <InteractiveProfileImage 
                                src="/images/me.jpg" 
                                alt="Hathim Ashir" 
                                blurSrc="/images/me-preview.jpg" 
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Fade>
            
            <AnimatedDivider width="120px" />
            
            {/* Skills Section */}
            <Fade in={animate} timeout={1000} style={{ transitionDelay: '200ms' }}>
                <Box>
                    <SkillsVisualization />
                </Box>
            </Fade>
            
            <AnimatedDivider width="100px" delay={500} />
            
            {/* About Section */}
            <Fade in={animate} timeout={1000} style={{ transitionDelay: '400ms' }}>
                <Box>
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        sx={{ 
                            mb: 3,
                            position: 'relative',
                            display: 'inline-block',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: '50%',
                                height: '3px',
                                bottom: '-8px',
                                left: '0',
                                backgroundColor: 'primary.main',
                                transition: 'width 0.5s ease',
                            },
                            '&:hover::after': {
                                width: '100%',
                            }
                        }}
                    >
                        About Me
                    </Typography>
                    
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="body1" paragraph>
                                One of my most personal projects is a photo essay titled <strong>Muslimah, Beyond the Veil: Stories of Faith and Femininity</strong>, shot at Hyderabad's Maula Ali Dargah. The essay explores Muslim womanhood through intimate moments of devotion, resilience, and quiet defiance, offering a contemplative gaze into faith and feminine belonging.
                            </Typography>
                            
                            <Typography variant="body1" paragraph>
                                I've produced video reports documenting the architectural grandeur of the Spanish Mosque and the tradition of the Fish Prasadam festival, both rooted deeply in Hyderabad's cultural landscape. My documentary on the Thottunkal Mosque delves into its layered history, capturing a space where heritage, community, and faith intersect.
                            </Typography>
                            
                            <Typography variant="body1" paragraph>
                                As a writer, I have contributed to <strong>The News Minute</strong>, with a published article on the rich and diverse culinary ecosystem of Tolichowki—a neighborhood where food, migration, and memory converge. My photography, published by <strong>Maktoob Media</strong>, often centers protest, identity, and everyday resistance, using the visual to amplify voices and communities often marginalized in mainstream narratives.
                            </Typography>
                            
                            <Typography variant="body1" paragraph>
                                In another collaborative effort, I served as the cover photographer and reporter for <em>Home</em>, a magazine celebrating the diverse lives of Hyderabad's residents. I've also explored audio storytelling through a podcast episode titled <strong>The Dialogues: One Conversation at a Time</strong>, featuring a conversation with Rajeev Khandelwal of the Hyderabad-based bird-watching community, Birding Pals. The episode reflects on the joy of birding and the importance of green urban spaces.
                            </Typography>
                            
                            <Typography variant="body1" paragraph>
                                As part of a social impact campaign, I worked with the <strong>Sahodari Foundation</strong>—a pioneering NGO founded by activist Kalki Subramaniam that advocates for transgender and gender-diverse people. For this campaign, we created a brochure, Instagram carousel posts, a blog, and a video reel, all aimed at increasing visibility and support for the community's ongoing work.
                            </Typography>
                            
                            <Typography variant="body1" paragraph>
                                Each project I undertake reflects a deep commitment to documenting underrepresented stories with nuance, empathy, and care. I aim to create work that not only informs but connects—inviting the audience to listen, witness, and remember.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
            
            <AnimatedDivider width="80px" delay={600} />
            
            {/* Featured Projects Section */}
            <Fade in={animate} timeout={1000} style={{ transitionDelay: '600ms' }}>
                <Box>
                    <FeaturedProjects />
                </Box>
            </Fade>
            
            <AnimatedDivider width="60px" delay={700} />
            
            {/* Social Links Section */}
            <Fade in={animate} timeout={1000} style={{ transitionDelay: '800ms' }}>
                <Box>
                    <AnimatedSocialLinks />
                </Box>
            </Fade>
        </Container>
        
        {/* Copyright at the bottom */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <Typography variant="caption" color="text.secondary">
                &copy; {date.getFullYear()} Hathim Ashir
            </Typography>
        </Box>
    </MainFrame>
}