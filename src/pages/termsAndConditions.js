import React from "react";
import { Box, Typography } from "@mui/material";
import SidebarNews from "../components/SidebarNews/sidebarnews";

export default function TermsAndConditions() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 4 }, py: 6 }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 4, alignItems: "flex-start" }}>
        {/* Main TermsAndConditions Content - 4/6 */}
        <Box sx={{ flex: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
              TERMS AND CONDITIONS
            </Typography>
            <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: '#ccc' }} />
          </Box>
          <Typography variant="body1" paragraph>
            Welcome to AptUse!
          </Typography>
          <Typography variant="body1" paragraph>
            These terms and conditions outline the rules and regulations for the use of AptUse’s Website,
            located at http://aptuse.com.
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use
            AptUse if you do not agree to take all of the terms and conditions stated on this page.
          </Typography>
          <Typography variant="body1" paragraph>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
            Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website
            and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and
            “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves.
            All terms refer to the offer, acceptance and consideration of payment necessary to undertake the
            process of our assistance to the Client in the most appropriate manner for the express purpose of
            meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance
            with and subject to, prevailing law of gb. Any use of the above terminology or other words in the
            singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore
            as referring to same.
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }} paragraph>
            Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            We employ the use of cookies. By accessing AptUse, you agreed to use cookies in agreement with the
            AptUse’s Privacy Policy.
          </Typography>
          <Typography variant="body1" paragraph>
            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies
            are used by our website to enable the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }} paragraph>
            License
          </Typography>
          <Typography variant="body1" paragraph>
            Unless otherwise stated, AptUse and/or its licensors own the intellectual property rights for all
            material on AptUse. All intellectual property rights are reserved. You may access this from AptUse
            for your own personal use subjected to restrictions set in these terms and conditions.
          </Typography>
          <Typography variant="body1" paragraph>
             You must not:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Republish material from AptUse
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Sell, rent or sub-license material from AptUse
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Reproduce, duplicate or copy material from AptUse
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Redistribute content from AptUse
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            Parts of this website offer an opportunity for users to post and exchange opinions and information
            in certain areas of the website. AptUse does not filter, edit, publish or review Comments prior to
            their presence on the website. Comments do not reflect the views and opinions of AptUse,its agents
            and/or affiliates. Comments reflect the views and opinions of the person who post their views and
            opinions. To the extent permitted by applicable laws, AptUse shall not be liable for the Comments
            or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or
            posting of and/or appearance of the Comments on this website.
          </Typography>
          <Typography variant="body1" paragraph>
            AptUse reserves the right to monitor all Comments and to remove any Comments which can be
            considered inappropriate, offensive or causes breach of these Terms and Conditions.
          </Typography>
          <Typography variant="body1" paragraph>
            You warrant and represent that:
          </Typography>
          <Typography variant="body1" paragraph>
            You hereby grant AptUse a non-exclusive license to use, reproduce, edit and authorize others to
            use, reproduce and edit any of your Comments in any and all forms, formats or media.
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                You are entitled to post the Comments on our website and have all necessary licenses and
                consents to do so;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                The Comments do not invade any intellectual property right, including without limitation
                copyright, patent or trademark of any third party;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful
                material which is an invasion of privacy
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                The Comments will not be used to solicit or promote business or custom or present commercial
                activities or unlawful activity.
              </Typography>
            </li>
          </ul>
          <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }} paragraph>
            Hyperlinking to our Content
          </Typography>
          <Typography variant="body1" paragraph>
            The following organizations may link to our Website without prior written approval:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Government agencies;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Search engines;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                News organizations;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Online directory distributors may link to our Website in the same manner as they hyperlink to
                the Websites of other listed businesses; and
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                System wide Accredited Businesses except soliciting non-profit organizations, charity shopping
                malls, and charity fundraising groups which may not hyperlink to our Web site.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            These organizations may link to our home page, to publications or to other Website information so
            long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship,
            endorsement or approval of the linking party and its products and/or services; and (c) fits within
            the context of the linking party’s site.
          </Typography>
          <Typography variant="body1" paragraph>
            We may consider and approve other link requests from the following types of organizations:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                commonly-known consumer and/or business information sources;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                dot.com community sites;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                associations or other groups representing charities;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                online directory distributors;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                internet portals;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                accounting, law and consulting firms; and
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: '#f7941d', 
                  color: '#fff',             
                  px: 1,                      
                  py: 0.5,                 
                  borderRadius: '2px',        
                  display: 'inline-block',  
                }}>
                educational institutions and trade associations.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            We will approve link requests from these organizations if we decide that: (a) the link would not
            make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does
            not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink
            compensates the absence of AptUse; and (d) the link is in the context of general resource
            information.
          </Typography>
          <Typography variant="body1" paragraph>
            These organizations may link to our home page so long as the link: (a) is not in any way deceptive;
            (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking party’s site.
          </Typography>
          <Typography variant="body1" paragraph>
            If you are one of the organizations listed in paragraph 2 above and are interested in linking to
            our website, you must inform us by sending an e-mail to AptUse. Please include your name, your
            organization name, contact information as well as the URL of your site, a list of any URLs from
            which you intend to link to our Website, and a list of the URLs on our site to which you would
            like to link. Wait 2-3 weeks for a response.
          </Typography>
          <Typography variant="body1" paragraph>
            Approved organizations may hyperlink to our Website as follows:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                By use of our corporate name; or
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                By use of the uniform resource locator being linked to; or
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                By use of any other description of our Website being linked to that makes sense within the
                context and format of content on the linking party’s site.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            No use of AptUse’s logo or other artwork will be allowed for linking absent a trademark license
            agreement.
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }} paragraph>
            iFrames
          </Typography>
          <Typography variant="body1" paragraph>
            Without prior approval and written permission, you may not create frames around our Webpages that
            alter in any way the visual presentation or appearance of our Website.
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }} paragraph>
            Content Liability
          </Typography>
          <Typography variant="body1" paragraph>
            We shall not be hold responsible for any content that appears on your Website. You agree to protect
            and defend us against all claims that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise
            violates, or advocates the infringement or other violation of, any third party rights.
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }} paragraph>
            Reservation of Rights
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to request that you remove all links or any particular link to our Website.
            You approve to immediately remove all links to our Website upon request. We also reserve the right
            to amen these terms and conditions and it’s linking policy at any time. By continuously linking to
            our Website, you agree to be bound to and follow these linking terms and conditions.
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }} paragraph>
            Removal of links from our website
          </Typography>
          <Typography variant="body1" paragraph>
            If you find any link on our Website that is offensive for any reason, you are free to contact and
            inform us any moment. We will consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </Typography>
          <Typography variant="body1" paragraph>
            We do not ensure that the information on this website is correct, we do not warrant its
            completeness or accuracy; nor do we promise to ensure that the website remains available or that
            the material on the website is kept up to date.
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }} paragraph>
            Disclaimer
          </Typography>
          <Typography variant="body1" paragraph>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and
            conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                limit or exclude our or your liability for death or personal injury;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                limit or exclude our or your liability for fraud or fraudulent misrepresentation;
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                limit any of our or your liabilities in any way that is not permitted under applicable law; or
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                exclude any of our or your liabilities that may not be excluded under applicable law.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
            (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
          </Typography>
          <Typography variant="body1" paragraph>
            As long as the website and the information and services on the website are provided free of charge,
            we will not be liable for any loss or damage of any nature.
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