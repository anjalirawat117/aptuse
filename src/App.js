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

function App() {
  useEffect(() => {
    document.title = "AptUse site";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: '#000', m: 0, p: 0, width: '100%', overflowX: 'hidden', position: 'relative' }}>
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
          <NewsSection/>
          <LatestNews/>
          <Footer/>
        </UIProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;