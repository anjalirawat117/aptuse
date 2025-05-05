import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import allCategoryArticle from '../data/article';
import Sidebar from '../components/Sidebar/sidebar';
import { Link } from 'react-router-dom';

export default function CategoryPage() {
  const { name } = useParams();
  const categoryKey = name.toLowerCase();
  const articles = allCategoryArticle[categoryKey] || [];
  return (
    <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 }, py: 6 }}>
      <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 4 }}>
        {/* Main Articles - 4/6 */}
        <Box sx={{ flex: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: '2rem',
                color: '#f7941d',
                fontWeight: 500,
                mb: 3,
              }}>
              {name.toUpperCase()}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: 'gray',
                textTransform: 'uppercase',
              }}>
              {name}
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {articles.map((article) => (
              <Box key={article.id} sx={{ mb: 4 }}>
                <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      overflow: 'hidden',
                      borderRadius: 1,
                    }}>
                    {/* AI Chip in top-left */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        backgroundColor: '#f7941d',
                        color: '#fff',
                        fontSize: '0.75rem',
                        px: 1,
                        py: 0.5,
                        borderRadius: '2px',
                        fontWeight: 600,
                        zIndex: 2,
                        pointerEvents: 'auto',
                      }}>
                      {article.category.toUpperCase()}
                    </Box>
                    {/* Image Wrapper with hover effect */}
                    <Box
                      sx={{
                        position: 'relative',
                        zIndex: 0,
                        '&:hover .image-overlay': {
                          opacity: 1,
                        },
                      }}>
                      {/* Yellow overlay */}
                      <Box
                        className="image-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          bgcolor: 'rgba(239, 209, 109, 0.15)',
                          opacity: 0,
                          zIndex: 1,
                          transition: 'opacity 0.3s ease-in-out',
                        }}/>
                      {/* Image */}
                      <Box
                        component="img"
                        src={article.image}
                        alt={article.title}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: 1,
                          zIndex: 0,
                        }}/>
                    </Box>
                  </Box>
                  {/* Clickable Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      fontWeight: 'bold',
                      transition: 'color 0.3s',
                      '&:hover': {
                        color: '#f7941d',
                      },
                    }}>
                    {article.title}
                  </Typography>
                </Link>
                {/* Non-clickable excerpt */}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {article.excerpt}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {/* Sidebar - 2/6 */}
        <Box sx={{ flex: 2 }}>
          <Sidebar />
        </Box>
      </Box>
    </Box>
  );
}