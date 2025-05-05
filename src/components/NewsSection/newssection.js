import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
  Divider,
} from "@mui/material";

const clickableTextStyle = {
  color: "text.primary",
  cursor: "pointer",
  transition: "color 0.3s",
  "&:hover": {
    color: "orange"
  }
};

const slides = [
  {
    title: "Maximizing Your Productivity with the Right Software: Tips and Tricks",
    subtitle: "In today’s fast-paced and increasingly digital world, maximizing productivity is essential for success. Whether you’re an entrepreneur, a freelancer, or …",
    image: "/assets/Newssection/image2.webp",
    category: "SOFTWARE",
    sideNews: [
      "10 Essential Software Tools for Small Business Owners to Streamline Operations",
      "The Future of Software: Predictions for the Next Decade",
    ],
    thumbnail: "/assets/Newssection/image1.webp",
    highlightedTitle: "From Start-ups to Multinationals: The Importance of Software in Business Growth"
  },
  {
    title: "Revolutionizing the Future: How Software is Changing the World",
    subtitle: "The world we live in today is vastly different from what it was just a few decades ago. With the...",
    image: "/assets/Newssection/image3.webp",
    category: "SOFTWARE",
    sideNews: [
      "Revolutionizing the Future: How Software is Changing the World",
    ],
    thumbnail: "/assets/Newssection/image1.webp",
    highlightedTitle: "Innovations in Software Reshaping Tomorrow’s Technology"
  },
];

const ImageWithHover = ({ src, alt, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "relative",
      borderRadius: 2,
      overflow: "hidden",
      cursor: "pointer",
      "&:hover .overlay": {
        opacity: 1,
      }
    }}>
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "100%",
        display: "block",
        borderRadius: 2
      }}/>
    <Box
      className="overlay"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 204, 0.25)", // light yellowish
        opacity: 0,
        transition: "opacity 0.3s ease"
      }}/>
  </Box>
);

const NewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = slides[activeIndex];
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid container spacing={2} sx={{ width: "100%", mt: 4 }}>
      <Grid item xs={12} md={8}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}> 
          <Box flex={2} sx={{ order: { xs: 2, md: 2 } }}>
            {!isDesktop && (
              <Link href="/design-news" underline="none" color="inherit">
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Design News
                </Typography>
              </Link>
            )}
            <Box>
              <Box sx={{ position: "relative", mb: 2 }}>
                <ImageWithHover
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  onClick={() => console.log("Main image clicked")}/>
                <Typography
                  variant="caption"
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "orange",
                    color: "#fff",
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontWeight: 500,
                    cursor: "pointer",
                    zIndex: 1
                  }}
                  onClick={() => console.log("Category clicked:", currentSlide.category)}>
                  {currentSlide.category}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                onClick={() => console.log("Main title clicked:", currentSlide.title)}
                sx={clickableTextStyle}>
                {currentSlide.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currentSlide.subtitle}
              </Typography>
            </Box>
          </Box>
          <Box flex={1} sx={{ order: { xs: 3, md: 1 } }}>
            {isDesktop && (
              <Link href="/architecture-news" underline="none" color="inherit">
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Design News
                </Typography>
              </Link>
            )}
            {!(activeIndex === 1) && (
              <Box mb={2}>
                <ImageWithHover
                  src={currentSlide.thumbnail}
                  alt="design-thumbnail"
                  onClick={() => console.log("Thumbnail clicked")}/>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  mt={1}
                  onClick={() => console.log("Highlighted title clicked:", currentSlide.highlightedTitle)}
                  sx={clickableTextStyle}>
                  {currentSlide.highlightedTitle}
                </Typography>
                <Box my={1}>
                  <Divider sx={{ borderColor: "#f9f9f9", borderBottomWidth: "1px" }} />
                </Box>
              </Box>
            )}
            {currentSlide.sideNews.map((item, i) => (
              <Box key={i} mb={2}>
                <Typography
                  variant="body2"
                  sx={{
                    ...clickableTextStyle,
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold"
                  }}
                  onClick={() => console.log("Side news clicked:", item)}
                >
                  <Box component="span" sx={{ mr: 1, fontSize: "1.1rem", lineHeight: 1 }}>{'>'}</Box>
                  {item}
                </Typography>
                {i !== currentSlide.sideNews.length - 1 && (
                  <Box my={1}>
                    <Divider sx={{ borderColor: "#f7f7f7", borderBottomWidth: "1px" }} />
                  </Box>
                )}
              </Box>
            ))}
            <Box display="flex" gap={1} mt={2}>
              {/* Prev Button */}
              <Box
                component="button"
                disabled={activeIndex === 0}
                onClick={() => {
                  if (activeIndex > 0) {
                    setActiveIndex((prev) => prev - 1);
                  }
                }}
                style={{
                  border: '1px solid black',
                  padding: '6px 16px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  color: 'black',
                  cursor: activeIndex === 0 ? 'default' : 'pointer',
                  pointerEvents: activeIndex === 0 ? 'none' : 'auto',
                  transition: '0.3s',
                }}
                onMouseEnter={(e) => {
                  if (activeIndex > 0) {
                    e.currentTarget.style.backgroundColor = 'black';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'black';
                }}>
                ‹ Prev
              </Box>
              {/* Next Button */}
              <Box
                component="button"
                disabled={activeIndex === slides.length - 1}
                onClick={() => {
                  if (activeIndex < slides.length - 1) {
                    setActiveIndex((prev) => prev + 1);
                  }
                }}
                style={{
                  border: '1px solid black',
                  padding: '6px 16px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  color: 'black',
                  cursor: activeIndex === slides.length - 1 ? 'default' : 'pointer',
                  pointerEvents: activeIndex === slides.length - 1 ? 'none' : 'auto',
                  transition: '0.3s',
                }}
                onMouseEnter={(e) => {
                  if (activeIndex < slides.length - 1) {
                    e.currentTarget.style.backgroundColor = 'black';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'black';
                }}>
                Next ›
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}/>
    </Grid>
  );
};

export default NewsSection;