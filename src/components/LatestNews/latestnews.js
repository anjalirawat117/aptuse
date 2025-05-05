import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const newsData = [
  {
    title: "The Importance of High-Quality Kitchen Appliances",
    image: "/assets/LatestNews/image1.png",
    category: "KITCHEN APPLIANCES",
  },
  {
  title: "Beyond the Basics: Innovative Home Appliances to Simplify Your Life",
  image: "/assets/LatestNews/image2.webp",
  category: "HOME APPLIANCES",
  },    
  {
    title: "The Ultimate Guide to Choosing the Right Beauty Tools for Your Skin Type",
    image: "/assets/LatestNews/image3.png",
    category: "BEAUTY TOOLS",
  },
  {
    title: "The Ultimate Guide to Choosing the Right Skincare Tool",
    image: "/assets/LatestNews/image4.webp",
    category: "BEAUTY TOOLS",
  },
  {
    title: "Revamp Your Home with Smart Appliances: The Future of Home Technology",
    image: "/assets/LatestNews/image5.webp",
    category: "HOME APPLIANCES",
  },
  {
    title: "How to Choose the Perfect Home Appliance: A Comprehensive Guide",
    image: "/assets/LatestNews/image6.webp",
    category: "HOME APPLIANCES",
  },
  {
    title: "From Makeup Brushes to Rollers: The Ultimate Guide to Beauty Tool",
    image: "/assets/LatestNews/image7.webp",
    category: "BEAUTY TOOLS",
  },
  {
    title: "10 Must-Have Home Appliances for a Modern and Efficient Household",
    image: "/assets/LatestNews/image8.webp",
    category: "HOME APPLIANCES",
  },
  {
    title: "The Ultimate Guide to Choosing the Best Home Appliances for Your Needs",
    image: "/assets/LatestNews/image9.webp",
    category: "HOME APPLIANCES",
  },
  {
    title: "10 Must-Have Beauty Tools for Flawless Makeup Application",
    image: "/assets/LatestNews/image10.webp",
    category: "BEAUTY TOOLS",
  },
  {
    title: "5 Must-Have Beauty Tools for a Flawless Look: A Comprehensive Guide",
    image: "/assets/LatestNews/image11.webp",
    category: "BEAUTY TOOLS",
  },
  {
    title: "Revamp Your Cooking Experience with These Must-Have Kitchen Appliances",
    image: "/assets/LatestNews/image12.webp",
    category: "KITCHEN APPLIANCES",
  },
  {
    title: "5 Kitchen Appliances Every Home Chef Needs in 2021",
    image: "/assets/LatestNews/image13.webp",
    category: "KITCHEN APPLIANCES",
  },
  {
    title: "10 Must-Have Appliances for Your Modern Kitchen",
    image: "/assets/LatestNews/image14.webp",
    category: "KITCHEN APPLIANCES",
  },
  {
    title: "The Importance of Having the Right Kitchen Appliances",
    image: "/assets/LatestNews/image15.webp",
    category: "KITCHEN APPLIANCES",
  },
];

export default function LatestNews() {
  const [visibleCount, setVisibleCount] = useState(9);
  const handleLoadMore = () => {
    if (visibleCount >= newsData.length) return;
    setVisibleCount((prev) => prev + 6);
  };
  const isAllLoaded = visibleCount >= newsData.length;
  return (
    <Box sx={{ px: 3, py: 5, bgcolor: '#fff' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 4,
          gap: 2,
        }}>
        <RouterLink to="/news" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
            }}>
            LATEST NEWS
          </Typography>
        </RouterLink>
        <Box sx={{ flexGrow: 1, height: 2, backgroundColor: '#ddd' }} />
      </Box>
      <Grid container spacing={3}>
        {newsData.slice(0, visibleCount).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component={RouterLink}
              to={`/news/${index}`}
              sx={{
                position: 'relative',
                display: 'block',
                height: '100%',
                textDecoration: 'none',
                '&:hover .yellowOverlay': {
                  opacity: 1,
                },
              }}>
              <Card
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: 3,
                }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={item.image}
                    alt={item.title}
                    sx={{ width: '100%', objectFit: 'cover' }}/>
                  {/* Yellow Hover Effect */}
                  <Box
                    className="yellowOverlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(239, 231, 153, 0.25)', // Light yellow
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      zIndex: 1,
                    }}/>
                  {/* Black Gradient at bottom for text readability */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '40%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      zIndex: 2,
                    }}/>
                  <CardContent
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      right: 16,
                      zIndex: 3,
                      color: '#fff',
                      p: 0,
                    }}>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        backgroundColor: '#f57c00',
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: '0.625rem',
                        borderRadius: '4px',
                        px: 1.5,
                        py: 0.25,
                        height: '22px',
                        mb: 1,
                        lineHeight: 1.2,
                      }}
                      component={RouterLink}
                      to={`/category/${item.category.toLowerCase().replace(/\s/g, '-')}`}/>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.4,
                        color: '#fff',
                      }}>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" mt={5}>
        <Button
          variant="contained"
          onClick={handleLoadMore}
          disabled={isAllLoaded}
          sx={{
            backgroundColor: '#f57c00',
            '&:hover': { backgroundColor: '#ef6c00' },
            px: 4,
            py: 1.5,
            fontWeight: 600,
          }}>
          {isAllLoaded ? 'No More Posts' : 'Load More'}
        </Button>
      </Box>
    </Box>
  );
}