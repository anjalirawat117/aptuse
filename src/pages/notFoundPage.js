import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 4,
        py: 8,
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        sx={{ backgroundColor: "orange", color: "#000", fontWeight: "bold" }}
      >
        Go Home
      </Button>
    </Box>
  );
}