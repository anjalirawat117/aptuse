import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const Sidebar = () => {
  const sidebarArticles = [
    {
      image: '/assets/Tech/image1.webp',
      tag: 'WEB HOSTING',
      title: 'The Ultimate Guide to Choosing the Best Web Hosting for Your Website',
    },
    {
      image: '/assets/Tech/image2.webp',
      tag: 'WEB HOSTING',
      title: 'Importance of choosing the right web hosting for your business',
    },
    {
      image: '/assets/Tech/image3.webp',
      tag: 'WEB HOSTING',
      title: 'Choosing the Best Web Hosting Provider: A Comprehensive Guide',
    },
    {
      image: '/assets/Tech/image4.png',
      tag: 'WEB HOSTING',
      title: 'Why Web Hosting is Crucial for Your Website’s Success',
    },
  ];

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        TECHNOLOGY
      </Typography>
      {sidebarArticles.map((article, index) => (
        <Card key={index} sx={{ mb: 2, boxShadow: 'none' }}>
          <CardMedia
            component="img"
            height="140"
            image={article.image}
            alt={article.title}
          />
          <CardContent sx={{ padding: '8px 0' }}>
            <Typography variant="caption" color="primary" fontWeight="bold">
              {article.tag}
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {article.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Sidebar;
