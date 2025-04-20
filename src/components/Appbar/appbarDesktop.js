import React from 'react';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function AppbarDesktop() {
  const categories = [
    'AI',
    'CRYPTO',
    'ELECTRONICS',
    'FINTECH',
    'SOFTWARE',
    'STARTUPS',
    'WEB HOSTING',
  ];
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0a0a0a', p: 0, m: 0 }}>
      <Toolbar sx={{ px: 0, height: '100px' }}>
        {/* Logo Section */}
        <Box
          component="a"
          href="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            mr: 2,
          }}>
          <Box
            component="img"
            src="/assets/Logo/logo.png"
            alt="AptUse"
            sx={{ height: 60 }}/>
        </Box>
        {/* Categories */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flex: 1,
            mr: 0.5,
          }}>
          {categories.map((category) => (
            <Box
              key={category}
              component="a"
              href={`/category/${category.toLowerCase().replace(' ', '-')}`}
              sx={{
                color: '#fff',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: 0,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'orange',
                  color: '#000',
                },
                px: 2,
                py: 0.5,
              }}>
              {category}
            </Box>
          ))}
        </Box>
        {/* Search Icon */}
        <IconButton edge="end" href="/search" aria-label="Search">
          <SearchIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppbarDesktop;