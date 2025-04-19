import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../Theme/theme";
import "@fontsource/baloo-2";

//container
export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px 32px',
    height: '100px',
}));

//header
export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '2rem',
    fontFamily: 'baloo-2, sans-serif',
    color: Colors.white,
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1999
}));