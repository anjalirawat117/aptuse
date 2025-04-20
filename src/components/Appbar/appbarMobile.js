import { IconButton, Box } from "@mui/material";
import { AppbarContainer } from "../../styles/Appbar/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/Ui/ui";

export default function AppbarMobile() {
    const {setDrawerOpen} = useUIContext();
    return (
        <AppbarContainer sx={{ justifyContent: 'space-between' }}>
            {/* Menu */}
            <IconButton onClick={() => setDrawerOpen(true)} edge="start">
                <MenuIcon sx={{ color: "#fff" }}/>
            </IconButton>
            {/* Center Logo */}
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "inherit" }}>
                <Box
                    component="a"
                    href="/"
                    sx={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                    <Box
                        component="img"
                        src="/assets/Logo/logo.png"
                        alt="AptUse Logo"
                        sx={{ height: 40 }}/>
                </Box>
            </Box>
            {/* Search */}
            <IconButton edge="end">
                <SearchIcon sx={{ color: "#fff" }}/>
            </IconButton>
        </AppbarContainer>
    );
}