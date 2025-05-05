import React from 'react';
import { Box, Typography, CardMedia, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const architectureItems = [
  {
    img: '/assets/Footer/image1.png',
    title: 'TLS Vs SSL: Exploring The Safeguards Of Digital Communication',
    link: '/tls-vs-ssl',
    chips: ['TECH', 'NORDVPN']
  },
  {
    img: '/assets/Footer/image2.webp',
    title: 'Benefits Of Secure Browsing With NordVPN And Steps To Install It',
    link: '/nordvpn-benefits',
    chips: ['TECH', 'NORDVPN']
  },
  {
    img: '/assets/Footer/image3.png',
    title: 'The Importance of High-Quality Kitchen Appliances',
    link: '/kitchen-appliances',
    chips: ['KITCHEN APPLIANCES']
  }
];

const houseDesignItems = [
  {
    img: '/assets/Footer/image1.png',
    title: 'TLS Vs SSL: Exploring The Safeguards Of Digital Communication',
    link: '/tls-vs-ssl'
  },
  {
    img: '/assets/Footer/image2.webp',
    title: 'Benefits Of Secure Browsing With NordVPN And Steps To Install It',
    link: '/nordvpn-benefits'
  },
  {
    img: '/assets/Footer/image3.png',
    title: 'The Importance of High-Quality Kitchen Appliances',
    link: '/kitchen-appliances'
  },
  {
    img: '/assets/Tech/image1.webp',
    title: 'The Ultimate Guide to Choosing the Best Web Hosting for Your Website',
    link: '/best-web-hosting'
  }
];

export default function SidebarNews() {
  return (
    <Box>
      {/* ARCHITECTURE Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
          ARCHITECTURE
        </Typography>
        <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: '#ccc' }} />
      </Box>
      <Box>
        {architectureItems.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Box sx={{ position: 'relative', borderRadius: 1, overflow: 'hidden' }}>
              {/* Chips (Clickable) */}
              <Box sx={{ position: 'absolute', top: 8, left: 8, display: 'flex', gap: 1, zIndex: 2 }}>
                {item.chips.map((chip, i) => (
                  <Link
                    key={i}
                    component={RouterLink}
                    to={item.link}
                    underline="none"
                    sx={{
                      backgroundColor: '#f7941d',
                      color: '#fff',
                      px: 1,
                      py: 0.2,
                      fontSize: '0.65rem',
                      fontWeight: 'bold',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      '&:hover': {
                        backgroundColor: '#e07d00'
                      }
                    }}>
                    {chip}
                  </Link>
                ))}
              </Box>
              {/* Clickable Image with overlay */}
              <Link component={RouterLink} to={item.link} underline="none" sx={{ display: 'block' }}>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{ height: 180, objectFit: 'cover' }}/>
                <Box
                  className="hoverOverlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(239, 209, 109, 0.15)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1
                    }
                  }}/>
              </Link>
            </Box>
            {/* Clickable Text */}
            <Link
              component={RouterLink}
              to={item.link}
              underline="none"
              color="inherit"
              sx={{ '&:hover': { color: '#f7941d' }, fontWeight: 'bold' }}>
              <Typography variant="body1" mt={1} fontWeight="bold">
                {item.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
      {/* HOUSE DESIGN Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, mt: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
          HOUSE DESIGN
        </Typography>
        <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: '#ccc' }} />
      </Box>
      <Box>
        {houseDesignItems.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', mb: 2, gap: 2, position: 'relative' }}>
            <Link component={RouterLink} to={item.link} underline="none" sx={{ position: 'relative', display: 'block' }}>
              <CardMedia
                component="img"
                image={item.img}
                alt={item.title}
                sx={{ width: 60, height: 60, borderRadius: 1 }}/>
              <Box
                className="hoverOverlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(239, 209, 109, 0.15)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1
                  }
                }}/>
            </Link>
            <Link
              component={RouterLink}
              to={item.link}
              underline="none"
              color="inherit"
              sx={{ '&:hover': { color: '#f7941d' }, fontWeight: 'bold' }}>
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                {item.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}