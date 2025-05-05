import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Link,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link as RouterLink } from "react-router-dom";

const architectureArticles = [
  {
    image: '/assets/Architecture/image1.webp',
    title: 'The Rise of Crypto: How Digital Currencies are Changing the Financial Landscape',
    link: '/articles/1',
  },
  {
    image: '/assets/Architecture/image2.webp',
    title: 'Uncovering the Mysteries of Crypto: A Beginner’s Guide',
    link: '/articles/2',
  },
  {
    image: '/assets/Architecture/image3.webp',
    title: 'The Future of Finance: How Crypto is Disrupting the Traditional Banking System',
    link: '/articles/3',
    points: [
      { text: "Crypto Investing 101: A Beginner's Guide to Navigating the Market", link: '/articles/3#point1' },
      { text: 'Artificial Intelligence and the Job Market: Will It Create or Eliminate Jobs', link: '/articles/3#point2' },
    ],
  },
  {
    image: '/assets/Architecture/image4.webp',
    title: 'Crypto Investment Strategies: How to Maximize Your Returns Safely',
    link: '/articles/4',
    points: [
      { text: 'From Chatbots to Self-Driving Cars: The Endless Possibilities of AI in Today’s Digital Age', link: '/articles/4#point1' },
      { text: 'The Future is Here: How AI is Revolutionizing Industries', link: '/articles/4#point2' },
    ],
  },
];

export default function ArchitectureNews() {
  return (
    <Box sx={{ bgcolor: 'white', px: { xs: 2, md: 4 }, py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Link component={RouterLink} to="/architecture-news" underline="none" color="inherit">
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            ARCHITECTURE NEWS
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1, height: '2px', bgcolor: '#ccc' }} />
      </Box>
      {/* Top Large Cards */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 4 }}>
        {architectureArticles.slice(0, 2).map((article, i) => (
          <Link key={i} component={RouterLink} to={article.link} underline="none" sx={{ flex: 1 }}>
            <Card
              sx={{
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                '&:hover .imageOverlay': {
                  opacity: 1,
                },
              }}>
              <CardMedia
                component="img"
                image={article.image}
                alt={article.title}
                sx={{ height: 350, objectFit: 'cover' }}/>
              {/* Yellowish overlay on hover */}
              <Box
                className="imageOverlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(239, 209, 109, 0.15)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  pointerEvents: 'none',
                }}/>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  px: 2,
                  pb: 2,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                }}>
                <Box
                  sx={{
                    bgcolor: '#f7941d',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                    px: 1.5,
                    py: 0.5,
                    display: 'inline-block',
                    mb: 1,
                  }}>
                  CRYPTO
                </Box>
                <Typography variant="h6" fontWeight="bold" color="white">
                  {article.title}
                </Typography>
              </Box>
            </Card>
          </Link>
        ))}
      </Box>
      {/* Desktop View */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row',
          gap: 4,
        }}>
        {architectureArticles.slice(2).map((article, i) => (
          <Box key={i} sx={{ flex: 1 }}>
            <Link component={RouterLink} to={article.link} underline="none" color="inherit">
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 1,
                  '&:hover .smallImageOverlay': {
                    opacity: 1,
                  },
                }}>
                {/* Small Image */}
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={article.image}
                    alt={article.title}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}/>
                  {/* Yellowish hover overlay */}
                  <Box
                    className="smallImageOverlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(239, 209, 109, 0.15)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}/>
                </Box>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    fontFamily: 'Roboto, sans-serif',
                    color: '#222',
                    lineHeight: 1.5,
                    '&:hover': { color: '#f7941d' },
                  }}>
                  {article.title}
                </Typography>
              </Box>
            </Link>
            {/* Divider */}
            <Box sx={{ height: '1px', bgcolor: '#f9f9f9', my: 1 }} />
            {/* Points under each card */}
            {article.points?.map((point, j) => (
              <React.Fragment key={j}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.2,
                    py: 1,
                    '&:hover a': { color: '#f7941d' },
                  }}>
                  <KeyboardArrowRightIcon sx={{ fontSize: 18, mt: '2px' }} />
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      fontFamily: 'Roboto, sans-serif',
                      color: '#222',
                    }}>
                    <Link component={RouterLink} to={point.link} underline="none" color="inherit">
                      {point.text}
                    </Link>
                  </Typography>
                </Box>
                {j < article.points.length - 1 && (
                  <Box sx={{ height: '1px', bgcolor: '#f9f9f9', mx: 2 }} />
                )}
              </React.Fragment>
            ))}
          </Box>
        ))}
      </Box>
      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
        }}>
        {/* Images + titles first */}
        {architectureArticles.slice(2).map((article, i) => (
          <Link key={i} component={RouterLink} to={article.link} underline="none" color="inherit">
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 2,
                '&:hover .smallImageOverlay': {
                  opacity: 1,
                },
              }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={article.image}
                  alt={article.title}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: 'cover',
                    borderRadius: 1,
                  }}/>
                {/* Yellowish hover overlay */}
                <Box
                  className="smallImageOverlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(239, 209, 109, 0.15)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}/>
              </Box>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  fontFamily: 'Roboto, sans-serif',
                  color: '#222',
                  lineHeight: 1.5,
                  '&:hover': { color: '#f7941d' },
                }}>
                {article.title}
              </Typography>
            </Box>
          </Link>
        ))}
        {/* All bullet points */}
        {architectureArticles
          .slice(2)
          .flatMap((article) => article.points || [])
          .map((point, i, arr) => (
            <React.Fragment key={i}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.2,
                  py: 1,
                  '&:hover a': { color: '#f7941d' },
                }}>
                <KeyboardArrowRightIcon sx={{ fontSize: 18, mt: '2px' }} />
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    fontFamily: 'Roboto, sans-serif',
                    color: '#222',
                  }}>
                  <Link component={RouterLink} to={point.link} underline="none" color="inherit">
                    {point.text}
                  </Link>
                </Typography>
              </Box>
              {i < arr.length - 1 && (
                <Box sx={{ height: '1px', bgcolor: '#f9f9f9', mx: 2 }} />
              )}
            </React.Fragment>
          ))}
      </Box>
    </Box>
  );
}