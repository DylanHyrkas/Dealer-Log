import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
        backgroundColor: "transparent", // Neutral background
        borderTop: "1px solid #ddd", // Subtle border for separation
        position: "fixed", // Fixed position at the bottom
        bottom: 0, // Align to the bottom of the viewport
        width: "100%", // Full-width footer
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "#555", textAlign: "center" }}
      >
        &copy; {currentYear} DealersVault. All Rights Reserved.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
        <Link href="/privacypolicy" underline="hover" sx={{ color: "#555" }}>
          Privacy Policy
        </Link>
        <Link href="/termsofservice" underline="hover" sx={{ color: "#555" }}>
          Terms of Service
        </Link>
        <Link href="mailto:dylhyrkas@gmail.com" target="_blank" underline="hover" sx={{ color: "#555" }}>
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;