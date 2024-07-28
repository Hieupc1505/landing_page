"use client";
import React from "react";
import Header from "../components/header";
import { Box } from "@mui/material";
import Footer from "@/components/footer";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const Main = ({ children }) => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Header />
                {children}
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default Main;
