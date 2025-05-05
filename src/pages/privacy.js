import React from "react";
import { Box, Typography } from "@mui/material";
import SidebarNews from "../components/SidebarNews/sidebarnews";

export default function PrivacyPolicy() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 4 }, py: 6 }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 4, alignItems: "flex-start" }}>
        {/* Main PrivacyPolicy Content - 4/6 */}
        <Box sx={{ flex: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
              PRIVACY POLICY
            </Typography>
            <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: '#ccc' }} />
          </Box>
          <Typography variant="body1" paragraph>
            At AptUse, accessible from http://aptuse.com/, one of our main priorities is the privacy of our
            visitors. This Privacy Policy document contains types of information that are collected and
            recorded by AptUse and how we use it.
          </Typography>
          <Typography variant="body1" paragraph>
            If you have additional questions or require more information about our Privacy Policy, do not
            hesitate to contact us.
          </Typography>
          <Typography variant="body1" paragraph>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website
            with regard to the information that they shared and/or collect in AptUse. This policy is not
            applicable to any information collected offline or via channels other than this website.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Consent
          </Typography>
          <Typography variant="body1" paragraph>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Information we collect
          </Typography>
          <Typography variant="body1" paragraph>
            The personal information that you are asked to provide, and the reasons why you are asked to
            provide it, will be made clear to you at the point we ask you to provide your personal information.
          </Typography>
          <Typography variant="body1" paragraph>
            If you contact us directly, we may receive additional information about you such as your name,
            email address, phone number, the contents of the message and/or attachments you may send us, and
            any other information you may choose to provide.
          </Typography>
          <Typography variant="body1" paragraph>
            When you register for an Account, we may ask for your contact information, including items such as
            name, company name, address, email address, and telephone number.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            How we use your information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect in various ways, including to:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Provide, operate, and maintain our website      
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Improve, personalize, and expand our website
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Understand and analyze how you use our website 
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Develop new products, services, features, and functionality     
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Communicate with you, either directly or through one of our partners, including for customer
                service, to provide you with updates and other information relating to the website, and for
                marketing and promotional purposes
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Send you emails
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Find and prevent fraud  
              </Typography>
            </li>
          </ul>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Log Files
          </Typography>
          <Typography variant="body1" paragraph>
            AptUse follows a standard procedure of using log files. These files log visitors when they visit
            websites. All hosting companies do this and a part of hosting services’ analytics. The information
            collected by log files includes internet protocol (IP) addresses, browser type, Internet Service
            Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally identifiable. The purpose of the
            information is for analyzing trends, administering the site, tracking users’ movement on the
            website, and gathering demographic information.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Cookies and Web Beacons
          </Typography>
          <Typography variant="body1" paragraph>
            Like any other website, AptUse uses “cookies”. These cookies are used to store information
            including visitors’ preferences, and the pages on the website that the visitor accessed or visited.
            The information is used to optimize the users’ experience by customizing our web page content
            based on visitors browser type and/or other information.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Google DoubleClick DART Cookie
          </Typography>
          <Typography variant="body1" paragraph>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies,
            to serve ads to our site visitors based upon their visit to www.website.com and other sites on the
            internet. However, visitors may choose to decline the use of DART cookies by visiting the Google
            ad and content network Privacy Policy at the following URL– 
            https://policies.google.com/technologies/ads
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Our Advertising Partners
          </Typography>
          <Typography variant="body1" paragraph>
            Some of advertisers on our site may use cookies and web beacons. Our advertising partners are
            listed below. Each of our advertising partners has their own Privacy Policy for their policies
            on user data. For easier access, we hyperlinked to their Privacy Policies below.
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Google
                https://policies.google.com/technologies/ads
              </Typography>
            </li>
          </ul>  
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Advertising Partners Privacy Policies
          </Typography>
          <Typography variant="body1" paragraph>
            You may consult this list to find the Privacy Policy for each of the advertising partners of AptUse.
          </Typography>
          <Typography variant="body1" paragraph>
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons
            that are used in their respective advertisements and links that appear on AptUse, which are sent
            directly to users’ browser. They automatically receive your IP address when this occurs. These
            technologies are used to measure the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that you visit.
          </Typography>
          <Typography variant="body1" paragraph>
            Note that AptUse has no access to or control over these cookies that are used by third-party 
            advertisers.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Third-Party Privacy Policies
          </Typography>
          <Typography variant="body1" paragraph>
            AptUse’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you
            to consult the respective Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about how to opt out of certain
            options.
          </Typography>
          <Typography variant="body1" paragraph>
            You can choose to disable cookies through your individual browser options. To know more detailed
            information about cookie management with specific web browsers, it can be found at the browsers’
            respective websites.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Typography>
          <Typography variant="body1" paragraph>
            Under the CCPA, among other rights, California consumers have the right to:
          </Typography>
          <Typography variant="body1" paragraph>
            Request that a business that collects a consumer’s personal data disclose the categories and
            specific pieces of personal data that a business has collected about consumers.
          </Typography>
          <Typography variant="body1" paragraph>
            Request that a business delete any personal data about the consumer that a business has collected.
          </Typography>
          <Typography variant="body1" paragraph>
            Request that a business that sells a consumer’s personal data, not sell the consumer’s personal
            data.
          </Typography>
          <Typography variant="body1" paragraph>
            If you make a request, we have one month to respond to you. If you would like to exercise any of
            these rights, please contact us.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            GDPR Data Protection Rights
          </Typography>
          <Typography variant="body1" paragraph>
            We would like to make sure you are fully aware of all of your data protection rights. Every user is
            entitled to the following:
          </Typography>
          <Typography variant="body1" paragraph>
            The right to access – You have the right to request copies of your personal data. We may charge you
            a small fee for this service.
          </Typography>
          <Typography variant="body1" paragraph>
            The right to rectification – You have the right to request that we correct any information you
            believe is inaccurate. You also have the right to request that we complete the information you
            believe is incomplete.
          </Typography>
          <Typography variant="body1" paragraph>
            The right to erasure – You have the right to request that we erase your personal data, under
            certain conditions.
          </Typography>
          <Typography variant="body1" paragraph>
            The right to restrict processing – You have the right to request that we restrict the processing of
            your personal data, under certain conditions.
          </Typography>
          <Typography variant="body1" paragraph>
            The right to object to processing – You have the right to object to our processing of your personal
            data, under certain conditions.
          </Typography>
          <Typography variant="body1" paragraph>
            The right to data portability – You have the right to request that we transfer the data that we
            have collected to another organization, or directly to you, under certain conditions.
          </Typography>
          <Typography variant="body1" paragraph>
            If you make a request, we have one month to respond to you. If you would like to exercise any of
            these rights, please contact us.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Children's Information
          </Typography>
          <Typography variant="body1" paragraph>
            Another part of our priority is adding protection for children while using the internet. We
            encourage parents and guardians to observe, participate in, and/or monitor and guide their
            online activity.
          </Typography>
          <Typography variant="body1" paragraph>
            AptUse does not knowingly collect any Personal Identifiable Information from children under the age
            of 13. If you think that your child provided this kind of information on our website, we strongly
            encourage you to contact us immediately and we will do our best efforts to promptly remove such
            information from our records.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Changes to This Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update our Privacy Policy from time to time. Thus, we advise you to review this page
            periodically for any changes. We will notify you of any changes by posting the new Privacy Policy
            on this page. These changes are effective immediately after they are posted on this page.
          </Typography>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, fontSize: '1.5rem' }} paragraph>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us. 
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