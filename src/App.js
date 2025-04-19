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

function App() {
  useEffect(() => {
    document.title = "AptUse site";
  }, []);
 
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: '#000', m: 0, p: 0 }}>
        <UIProvider>
          <Appbar/>
          <AppDrawer/>
          <Box sx={{ background: '#fff', px: 0, py: 0, mt: 1 }}>
            <ImageSlider/>
          </Box>
          <NewsSection/>
          <Footer/>
        </UIProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;