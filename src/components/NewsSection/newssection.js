import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const CategoryChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: "#fff",
  fontWeight: 600,
  fontSize: "0.7rem",
}));

const NewsCard = ({ title, image, description }) => (
  <Card sx={{ mb: 2 }}>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography variant="subtitle1" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

const NewsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 6 }}>
      <Box
        sx={{
          mx: "auto",
          width: { xs: "100%", md: "66.66%" },
          px: 2,
        }}
      >
        <Grid container spacing={4} direction="column">
          {/* Design News Section */}
          <Grid item>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Design News
            </Typography>
            <NewsCard
              title="From Start-ups to Multinationals: The Importance of Software..."
              image="assets/NewsSection/image1.webp"
              description="Understanding how software influences design operations globally."
            />
            <List dense>
              {["10 Essential Software Tools...", "The Future of Software..."].map(
                (title, index) => (
                  <React.Fragment key={index}>
                    <ListItem disableGutters>
                      <ListItemText primary={title} />
                    </ListItem>
                    {index !== 1 && <Divider />}
                  </React.Fragment>
                )
              )}
            </List>
          </Grid>

          {/* Technology News Section (Main Article) */}
          <Grid item>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Technology Highlight
            </Typography>
            <Card>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image="assets/NewsSection/image2.webp"
                  alt="Main"
                  sx={{ height: 300, width: "100%", objectFit: "cover" }}
                />
                <CategoryChip
                  label="Software"
                  sx={{ position: "absolute", top: 16, left: 16 }}
                />
              </Box>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Maximizing Your Productivity with the Right Software
                </Typography>
                <Typography variant="body2" mt={1}>
                  In today’s fast-paced and increasingly digital world,
                  maximizing productivity is essential for success...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Architecture News Section */}
          <Grid item>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Architecture News
            </Typography>
            <Grid container spacing={2}>
              {[1, 2, 3].map((index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="160"
                      image="assets/NewsSection/image4.webp"
                      alt={`Architecture News ${index}`}
                    />
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Architecture Breakthrough #{index}
                      </Typography>
                      <Typography variant="body2">
                        Exploring modern trends and technology shaping today's
                        architecture landscape...
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NewsSection;