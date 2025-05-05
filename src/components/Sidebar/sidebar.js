import React from 'react';
import { Box, Typography, Card, CardMedia, Link } from '@mui/material';

const sidebarArticles = [
  {
    title: "The Ultimate Guide to Choosing the Best Web Hosting for Your Website",
    image: "/assets/Tech/image1.webp",
    link: "/technology/article1"
  },
  {
    title: "Importance of choosing the right web hosting for your business",
    image: "/assets/Tech/image2.webp",
    link: "/technology/article2"
  },
  {
    title: "Choosing the Best Web Hosting Provider: A Comprehensive Guide",
    image: "/assets/Tech/image3.webp",
    link: "/technology/article3"
  },
  {
    title: "Why Web Hosting is Crucial for Your Website’s Success: A Comprehensive Analysis",
    image: "/assets/Tech/image4.png",
    link: "/technology/article4"
  }
];

export default function Sidebar() {
  return (
    <Box sx={{ pr: 0, pl: 0, borderLeft: "none", m: 0 }}>
      {/* TECHNOLOGY heading with divider */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 2,
          px: 2,
          pt: 1,
        }}>
        <Link href="/technology-news" underline="none" color="inherit">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
            }}>
            TECHNOLOGY
          </Typography>
        </Link>
        <Box
          sx={{
            flexGrow: 1,
            height: '2px',
            backgroundColor: '#ccc',
          }}/>
      </Box>
      {/* Sidebar Articles */}
      <Box sx={{ px: 2 }}>
        {sidebarArticles.map((article, i) => (
          <Link
            key={i}
            href={article.link}
            underline="none"
            color="inherit"
            sx={{ display: 'block', mb: 3 }}>
            <Card
              sx={{
                overflow: 'hidden',
                borderRadius: 1,
                position: 'relative',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                '&:hover .hoverOverlay': {
                  opacity: 1,
                },
              }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  src={article.image}
                  alt={article.title}
                  sx={{
                    height: 220,
                    objectFit: 'cover',
                    width: '100%',
                  }}/>
                {/* Hover Overlay */}
                <Box
                  className="hoverOverlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 150, 0.2)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}/>
                {/* Gradient + Text */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    px: 2,
                    pb: 2,
                    pt: 4,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    color: '#fff',
                  }}>
                  <Box
                    sx={{
                      bgcolor: '#f7941d',
                      display: 'inline-block',
                      fontSize: '0.65rem',
                      fontWeight: 'bold',
                      px: 1,
                      py: 0.3,
                      borderRadius: '2px',
                      mb: 0.8,
                      lineHeight: 1,
                    }}>
                    WEB HOSTING
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      lineHeight: 1.4,
                    }}>
                    {article.title}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
}