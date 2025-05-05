import { IconButton, Box } from "@mui/material";
import { AppbarContainer } from "../../styles/Appbar/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/Ui/ui";
import { Link as RouterLink } from 'react-router-dom';

export default function AppbarMobile() {
    const {setDrawerOpen} = useUIContext();
    return (
        <AppbarContainer
            sx={{
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 1300,
                backgroundColor: '#0a0a0a' }}>
            {/* Menu */}
            <IconButton onClick={() => setDrawerOpen(true)} edge="start">
                <MenuIcon sx={{ color: "#fff" }}/>
            </IconButton>
            {/* Center Logo */}
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "inherit" }}>
                <Box
                    component={RouterLink}
                    to="/"
                    sx={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                    <Box
                        component="img"
                        src="/assets/Logo/logo.png"
                        alt="AptUse Logo"
                        sx={{ height: 40 }}/>
                </Box>
            </Box>
            {/* Search */}
            <IconButton component={RouterLink} edge="end" to="/search" aria-label="Search">
                <SearchIcon sx={{ color: "#fff" }}/>
            </IconButton>
        </AppbarContainer>
    );
}