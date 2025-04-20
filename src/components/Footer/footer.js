import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", px: { xs: 2, md: 10 }, py: 6 }}>
      {/* Main Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 4,
        }}>
        {/* APTUSE INFO SECTION */}
        <Box flex={1} minHeight="100%" sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box
              component="img"
              src="/assets/Logo/logo.png"
              alt="AptUse Logo"
              sx={{ height: 80, width: 300, mx: { xs: "auto", md: "0" } }}/>
            <Typography variant="body1">
              AptUse – Unlocking the Power of Tech Knowledge
            </Typography>
            <Typography variant="body1">
              Welcome to AptUse, your trusted source for unlocking the power of technology. We are a
              dedicated team of tech enthusiasts committed to sharing valuable insights, expert
              advice, and the latest trends in the world of technology.
            </Typography>
          </Box>
        </Box>
        {/* TECHNOLOGY SECTION */}
        <Box flex={1} minHeight="100%" textAlign="left">
          <Typography variant="h6" color="orange" gutterBottom>
            TECHNOLOGY
          </Typography>
          {[
            {
              title: "TLS Vs SSL: Exploring The Safeguards Of Digital Communication",
              img: "/assets/Footer/image1.png",
              link: "/tls-vs-ssl",
            },
            {
              title: "Benefits Of Secure Browsing With NordVPN And Steps To Install It",
              img: "/assets/Footer/image2.webp",
              link: "/nordvpn-benefits",
            },
            {
              title: "The Importance of High-Quality Kitchen Appliances",
              img: "/assets/Footer/image3.png",
              link: "/kitchen-appliances",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}>
              {/* Image with yellowish blur effect */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  mr: 2,
                  position: "relative",
                  borderRadius: 1,
                  overflow: "hidden",
                  flexShrink: 0,
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.3s ease",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(235, 211, 125, 0.3)", // yellow overlay
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover::after": {
                    opacity: 1,
                  },
                }}>
                <img src={item.img} alt={item.title} />
              </Box>
              {/* Text link - only turns orange on its own hover */}
              <Link
                href={item.link}
                color="inherit"
                underline="none"
                sx={{
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "orange",
                  },
                }}>
                <Typography variant="body2">{item.title}</Typography>
              </Link>
            </Box>
          ))}
        </Box>
        {/* QUICK LINKS SECTION */}
        <Box flex={1} minHeight="100%" textAlign="left">
          <Typography variant="h6" color="orange" gutterBottom>
            QUICK LINKS
          </Typography>
          {[
            { name: "About Us", href: "/about" },
            { name: "Contact Us", href: "/contact" },
            { name: "Disclaimer", href: "/disclaimer" },
            { name: "Terms and Conditions", href: "/terms-and-conditions" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              underline="none"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "orange",
                },
              }}>
              {item.name}
            </Link>
          ))}
        </Box>
      </Box>
      {/* Bottom Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          mt: 6,
          fontSize: "14px",
          gap: 2,
        }}>
        <Typography>© 2023 - AptUse. All Rights Reserved.</Typography>
        <Box display="flex" gap={3}>
          {["Privacy Policy", "Affiliate Policy", "Cookie Policy", "Sitemap"].map((text, index) => (
            <Link
              key={index}
              href={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
              underline="none"
              color="inherit"
              sx={{
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "gray",
                },
              }}>
              {text}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;