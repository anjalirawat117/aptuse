import React from 'react';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

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
          component={RouterLink}
          to="/"
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
            <Link
              key={category}
              component={RouterLink}
              to={`/category/${category.toLowerCase().replace(' ', '-')}`}
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
            </Link>
          ))}
        </Box>
        {/* Search Icon */}
        <IconButton edge="end" component={RouterLink} to="/search" aria-label="Search">
          <SearchIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppbarDesktop;