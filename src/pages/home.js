import React from 'react';
import { Box } from '@mui/material';
import ImageSlider from "../components/Slider/slider";
import NewsSection from "../components/NewsSection/newssection";
import LatestNews from "../components/LatestNews/latestnews";
import Technology from "../components/Technology/technology";
import Architecture from "../components/Architecture/architecture";
import Sidebar from "../components/Sidebar/sidebar";

export default function Home() {
  return (
    <>
      {/* Image Slider */}
      <Box
        sx={{
          p: 0,
          m: 0,
          width: '100%',
          backgroundColor: '#fff',
          borderTop: '1px solid #ddd',
        }}>
        <ImageSlider />
      </Box>
      {/* Main Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 }, py: 4 }}>
        <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 4, alignItems: 'flex-start' }}>
          <Box sx={{ flex: 2, minWidth: 0 }}>
            <NewsSection />
            <Architecture />
            <Technology />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0, mt: { xs: 4, md: 0 } }}>
            <Sidebar />
          </Box>
        </Box>
      </Box>
      {/* Bottom News Section */}
      <LatestNews />
    </>
  );
}