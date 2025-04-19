import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", px: 4, py: 6 }}>
      {/* Responsive row-to-column layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}>
        {/* APTUSE INFO SECTION */}
        <Box flex={1}>
          <Box display="flex" flexDirection="column" textAlign="left" gap={1}>
            <Box component="img"
              src="/assets/Logo/logo.png"
              alt="AptUse Logo"
              sx={{ height: 80, width: 300, mb: 1 }}/>
            <Typography variant="body1">
              AptUse – Unlocking the Power of Tech Knowledge
            </Typography>
            <Typography variant="body1">
              Welcome to AptUse, your trusted source for unlocking the power of technology. We are a
              dedicated team of tech enthusiasts committed to sharing valuable insights, expert advice,
              and the latest trends in the world of technology.
            </Typography>
          </Box>
        </Box>
        {/* TECHNOLOGY SECTION */}
        <Box flex={1}>
          <Typography variant="h6" color="orange" gutterBottom>
            TECHNOLOGY
          </Typography>
          {[
            {
              title: "TLS Vs SSL: Exploring The Safeguards Of Digital Communication",
              img: "assets/Footer/image1.png",
              link: "/tls-vs-ssl",
            },
            {
              title: "Benefits Of Secure Browsing With NordVPN And Steps To Install It",
              img: "assets/Footer/image2.webp",
              link: "/nordvpn-benefits",
            },
            {
              title: "The Importance Of High-Quality Kitchen Appliances",
              img: "assets/Footer/image3.png",
              link: "/kitchen-appliances",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              color="inherit"
              underline="hover"
              sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
              <img
                src={item.img}
                alt={item.title}
                width={60}
                height={60}
                style={{ marginRight: "10px", objectFit: "cover", borderRadius: "4px" }}/>
              <Typography variant="body2">{item.title}</Typography>
            </Link>
          ))}
        </Box>
        {/* QUICK LINKS SECTION */}
        <Box flex={1}>
          <Typography variant="h6" color="orange" gutterBottom>
            QUICK LINKS
          </Typography>
          {[
            { name: "About Us", href: "/about" },
            { name: "Contact Us", href: "/contact" },
            { name: "Disclaimer", href: "/disclaimer" },
            { name: "Terms and Conditions", href: "/terms-and-conditions" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}>
              {link.name}
            </Link>
          ))}
        </Box>
      </Box>
      {/* Bottom Footer */}
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        fontSize="14px"
        sx={{ mt: 4 }}>
        <Typography>
          <Link href="/" underline="hover" color="inherit">
            © 2023 - AptUse. All Right Reserved.
          </Link>
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={2} mt={{ xs: 2, md: 0 }}>
          {["Privacy Policy", "Affiliate Policy", "Cookie Policy", "Sitemap"].map((text, index) => (
            <Link
              key={index}
              href={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
              underline="hover"
              color="inherit">
              {text}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;