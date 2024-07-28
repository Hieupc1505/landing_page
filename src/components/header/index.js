"use client";
// import styled from "@emotion/styled";
import { Container, Box, Avatar, IconButton, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Header = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const WrapBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "80px",
        [theme.breakpoints.down("md")]: {},
    }));

    const NavbarBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "32px",
        fontSize: "14px",
        fontWeight: 600,
    }));

    const NavbarBoxWrap = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));
    const MenuIconBox = styled(Box)(({ theme }) => ({
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    }));
    const LogoBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {},
    }));

    return (
        <Container maxWidth="xl">
            <WrapBox>
                <MenuIconBox>
                    <MenuIcon />
                </MenuIconBox>
                <LogoBox sx={matches ? {} : { minWidth: "100px" }}>
                    {matches ? (
                        <Avatar
                            src="https://bazaar.ui-lib.com/assets/images/bazaar-black-sm.svg"
                            alt=""
                            variant="square"
                            sx={{ width: "auto", height: "auto" }}
                        />
                    ) : (
                        <Avatar
                            src="https://bazaar.ui-lib.com/_next/static/media/logo2.b6e97da2.svg"
                            alt=""
                            variant="square"
                            sx={{ width: "100%", height: "44px" }}
                        />
                    )}
                </LogoBox>
                <NavbarBoxWrap
                    sx={{
                        marginInline: "auto",
                    }}
                >
                    <NavbarBox>
                        <Box>Home</Box>
                        <Box>Mega Menu</Box>
                        <Box>Full Screen Menu</Box>
                        <Box>Pages</Box>
                        <Box>User Account</Box>
                        <Box>Vendor Account</Box>
                    </NavbarBox>
                </NavbarBoxWrap>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>
            </WrapBox>
        </Container>
    );
};

export default Header;
