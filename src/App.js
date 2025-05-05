import { Routes, Route } from "react-router-dom";
import { ThemeProvider, Box } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/Theme/theme";
import Appbar from "./components/Appbar/appbar";
import AppDrawer from "./components/Drawer/drawer"
import { UIProvider } from "./context/Ui/ui";
import Footer from "./components/Footer/footer";

// Import pages
import Home from './pages/home';
import CategoryPage from './pages/category';
import ArticlePage from './pages/article';
import SearchPage from './pages/search';
import NewsDetailsPage from './pages/newsDetails';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import Disclaimer from './pages/disclaimer';
import TermsAndConditions from './pages/termsAndConditions';
import PrivacyPolicy from './pages/privacy';
import AffiliatePolicy from './pages/affiliate'
import CookiePolicy from './pages/cookie';
import NotFoundPage from './pages/notFoundPage';

function App() {
  useEffect(() => {
    document.title = "AptUse site";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: '#fff', m: 0, p: 0, width: '100%', overflowX: 'hidden', position: 'relative' }}>
        <UIProvider>
          <Appbar />
          <AppDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/article/:category/:slug" element={<ArticlePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/news/:id" element={<NewsDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/affiliate-policy" element={<AffiliatePolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer/>  
        </UIProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;