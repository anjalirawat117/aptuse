import React from "react";
import { Box, Typography } from "@mui/material";
import SidebarNews from "../components/SidebarNews/sidebarnews";

export default function Disclaimer() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 4 }, py: 6 }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 4, alignItems: "flex-start" }}>
        {/* Main Disclaimer Content - 4/6 */}
        <Box sx={{ flex: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
              DISCLAIMER
            </Typography>
            <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: '#ccc' }} />
          </Box>
          <Typography variant="body1" paragraph>
            If you require any more information or have any questions about our site’s disclaimer, please feel
            free to contact us by email at Media@AptUse.com.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Disclaimers for AptUse
          </Typography>
          <Typography variant="body1" paragraph>
            All the information on this website – http://aptuse.com – is published in good faith and for
            general information purposes only. AptUse does not make any warranties about the completeness,
            reliability, and accuracy of this information. Any action you take upon the information you find
            on this website (AptUse), is strictly at your own risk. AptUse will not be liable for any losses
            and/or damages in connection with the use of our website.
          </Typography>
          <Typography variant="body1" paragraph>
            From our website, you can visit other websites by following hyperlinks to such external sites.
            While we strive to provide only quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other websites do not imply a
            recommendation for all the content found on these sites. Site owners and content may change
            without notice and may occur before we have the opportunity to remove a link that may have
            gone ‘bad’.
          </Typography>
          <Typography variant="body1" paragraph>
            Please be also aware that when you leave our website, other sites may have different privacy
            policies and terms which are beyond our control. Please be sure to check the Privacy Policies of
            these sites as well as their “Terms of Service” before engaging in any business or uploading any
            information.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Consent
          </Typography>
          <Typography variant="body1" paragraph>
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Update
          </Typography>
          <Typography variant="body1" paragraph>
            Should we update, amend or make any changes to this document, those changes will be prominently
            posted here.
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