import React from "react";
import { Box, Typography } from "@mui/material";
import SidebarNews from "../components/SidebarNews/sidebarnews";

export default function AboutPage() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 4 }, py: 6 }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 4, alignItems: "flex-start" }}>
        {/* Main About Content - 4/6 */}
        <Box sx={{ flex: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
              ABOUT US
            </Typography>
            <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: '#ccc' }} />
          </Box>
          <Typography variant="body1" paragraph>
            AptUse – Unlocking the Power of Tech Knowledge
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to AptUse, your trusted source for unlocking the power of technology. We are a dedicated
            team of tech enthusiasts committed to sharing valuable insights, expert advice, and the latest
            trends in the world of technology.
          </Typography>
          <Typography variant="body1" paragraph>
            At AptUse, we believe that technology has the potential to transform lives and shape the future.
            We are passionate about exploring the limitless possibilities that technology offers and sharing
            our knowledge with our readers. Whether you’re a tech enthusiast, a beginner, or a seasoned
            professional, AptUse is here to provide you with comprehensive content that empowers you to make
            informed decisions and stay ahead of the curve.
          </Typography>
          <Typography variant="body1" paragraph>
            From in-depth product reviews and comparisons to step-by-step tutorials and troubleshooting
            guides, we cover a wide range of topics to cater to your tech needs. We strive to simplify
            complex concepts and demystify the digital world, making technology accessible to everyone.
          </Typography>
          <Typography variant="body1" paragraph>
            Join us on this tech journey as we navigate through the ever-changing landscape of gadgets,
            software, AI, cybersecurity, and more. Let AptUse be your go-to resource for staying up-to-date
            with the latest tech news, making the most of your devices, and leveraging technology to enhance
            your everyday life.
          </Typography>
          <Typography variant="body1" paragraph>
            Embrace the power of tech,
          </Typography>
          <Typography variant="body1" paragraph>
            The AptUse Team
          </Typography>
        </Box>
        {/* Sidebar - 2/6 */}
        <Box sx={{ flex: 2 }}>
          <SidebarNews />
        </Box>
      </Box>
    </Box>
  );
}