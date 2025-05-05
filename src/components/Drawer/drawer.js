import { Drawer, List, ListItemButton, ListItemText, Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useUIContext } from "../../context/Ui/ui";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from 'react-router-dom';

//category list
const categories = [
    "AI",
    "Crypto",
    "Electronics",
    "Fintech",
    "Software",
    "Startups",
    "Web Hosting",
];

// Styled drawer container
const StyledDrawer = styled(Drawer)({
    "& .MuiDrawer-paper": {
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
        maxWidth: 320,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
});

// Header style
const DrawerHeader = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1.5rem",
});
  
export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();
    return (
      <StyledDrawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {/* Top section: Logo + close button */}
        <Box>
            <DrawerHeader>
                <Box
                    component={RouterLink}
                    to="/"
                    sx={{ textDecoration: "none", flexGrow: 1 }}>
                        <Box
                            component="img"
                            src="/assets/Logo/logo.png"
                            alt="AptUse Logo"
                            sx={{ height: 40 }}/>
                </Box>
                <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#fff" }}>
                    <CloseIcon sx={{ fontSize: "1.8rem" }} />
                </IconButton>
            </DrawerHeader>
            {/* List of categories */}
            <List>
                {categories.map((text, index) => (
                    <ListItemButton
                        key={index}
                        component={RouterLink}
                        to={`/category/${text.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setDrawerOpen(false)} // Close drawer after click
                        sx={{ px: 3 }}>
                        <ListItemText
                            primary={text}
                            primaryTypographyProps={{
                                fontWeight: 600,
                                fontSize: "1rem",
                                letterSpacing: "0.3px",
                            }}/>
                    </ListItemButton>
                ))}
            </List>
        </Box>
        {/* Footer copyright */}
        <Box sx={{ textAlign: "center", px: 2, py: 2 }}>
            <Typography
                variant="body2"
                fontSize="0.75rem"
                sx={{ color: "gray" }}>
                    Copyright © 2023 - Aptuse. All Right Reserved.
            </Typography>
        </Box>
      </StyledDrawer>
    );
}