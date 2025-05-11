import React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Technology = () => {
  const navigate = useNavigate();

  const articles = [
    {
      title: "Revolutionizing Finance: How Fintech is Changing the Game",
      image: "/assets/Technology/image1.webp",
      id: 1,
      category: "fintech"
    },
    {
      title: "Revolutionizing the Financial Industry: How Fintech is Changing the Game",
      image: "/assets/Technology/image2.webp",
      id: 2,
      category: "fintech"
    },
    {
      title: "5 Ways Fintech is Revolutionizing the Banking Industry",
      image: "/assets/Technology/image3.webp",
      id: 3,
      category: "fintech"
    },
    {
      title: "Advantages of Fintech in Finance",
      image: "/assets/Technology/image4.webp",
      id: 4,
      category: "fintech"
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#fff', px: { xs: 2, md: 8 }, pt: 4, pb: 6 }}>
      {/* Section Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
          TECHNOLOGY
        </Typography>
        <Box sx={{ flexGrow: 1, height: 2, backgroundColor: '#ddd' }} />
      </Box>

      {/* Articles Grid */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {[0, 2].map((startIndex) => (
          <Box
            key={startIndex}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              minHeight: 350,
            }}
          >
            {articles.slice(startIndex, startIndex + 2).map((article) => (
              <Card
                key={article.id}
                sx={{
                  flex: 1,
                  borderRadius: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  '&:hover .hover-overlay': {
                    opacity: 1,
                  },
                }}
              >
                {/* Hover Area */}
                <Box
                  sx={{ position: 'relative', height: 350 }}
                  onClick={() => navigate(`/article/${article.category}/${article.id}`, { state: { article } })}
                >
                  <CardMedia
                    component="img"
                    image={article.image}
                    alt={article.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  {/* Light yellow overlay on hover */}
                  <Box
                    className="hover-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 150, 0.2)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      zIndex: 1,
                    }}
                  />
                </Box>

                {/* Text Area */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    px: 2,
                    pb: 2,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                    zIndex: 2,
                  }}
                >
                  {/* Category Chip */}
                  <Box
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/category/${article.category}`);
                    }}
                    sx={{
                      bgcolor: '#f7941d',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '0.75rem',
                      px: 1.5,
                      py: 0.5,
                      display: 'inline-block',
                      borderRadius: '4px',
                      mb: 1,
                      cursor: 'pointer',
                      zIndex: 3,
                    }}
                  >
                    {article.category.toUpperCase()}
                  </Box>

                  {/* Article Title */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="white"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/article/${article.category}/${article.id}`, { state: { article } });
                    }}
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 1.4,
                      cursor: 'pointer',
                      zIndex: 3,
                    }}
                  >
                    {article.title}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Technology;