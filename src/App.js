import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/Theme/theme";
import Appbar from "./components/Appbar/appbar";
import AppDrawer from "./components/Drawer/drawer"; 
import { UIProvider } from "./context/Ui/ui";
import ImageSlider from "./components/Slider/slider";
import Footer from "./components/Footer/footer";
import NewsSection from "./components/NewsSection/newssection";
import LatestNews from "./components/LatestNews/latestnews";
import Technology from "./components/Technology/technology";
import Architecture from "./components/Architecture/architecture";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  useEffect(() => {
    document.title = "AptUse site";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: '#fff', m: 0, p: 0, width: '100%', overflowX: 'hidden', position: 'relative' }}>
        <UIProvider>
          <Appbar/>
          <AppDrawer/>
          <Box
            sx={{
              p: 0,
              m: 0,
              width: '100%',
              backgroundColor: '#fff',
              borderTop: '1px solid #ddd',
            }}>
            <ImageSlider/>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            {/* Main Content (2/3 width) */}
            <Box sx={{ width: { xs: '100%', md: '66.66%' }, p: 2 }}>
              <NewsSection />
              <Architecture />
              <Technology />
            </Box>
            {/* Sidebar (1/3 width, hidden on xs) */}
            <Box
              sx={{
                width: { xs: '0%', md: '33.33%' },
                display: { xs: 'none', md: 'block' },
                p: 2,
                borderLeft: '1px solid #ddd',
              }}>
              <Sidebar/>
            </Box>
          </Box>
          <LatestNews/>
          <Footer/>
        </UIProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;