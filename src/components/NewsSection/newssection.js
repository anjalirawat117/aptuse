import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Chip } from '@mui/material';

const newsData = {
  designNews: {
    title: 'Design News',
    articles: [
      {
        title: 'From Start-ups to Multinationals: The Importance of Software in Business Growth',
        img: "/assets/NewsSection/image1.webp",
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
    img: "/assets/NewsSection/image2.webp",
    excerpt:
      'In today’s fast-paced and increasingly digital world, maximizing productivity is essential for success. Whether you’re an entrepreneur, a freelancer, or ...',
  },
};

const ArticleCard = ({ title, img, category }) => (
  <Card sx={{ mb: 2 }}>
    {img && (
      <CardMedia component="img" image={img} alt={title} height="180" />
    )}
    <CardContent>
      {category && <Chip label={category} size="small" color="warning" sx={{ mb: 1 }} />}
      <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
    </CardContent>
  </Card>
);

const NewsSection = () => {
  const { designNews, mainArticle } = newsData;

  return (
    <Box sx={{ p: 4, bgcolor: 'white' }}>
      <Grid container spacing={4}>
        {/* Design News - Left Side */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>{designNews.title}</Typography>
          {designNews.articles.map((article, index) => (
            <ArticleCard key={index} title={article.title} img={article.img} />
          ))}
        </Grid>

        {/* Main Article - Right Side */}
        <Grid item xs={12} md={6}>
          <ArticleCard
            title={mainArticle.title}
            img={mainArticle.img}
            category={mainArticle.category}
          />
          <Typography variant="body2" color="text.secondary" mt={1}>
            {mainArticle.excerpt}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsSection;
