import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, CardMedia, Button } from '@mui/material';
import SidebarNews from '../components/SidebarNews/sidebarnews';
import allCategoryArticle from '../data/article';
import { Facebook, Twitter, Google, Pinterest, Add } from '@mui/icons-material';

export default function ArticlePage() {
  const { state } = useLocation();
  const { article } = state || {};
  const navigate = useNavigate();
  if (!article) {
    return (
      <Typography sx={{ p: 4 }} variant="h6">
        Article not found. Please navigate from the homepage.
      </Typography>
    );
  }
  const categoryArticles = allCategoryArticle[article.category.toLowerCase()] || [];
  const index = categoryArticles.findIndex((a) => a.title === article.title);
  const prevArticle = categoryArticles[index - 1];
  const nextArticle = categoryArticles[index + 1];
  return (
    <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 }, py: 6 }}>
      <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 4 }}>
        {/* Main Content - 4/6 */}
        <Box sx={{ flex: 4 }}>
          {/* Tag */}
          <Box
            onClick={() => navigate(`/category/${article.category.toLowerCase()}`)}
            sx={{
              display: 'inline-block',
              backgroundColor: '#f7941d',
              color: '#fff',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontWeight: 600,
              mb: 2,
              cursor: 'pointer',
            }}>
            {article.category.toUpperCase()}
          </Box>
          {/* Title */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', my: 2 }}>
            {article.title}
          </Typography>
          {/* Share Buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 3,
              px: 2,
              py: 1,
              bgcolor: '#f2f2f2'
            }}>
            <Button
              variant="contained"
              startIcon={<Facebook />}
              sx={{
                bgcolor: '#3b5998',
                color: '#fff',
                textTransform: 'none',
                px: 2,
                '&:hover': { bgcolor: '#2d4373' },
              }}>
              Share on Facebook
            </Button>
            <Button
              variant="contained"
              startIcon={<Twitter />}
              sx={{
                bgcolor: '#00aced',
                color: '#fff',
                textTransform: 'none',
                px: 2,
                '&:hover': { bgcolor: '#0084b4' },
              }}>
                Share on Twitter
            </Button>
            <Button
              variant="contained"
              sx={{
                minWidth: '40px',
                bgcolor: '#dd4b39',
                color: '#fff',
                px: 1.5,
                '&:hover': { bgcolor: '#c23321' },
              }}>
              <Google />
            </Button>
            <Button
              variant="contained"
              sx={{
                minWidth: '40px',
                bgcolor: '#bd081c',
                color: '#fff',
                px: 1.5,
                '&:hover': { bgcolor: '#8c0615' },
              }}>
              <Pinterest />
            </Button>
            <Button
              variant="contained"
              sx={{
                minWidth: '40px',
                bgcolor: '#aaa',
                color: '#fff',
                px: 1.5,
                '&:hover': { bgcolor: '#888' },
              }}>
              <Add />
            </Button>
          </Box>
          {/* Image */}
          <CardMedia
            component="img"
            image={article.image}
            alt={article.title}
            sx={{ borderRadius: 2, mb: 2 }}/>
          {/* Category Caption */}
          <Typography
            variant="subtitle2"
            sx={{
              fontStyle: 'italic',
              textAlign: 'center',
              mb: 3,
              color: 'gray'
            }}>
            {article.category.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </Typography>
          {/* Article Content */}
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            {article.content || article.excerpt || 'Full article content coming soon.'}
          </Typography>
          {/* Share Buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 3,
              px: 2,
              py: 1,
              bgcolor: '#f2f2f2'
            }}>
            <Button
              variant="contained"
              startIcon={<Facebook />}
              sx={{
                bgcolor: '#3b5998',
                color: '#fff',
                textTransform: 'none',
                px: 2,
                '&:hover': { bgcolor: '#2d4373' },
              }}>
              Share on Facebook
            </Button>
            <Button
              variant="contained"
              startIcon={<Twitter />}
              sx={{
                bgcolor: '#00aced',
                color: '#fff',
                textTransform: 'none',
                px: 2,
                '&:hover': { bgcolor: '#0084b4' },
              }}>
                Share on Twitter
            </Button>
            <Button
              variant="contained"
              sx={{
                minWidth: '40px',
                bgcolor: '#dd4b39',
                color: '#fff',
                px: 1.5,
                '&:hover': { bgcolor: '#c23321' },
              }}>
              <Google />
            </Button>
            <Button
              variant="contained"
              sx={{
                minWidth: '40px',
                bgcolor: '#bd081c',
                color: '#fff',
                px: 1.5,
                '&:hover': { bgcolor: '#8c0615' },
              }}>
              <Pinterest />
            </Button>
            <Button
              variant="contained"
              sx={{
                minWidth: '40px',
                bgcolor: '#aaa',
                color: '#fff',
                px: 1.5,
                '&:hover': { bgcolor: '#888' },
              }}>
              <Add />
            </Button>
          </Box>
          {/* Prev/Next Links */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', my: 4 }}>
            {prevArticle ? (
              <Box sx={{ maxWidth: '48%' }}>
                <Typography
                  variant="caption"
                  sx={{ color: 'gray', fontWeight: 500, display: 'block', mb: 1 }}>
                  ← Previous Article
                </Typography>
                <Typography
                  variant="subtitle1"
                  onClick={() =>
                    navigate(`/article/${prevArticle.category.toLowerCase()}/${prevArticle.id}`, {
                      state: { article: prevArticle }
                  })}
                  sx={{
                    fontWeight: 500,
                    color: 'black',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#f7941d' }
                  }}>
                  {prevArticle.title}
                </Typography>
              </Box>
            ) : <Box />}
            {nextArticle ? (
              <Box sx={{ maxWidth: '48%', textAlign: 'right' }}>
                <Typography
                  variant="caption"
                  sx={{ color: 'gray', fontWeight: 500, display: 'block', mb: 1 }}>
                  Next Article →
                </Typography>
                <Typography
                  variant="subtitle1"
                  onClick={() =>
                    navigate(`/article/${nextArticle.category.toLowerCase()}/${nextArticle.id}`, {
                      state: { article: nextArticle }
                  })}
                  sx={{
                    fontWeight: 500,
                    color: 'black',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#f7941d' }
                  }}>
                  {nextArticle.title}
                </Typography>
              </Box>
            ) : <Box />}
          </Box>
          {/* Related Articles */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            {['RELATED ARTICLES', 'MORE FROM AUTHOR', 'MORE FROM CATEGORY'].map((label, idx) => (
              <Box
                key={idx}
                sx={{
                  backgroundColor: label === 'RELATED ARTICLES' ? '#000' : '#ccc',
                  color: label === 'RELATED ARTICLES' ? '#fff' : '#fff',
                  px: 2,
                  py: 0.75,
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: label === 'RELATED ARTICLES' ? '#000' : '#aaa',
                  },
                }}>
                {label}
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {categoryArticles
              .filter(a => a.title !== article.title)
              .slice(0, 3)
              .map((related) => (
                <Box
                  key={related.id}
                  onClick={() => navigate(`/article/${related.category.toLowerCase()}/${related.id}`, { state: { article: related } })}
                  sx={{ width: 'calc(33% - 10px)', cursor: 'pointer' }}>
                  <CardMedia
                    component="img"
                    image={related.image}
                    alt={related.title}
                    sx={{ borderRadius: 1, mb: 1, height: 160, objectFit: 'cover' }}/>
                  <Typography variant="body2" fontWeight="bold">
                    {related.title}
                  </Typography>
                </Box>
              ))}
          </Box>
          {/* Leave a Reply */}
          <Typography variant="h6" sx={{ mt: 6, mb: 2, fontWeight: 'bold' }}>
            Leave a Reply
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <textarea placeholder="Comment" rows={4} style={{ padding: 10, fontSize: 16 }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <input type="text" placeholder="Name*..." style={{ flex: 1, padding: 10 }} />
              <input type="email" placeholder="Email*..." style={{ flex: 1, padding: 10 }} />
              <input type="text" placeholder="Website..." style={{ flex: 1, padding: 10 }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <input type="checkbox" />
              <Typography variant="body2">
                Save my name, email, and website in this browser for the next time I comment.
              </Typography>
            </Box>
            <Box sx={{ width: 'fit-content' }}>
              <button
                type="submit"
                style={{
                  padding: '8px 20px',
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.background = '#f7941d')}
                onMouseOut={(e) => (e.target.style.background = '#000')}>
                SEND
              </button>
            </Box>
         </Box>
        </Box>
        {/* Sidebar - 2/6 */}
        <Box sx={{ flex: 2 }}>
          <SidebarNews />
        </Box>
      </Box>
    </Box>
  );
}