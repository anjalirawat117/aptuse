import React from "react";
import { Box, Typography } from "@mui/material";
import SidebarNews from "../components/SidebarNews/sidebarnews";

export default function AffiliatePolicy() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 4 }, py: 6 }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 4, alignItems: "flex-start" }}>
        {/* Main Affiliate Content - 4/6 */}
        <Box sx={{ flex: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
                AFFILIATE POLICY
            </Typography>
            <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: '#ccc' }} />
          </Box>
          <Typography variant="body1" paragraph>
            At Aptuse you’ll find links to buy products from Amazon and other partners. If you click on these
            links, you’ll sometimes find that the URL includes a small extra piece of text that identifies
            that the click came from our website. This text is an affiliate code, and it means we receive a
            small percentage of the money you spend if you choose to buy that product; or, in some cases,
            other products from the site soon after.
          </Typography>
          <Typography variant="body1" paragraph>
            These affiliate links help pay the costs of producing this website and ensure that the content is
            free to you. However, it doesn’t mean that we are in any way indebted to Amazon or any other
            company. Nor does the company have any influence over editorial coverage, which products we
            publish, how we rate products, nor which products are reviewed positively. Our editorial content
            is completely unbiased and based on extensive testing and research. Although our editorial team is
            often responsible for inserting links into pages, their reviews and recommendations are completely
            editorially independent and there is no incentive to recommend bad products.
          </Typography>
          <Typography variant="body1" paragraph>
            For more information, please see our privacy policy and cookie policy.
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