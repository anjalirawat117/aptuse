import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function NewsDetailsPage() {
  const { id } = useParams();
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 6, maxWidth: 1000, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        News Article ID: {id}
      </Typography>
      <Typography>
        This is the placeholder page for news article #{id}. You can fetch or display full content here.
      </Typography>
    </Box>
  );
}