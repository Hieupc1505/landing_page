"use client";
import {
    Box,
    Grid,
    Avatar,
    Typography,
    Container,
    Link,
    styled,
} from "@mui/material";
import React from "react";

const Footer = () => {
    const LinkBox = styled(Link)(({ theme }) => ({
        textDecoration: "none",
        color: "#2B3445",
    }));
    return (
        <Container
            maxWidth="xl"
            sx={{
                background: "#fff",
                paddingTop: "96px",
                paddingBottom: "72px",
            }}
        >
            <Grid container>
                <Grid
                    item
                    sx={{ paddingTop: 3, paddingLeft: 3 }}
                    lg={4}
                    sm={6}
                    xs={12}
                >
                    <Box>
                        <Avatar
                            src="https://bazaar.ui-lib.com/_next/static/media/logo2.b6e97da2.svg"
                            alt=""
                            variant="square"
                            sx={{
                                width: "100%",
                                maxWidth: "100px",
                                height: "44px",
                            }}
                        />
                        <Typography variant="subtitle1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Auctor libero id et, in gravida. Sit diam duis
                            mauris nulla cursus. Erat et lectus vel ut
                            sollicitudin elit at amet.
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ paddingTop: 3, paddingLeft: 3 }}
                    lg={2.5}
                    sm={6}
                    xs={12}
                >
                    <Typography variant="h6" fontWeight={600} mb={1.5}>
                        About Us
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        <LinkBox>Careers</LinkBox>
                        <LinkBox>Our Stores</LinkBox>
                        <LinkBox>Our Cares</LinkBox>
                        <LinkBox>Terms & Conditions</LinkBox>
                        <LinkBox>Privacy Policy</LinkBox>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ paddingTop: 3, paddingLeft: 3 }}
                    lg={2.5}
                    sm={6}
                    xs={12}
                >
                    <Typography variant="h6" fontWeight={600} mb={1.5}>
                        Custom Care
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        <LinkBox>Help Center</LinkBox>
                        <LinkBox>Track Your Order</LinkBox>
                        <LinkBox>Corporate & Bulk Purchasing</LinkBox>
                        <LinkBox>Returns & Refunds</LinkBox>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ paddingTop: 3, paddingLeft: 3 }}
                    lg={3}
                    sm={6}
                    xs={12}
                >
                    <Typography variant="h6" fontWeight={600} mb={1.5}>
                        Contact Us
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        <Typography>
                            70 Washington Square South, New York, NY 10012,
                            United States
                        </Typography>
                        <Typography>Email: uilib.help@gmail.com</Typography>
                        <Typography>Phone: +1 1123 456 780</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
