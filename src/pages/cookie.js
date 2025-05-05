import React from "react";
import { Box, Typography } from "@mui/material";
import SidebarNews from "../components/SidebarNews/sidebarnews";

export default function CookiePolicy() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 4 }, py: 6 }}>
      <Box sx={{ display: { xs: "block", md: "flex" }, gap: 4, alignItems: "flex-start" }}>
        {/* Main CookiePolicy Content - 4/6 */}
        <Box sx={{ flex: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>
              COOKIE POLICY
            </Typography>
            <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: '#ccc' }} />
          </Box>
          <Typography variant="body1" paragraph>
            This is the Cookie Policy for AptUse, accessible from http://aptuse.com/
          </Typography>
          <Typography variant="body1" fontWeight="bold" paragraph>
            What Are Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            As is common practice with almost all professional websites this site uses cookies, which are tiny
            files that are downloaded to your computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to store these cookies. We will
            also share how you can prevent these cookies from being stored however this may downgrade or
            ‘break’ certain elements of the sites functionality.
          </Typography>
          <Typography variant="body1" fontWeight="bold" paragraph>
            How We Use Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no
            industry standard options for disabling cookies without completely disabling the functionality and
            features they add to this site. It is recommended that you leave on all cookies if you are not
            sure whether you need them or not in case they are used to provide a service that you use.
          </Typography>
          <Typography variant="body1" fontWeight="bold" paragraph>
            Disabling Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser
            Help for how to do this). Be aware that disabling cookies will affect the functionality of this
            and many other websites that you visit. Disabling cookies will usually result in also disabling
            certain functionality and features of this site. Therefore it is recommended that you do not
            disable cookies. 
          </Typography>
          <Typography variant="body1" fontWeight="bold" paragraph>
            The Cookies We Set
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Account related cookies
              </Typography>
              <Typography variant="body1" paragraph>
                If you create an account with us then we will use cookies for the management of the signup
                process and general administration. These cookies will usually be deleted when you log out
                however in some cases they may remain afterward to remember your site preferences when
                logged out.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Login related cookies
              </Typography>
              <Typography variant="body1" paragraph>
                We use cookies when you are logged in so that we can remember this fact. This prevents you
                from having to log in every single time you visit a new page. These cookies are typically
                removed or cleared when you log out to ensure that you can only access restricted features
                and areas when logged in.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Email newsletters-related cookies
              </Typography>
              <Typography variant="body1" paragraph>
                This site offers newsletter or email subscription services and cookies may be used to remember
                if you are already registered and whether to show certain notifications which might only be
                valid to subscribed/unsubscribed users.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Orders processing related cookies
              </Typography>
              <Typography variant="body1" paragraph>
                This site offers e-commerce or payment facilities and some cookies are essential to ensure
                that your order is remembered between pages so that we can process it properly.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Surveys related cookies
              </Typography>
              <Typography variant="body1" paragraph>
                From time to time we offer user surveys and questionnaires to provide you with interesting
                insights, helpful tools, or to understand our user base more accurately. These surveys may
                use cookies to remember who has already taken part in a survey or to provide you with accurate
                results after you change pages.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Forms related cookies
              </Typography>
              <Typography variant="body1" paragraph>
                When you submit data to through a form such as those found on contact pages or comment forms
                cookies may be set to remember your user details for future correspondence.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Site preferences cookies
              </Typography>
              <Typography variant="body1" paragraph>
                In order to provide you with a great experience on this site we provide the functionality to
                set your preferences for how this site runs when you use it. In order to remember your
                preferences we need to set cookies so that this information can be called whenever you
                interact with a page is affected by your preferences.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" fontWeight="bold" paragraph>
            Third-Party Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            In some special cases, we also use cookies provided by trusted third parties. The following
            section details which third-party cookies you might encounter through this site.
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                This site uses Google Analytics which is one of the most widespread and trusted analytics
                solutions on the web for helping us to understand how you use the site and ways that we can
                improve your experience. These cookies may track things such as how long you spend on the site
                and the pages that you visit so we can continue to produce engaging content.
              </Typography>
              <Typography variant="body1">
                For more information on Google Analytics cookies, see the official Google Analytics page.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Third-party analytics are used to track and measure the usage of this site so that we can
                continue to produce engaging content. These cookies may track things such as how long you
                spend on the site or pages you visit which helps us to understand how we can improve the site
                for you.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                From time to time we test new features and make subtle changes to the way that the site is
                delivered. When we are still testing new features these cookies may be used to ensure that you
                receive a consistent experience whilst on the site whilst ensuring we understand which
                optimizations our users appreciate the most.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                As we sell products it’s important for us to understand statistics about how many of the
                visitors to our site actually make a purchase and as such this is the kind of data that these
                cookies will track. This is important to you as it means that we can accurately make business
                predictions that allow us to monitor our advertising and product costs to ensure the best
                possible price.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more
                relevant ads across the web and limit the number of times that a given ad is shown to you. For
                more information on Google AdSense see the official Google AdSense privacy FAQ.
              </Typography>
              <Typography variant="body1">
                For more information on Google AdSense see the official Google AdSense privacy FAQ.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                We use adverts to offset the costs of running this site and provide funding for further
                development. The behavioral advertising cookies used by this site are designed to ensure that
                we provide you with the most relevant adverts where possible by anonymously tracking your
                interests and presenting similar things that may be of interest.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see
                if our customers have come to the site through one of our partner sites so that we can credit
                them appropriately and where applicable allow our affiliate partners to provide any bonus that
                they may provide you for making a purchase.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                We also use social media buttons and/or plugins on this site that allow you to connect with
                your social network in various ways. For these to work the following social media sites
                including; will set cookies through our site which may be used to enhance your profile on their
                site or contribute to the data they hold for various purposes outlined in their respective
                privacy policies.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" fontWeight="bold" paragraph>
            More Information
          </Typography>
          <Typography variant="body1" paragraph>
            Hopefully, that has clarified things for you, and as was previously mentioned if there is
            something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled
            in case it does interact with one of the features you use on our site.
          </Typography>
          <Typography variant="body1" paragraph>
            For more general information on cookies, please read the Cookies Policy article.
          </Typography>
          <Typography variant="body1" paragraph>
            However, if you are still looking for more information then you can contact us through one of our
            preferred contact methods:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Email: Media@AptUse.com
              </Typography>
            </li>
          </ul> 
        </Box>
        {/* Sidebar - 2/6 */}
        <Box sx={{ flex: 2 }}>
          <SidebarNews />
        </Box>
      </Box>
    </Box>
  );
}