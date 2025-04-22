import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';

const newsData = [
  {
    designNews: { 
      title: 'Design News',
      articles: [
        {
          title: 'From Start-ups to Multinationals: The Importance of Software in Business Growth',
          img: '/assets/NewsSection/image1.webp',
        },
        {
          title: '10 Essential Software Tools for Small Business Owners to Streamline Operations',
        },
        {
          title: 'The Future of Software: Predictions for the Next Decade',
        },
      ],
    },
    mainArticle: {
      category: 'SOFTWARE',
      title: 'Maximizing Your Productivity with the Right Software: Tips and Tricks',
      img: '/assets/NewsSection/image2.webp',
      excerpt:
        'In today’s fast-paced and increasingly digital world, maximizing productivity is essential for success. Whether you’re an entrepreneur...',
    },
  },
  {
    designNews: {
      title: 'Design News',
      articles: [
        {
          title: 'Revolutionizing the Future: How Software is Changing the World',
        },
      ],
    },
    mainArticle: {
      category: 'SOFTWARE',
      title: 'Revolutionizing the Future: How Software is Changing the World',
      img: '/assets/NewsSection/image3.webp',
      excerpt:
        'The world we live in today is vastly different from what it was just a few decades ago. With the...',
    },
  },
];

const cryptoArticles = [
  {
    title: 'The Rise of Crypto: How Digital Currencies are Changing the Financial Landscape',
    image: '/assets/NewsSection/image4.webp',
  },
  {
    title: 'Uncovering the Mysteries of Crypto: A Beginner’s Guide',
    image: '/assets/NewsSection/image5.webp',
  },
  {
    title: 'The Future of Finance: How Crypto is Disrupting the Traditional Banking System',
    image: '/assets/NewsSection/image6.webp',
  },
  {
    title: 'Crypto Investment Strategies: How to Maximize Your Returns Safely',
    image: '/assets/NewsSection/image7.webp',
  },
];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < newsData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  const { designNews, mainArticle } = newsData[currentIndex];
  return (
    <>
      {/* Design News and Main Article */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          p: 4,
          bgcolor: 'white',
          alignItems: 'flex-start',
        }}>
        
        {/* Design News Section */}
        <Box flex={{ xs: 1, md: 1.2 }} maxWidth={{ md: '25%' }}
          sx={{ position: 'relative', left: '16px' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {designNews.title}
            </Typography>
            <Box sx={{ mb: 2, width: '100%' }}>
              <Card sx={{ width: '100%' }}>
                {designNews.articles[0].img && (
                  <CardMedia
                    component="img"
                    image={designNews.articles[0].img}
                    alt={designNews.articles[0].title}
                    sx={{ maxHeight: 150, width: '100%', objectFit: 'cover' }}/>
                )}
                <CardContent sx={{ py: 1, px: 1 }}>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    {currentIndex !== 0 && (
                      <Box component="span" sx={{ mr: 1, color: 'text.secondary' }}>›</Box>
                    )}
                    {designNews.articles[0].title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <List dense disablePadding>
              {designNews.articles.slice(1).map((article, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'body2',
                      sx: { color: 'text.primary', fontWeight: 'bold' },
                    }}
                  primary={`› ${article.title}`}/>
                </ListItem>
              ))}
            </List>
            <Box sx={{ mt: 2, height: 40, display: 'flex', justifyContent: 'center', gap: 1 }}>
              <Button
                onClick={handlePrev}
                variant="outlined"
                color="primary"
                size="small"
                sx={{ textTransform: 'none', minWidth: 80, borderRadius: 0 }}>
                &lt; Prev
              </Button>
              <Button
                onClick={handleNext}
                variant="outlined"
                color="primary"
                size="small"
                sx={{ textTransform: 'none', minWidth: 80, borderRadius: 0 }}>
                Next &gt;
              </Button>
            </Box>
        </Box>

        {/* Main Article Section */}
        <Box flex={{ xs: 1, md: 2.5 }} sx={{ mt: 4, ml: 6 }}>
          <Card sx={{ mb: 2, mt: 0 }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                image={mainArticle.img}
                alt={mainArticle.title}
                height="300"/>
              <Chip
                label={mainArticle.category}
                size="small"
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  fontWeight: 'bold',
                  bgcolor: '#f7941d',
                  color: '#fff',
                  borderRadius: 0,
                  px: 1,
                }}/>
            </Box>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {mainArticle.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {mainArticle.excerpt}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Spacer */}
        <Box flex={{ xs: 0, md: 2 }} />
      </Box>

      <Box sx={{ bgcolor: 'white' }}>
        {/* Architecture News Section */}
        <Box
          sx={{
            bgcolor: 'white',
            display: 'flex',
            justifyContent: 'flex-start',
            px: 4,
            pt: 0,
            mt: 0,
          }}>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Box
              sx={{
                width: { xs: '100%', md: '66.66%' },
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                ARCHITECTURE NEWS
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                }}>
                {cryptoArticles.slice(0, 2).map((article, index) => (
                  <Card key={index} sx={{ flex: 1, position: 'relative', borderRadius: 0, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={article.image}
                      alt={article.title}
                      sx={{ height: 300, objectFit: 'cover' }}/>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        px: 2,
                        pb: 2,
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
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
                          borderRadius: 0,
                        }}>
                        CRYPTO
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="white"
                        sx={{ lineHeight: 1.4 }}>
                        {article.title}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                }}>
                {cryptoArticles.slice(2).map((article, index) => (
                  <Card key={index} sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Box sx={{ display: 'flex' }}>
                      <CardMedia
                        component="img"
                        image={article.image}
                        alt={article.title}
                        sx={{ width: 100, height: 100, objectFit: 'cover' }}/>
                      <CardContent sx={{ p: 1 }}>
                        <Typography variant="body2" fontWeight="medium">
                          {article.title}
                        </Typography>
                      </CardContent>
                    </Box>
                    <List dense sx={{ pl: 2 }}>
                      <ListItem disableGutters sx={{ py: 0 }}>
                        <ListItemText
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { fontSize: '0.85rem' },
                          }}
                          primary="› Crypto Investing 101: A Beginner’s Guide to Navigating the Market"/>
                      </ListItem>
                      <ListItem disableGutters sx={{ py: 0 }}>
                        <ListItemText
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { fontSize: '0.85rem' },
                          }}
                          primary="› Artificial Intelligence and the Job Market: Will It Create or Eliminate Jobs"/>
                      </ListItem>
                    </List>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Technology News Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            px: 4,
            pt: 0,
            mt: 4,
          }}>
          <Box sx={{ display: 'flex', width: '100%' }}>
            {/* Main Content Area (4/6) */}
            <Box
              sx={{
                width: { xs: '100%', md: '66.66%' },
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                TECHNOLOGY
              </Typography>
              {/* First Row */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                }}>
                {[
                  {
                    title: 'Revolutionizing Finance: How Fintech is Changing the Game',
                    image: '/assets/NewsSection/image8.webp',
                  },
                  {
                    title: 'Revolutionizing the Financial Industry: How Fintech is Changing the Game',
                    image: '/assets/NewsSection/image9.webp',
                  },
                ].map((article, index) => (
                  <Card key={index} sx={{ flex: 1, position: 'relative', borderRadius: 0, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={article.image}
                      alt={article.title}
                      sx={{ height: 300, objectFit: 'cover' }}/>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        px: 2,
                        pb: 2,
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
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
                          borderRadius: 0,
                        }}>
                        FINTECH
                      </Box>
                      <Typography variant="h6" fontWeight="bold" color="white" sx={{ lineHeight: 1.4 }}>
                        {article.title}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
              {/* Second Row */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                }}>
                {[
                  {
                    title: '5 Ways Fintech is Revolutionizing the Banking Industry',
                    image: '/assets/NewsSection/image10.webp',
                  },
                  {
                    title: 'Advantages of Fintech in Finance',
                    image: '/assets/NewsSection/image11.webp',
                  },
                ].map((article, index) => (
                  <Card key={index} sx={{ flex: 1, position: 'relative', borderRadius: 0, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={article.image}
                      alt={article.title}
                      sx={{ height: 300, objectFit: 'cover' }}/>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        px: 2,
                        pb: 2,
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
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
                          borderRadius: 0,
                        }}>
                        FINTECH
                      </Box>
                      <Typography variant="h6" fontWeight="bold" color="white" sx={{ lineHeight: 1.4 }}>
                        {article.title}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
            {/* Empty Spacer Area (2/6) */}
            <Box flex={{ xs: 0, md: 2 }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewsSection;