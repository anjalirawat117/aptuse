import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Chip } from '@mui/material';

const images = [
    {
        id: 1,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 2,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 3,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 4,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 5,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 6,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 7,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 8,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 9,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 10,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 11,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 12,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 13,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 14,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
    {
        id: 15,
        title: "The Importance of High-Quality Kitchen Appliances",
        imgUrl: "/assets/LatestNews/image1.png",
        category: "KITCHEN APPLIANCES",
    },
];

const LatestNews = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [allShown, setAllShown] = useState(false);
  const handleLoadMore = () => {
    if (!allShown) {
      setVisibleCount(images.length);
      setAllShown(true);
    }
  };
  return (
    <Box sx={{ px: 4, py: 6, bgcolor: 'white' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Latest News
      </Typography>
      <Box sx={{ borderBottom: '2px solid #ccc', mb: 4, width: '100px' }} />
      <Grid container spacing={3}>
        {images.slice(0, visibleCount).map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box
              sx={{
                position: 'relative',
                height: 250,
                backgroundImage: `url(${item.imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                boxShadow: 3,
              }}>
              {/* Overlay for fade effect */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                }}/>
              <Box sx={{ position: 'relative', p: 2, zIndex: 2 }}>
                <Chip
                  label={item.category}
                  size="small"
                  sx={{
                    mb: 1,
                    backgroundColor: '#f57c00',
                    color: 'white',
                    fontWeight: 'bold',
                  }}/>
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                  {item.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleLoadMore}
          disabled={allShown}>
          {allShown ? 'No More Posts' : 'Load More'}
        </Button>
      </Box>
    </Box>
  );
};

export default LatestNews;