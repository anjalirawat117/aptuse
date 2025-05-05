import React from "react";
import { Box, Typography } from "@mui/material";
import SidebarNews from "../components/SidebarNews/sidebarnews";

export default function ContactPage() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 4 }, py: 6 }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 4, alignItems: "flex-start" }}>
        {/* Main Contact Content - 4/6 */}
        <Box sx={{ flex: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
              CONTACT US
            </Typography>
            <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: '#ccc' }} />
          </Box>
          <Typography variant="body1">
            Thank you for your interest in AptUse! We value your feedback, inquiries, and suggestions.
            Please feel free to reach out to us using the contact information provided below:
          </Typography>
          <Typography variant="body1">
            General Inquiries:
          </Typography>
          <Typography variant="body1" paragraph>
            For general questions, comments, or suggestions regarding our content or website,
            please email us at media@aptuse.com.
          </Typography>
          <Typography variant="body1">
            Advertising and Partnerships:
          </Typography>
          <Typography variant="body1" paragraph>
            If you are interested in advertising opportunities or potential partnerships with AptUse,
            please contact our advertising team at media@aptuse.com. We are open to collaborations
            that align with our mission and values.
          </Typography>
          <Typography variant="body1">
            Technical Support:
          </Typography>
          <Typography variant="body1" paragraph>
            For technical issues or any difficulties accessing our website, please reach out to our
            technical support team at media@aptuse.com. We will do our best to assist you and resolve
            any issues promptly.
          </Typography>
          <Typography variant="body1">
            Content Submissions:
          </Typography>
          <Typography variant="body1" paragraph>
            We welcome guest contributions and article pitches from experts in the field. If you have
            a tech-related topic you’d like to share with our audience, please email your proposal to
            media@aptuse.com. Please note that we receive a high volume of submissions and may not be
            able to respond to each one individually.
          </Typography>
          <Typography variant="body1">
            Social Media:
          </Typography>
          <Typography variant="body1" paragraph>
            Stay connected with us on social media! Follow us on Twitter, Facebook, and Instagram for
            the latest updates, featured articles, and engaging discussions. You can find the links to
            our social media profiles at the bottom of our website.
          </Typography>
          <Typography variant="body1" paragraph>
            We appreciate your engagement and support. Our team is dedicated to providing valuable and
            engaging tech content, and we look forward to hearing from you.
          </Typography>
          <Typography variant="body1">
            Best regards,
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