import React, { useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Colors } from '../../styles/Theme/theme';

const articles = [
  {
    title: 'Why Culture is Key to Building a Strong and Sustainable Startup',
    image: '/assets/Slider/image1.webp',
    tag: 'STARTUPS',
  },
  {
    title: 'The ABCs of Startup Funding: How to Secure Investment for Your Business',
    image: '/assets/Slider/image2.webp',
    tag: 'STARTUPS',
  },
  {
    title: 'The Top 10 Mistakes to Avoid When Starting a New Business',
    image: '/assets/Slider/image3.webp',
    tag: 'STARTUPS',
  },
  {
    title: '10 Essential Tips for Launching a Successful Startup in 2023',
    image: '/assets/Slider/image4.webp',
    tag: 'STARTUPS',
  },
  {
    title: 'From Idea to Success: The Ultimate Guide to Starting a Profitable Startup',
    image: '/assets/Slider/image5.webp',
    tag: 'STARTUPS',
  },
  {
    title: 'From Smart Homes to Wearable Tech: How Electronics are Revolutionizing Daily Life',
    image: '/assets/Slider/image6.webp',
    tag: 'ELECTRONICS',
  },
  {
    title: 'Eco-Friendly Electronics: How Technology is Moving Towards Sustainability and Conservation',
    image: '/assets/Slider/image7.webp',
    tag: 'ELECTRONICS',
  },
  {
    title: 'The Future of Electronics: Exploring the Latest Tech Innovations',
    image: '/assets/Slider/image8.webp',
    tag: 'ELECTRONICS',
  },
];

const ImageSlider = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const firstChild = container.firstElementChild;
      const scrollAmount = firstChild ? firstChild.offsetWidth + 3 : 0;
      if (direction === 'left') {
        if (container.scrollLeft === 0) {
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };
  const handleClick = (article) => {
    console.log('Clicked article:', article.title);
  };
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflowX: 'hidden',
        p: 0,
        m: 0,
        mt: '5px',
        '&:hover .scroll-arrow': {
          opacity: 1,
          pointerEvents: 'auto',
        },
        backgroundColor: '#fff',
      }}>
      {/* Left arrow */}
      <IconButton
        onClick={() => scroll('left')}
        className="scroll-arrow"
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 40,
          height: 40,
          borderRadius: 0,
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 2,
          bgcolor: Colors.warning,
          color: Colors.white,
          boxShadow: 2,
          '&:hover': { bgcolor: Colors.warning },
        }}>
        <ArrowBackIosNew fontSize="small" />
      </IconButton>
      {/* Slider container */}
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '3px',
          width: '100%',
          '&::-webkit-scrollbar': { display: 'none' },
          backgroundColor: '#fff',
        }}>
        {articles.map((article, idx) => (
          <Box
            key={idx}
            onClick={() => handleClick(article)}
            sx={{
              position: 'relative',
              flex: {
                xs: '0 0 70%',
                sm: '0 0 50%',
                md: '0 0 25%',
              },
              height: {
                xs: '70vh',
                sm: '80vh',
                md: 'calc(100vh - 100px)',
              },
              overflow: 'hidden',
              flexShrink: 0,
              borderRadius: 0,
              boxShadow: 'none',
              cursor: 'pointer',
              transition: 'none',
              '&:hover .image-overlay': {
                background: 'linear-gradient(to top, rgba(235, 211, 125, 0.3), rgba(0,0,0,0.3))',
              },
              '&:hover img': {
                filter: 'brightness(0.4)',
                transition: 'filter 0.3s ease',
              },
            }}>
            {/* Image */}
            <Box
              component="img"
              src={article.image}
              alt={article.title}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                margin: 0,
                padding: 0,
                border: 'none',
                transition: 'filter 0.3s ease',
              }}/>
            {/* Overlay with title/tag */}
            <Box
              className="image-overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0,0,0,0.3))',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.5rem',
                p: { xs: 2, md: 3 },
                pb: 4,
                color: '#fff',
                zIndex: 1,
                boxSizing: 'border-box',
                overflow: 'hidden',
                transition: 'background 0.3s ease',
              }}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  backgroundColor: Colors.warning,
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  px: 1.5,
                  py: 0.5,
                  fontSize: '0.65rem',
                  mb: 1,
                  fontFamily: 'sans-serif',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderTop: `8px solid ${Colors.warning}`,
                  },
                }}>
                {article.tag}
              </Box>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.3,
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  pointerEvents: 'none',
                }}>
                {article.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      {/* Right arrow */}
      <IconButton
        onClick={() => scroll('right')}
        className="scroll-arrow"
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 40,
          height: 40,
          borderRadius: 0,
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 2,
          bgcolor: Colors.warning,
          color: Colors.white,
          boxShadow: 2,
          '&:hover': { bgcolor: Colors.warning },
        }}>
        <ArrowForwardIos fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;