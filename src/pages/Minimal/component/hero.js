import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
    return (
        <Stack>
            <Stack
                component={"section"}
                py={20}
                sx={{ backgroundColor: "#FFFFFF", zIndex: 2200 }}
            >
                <Box>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item sm={12} md={6}>
                                <Stack gap={"24"} direction={"column"} mb={8}>
                                    <Typography
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            fontFamily:
                                                '"Public Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                            fontWeight: 700,
                                            fontSize: "0.75rem",
                                            lineHeight: 1.5,
                                            textTransform: "uppercase",
                                            color: "text.disabled",
                                        }}
                                    >
                                        Visualizing Success
                                    </Typography>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontSize: {
                                                lg: "3rem",
                                                md: "2.75rem",
                                                sm: "2.5rem",
                                            },
                                            margin: "0px",
                                            fontFamily:
                                                'Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                            fontWeight: 800,
                                            fontSize: "2rem",
                                            lineHeight: {
                                                lg: "1.33333",
                                            },
                                        }}
                                    >
                                        {"What's in  "}
                                        <Box
                                            component={"span"}
                                            sx={{
                                                marginLeft: "8px",
                                                display: "inline-block", // Assuming you want to display as inline-block
                                                background:
                                                    "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.35),  rgba(0, 0, 0, 0.05))",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundClip: "text",
                                                color: "transparent",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor:
                                                    "transparent",
                                            }}
                                        >
                                            Minimal
                                        </Box>
                                    </Typography>
                                </Stack>
                                <Stack gap={6} direction={"column"}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: 3,
                                        }}
                                    >
                                        <Box
                                            component={"span"}
                                            sx={{
                                                width: "40px",
                                                height: "40px",
                                                flexShrink: 0,
                                                display: "inline-flex",
                                                backgroundColor: "currentcolor",
                                                mask: "url('https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/home/ic-make-brand.svg') center center / contain no-repeat",
                                            }}
                                        ></Box>
                                        <Stack direction={"column"} gap={1}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: "1.125rem",
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                Branding
                                            </Typography>
                                            <Typography
                                                variant="p"
                                                sx={{
                                                    color: "text.secondary",
                                                    whiteSpace: "pre",
                                                    lineHeight: "1.5",
                                                }}
                                            >
                                                {
                                                    "Consistent design makes it easy to brand\nyour own."
                                                }
                                            </Typography>
                                        </Stack>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: 3,
                                        }}
                                    >
                                        <Box
                                            component={"span"}
                                            sx={{
                                                width: "40px",
                                                height: "40px",
                                                flexShrink: 0,
                                                display: "inline-flex",
                                                backgroundColor: "currentcolor",
                                                mask: "url('https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/home/ic-design.svg') center center / contain no-repeat",
                                            }}
                                        ></Box>
                                        <Stack direction={"column"} gap={1}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: "1.125rem",
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                UI & UX design
                                            </Typography>
                                            <Typography
                                                variant="p"
                                                sx={{
                                                    color: "text.secondary",
                                                    whiteSpace: "pre",
                                                    lineHeight: "1.5",
                                                }}
                                            >
                                                {
                                                    "The kit is built on the principles of the atomic\ndesign system."
                                                }
                                            </Typography>
                                        </Stack>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: 3,
                                        }}
                                    >
                                        <Box
                                            component={"span"}
                                            sx={{
                                                width: "40px",
                                                height: "40px",
                                                flexShrink: 0,
                                                display: "inline-flex",
                                                backgroundColor: "currentcolor",
                                                mask: "url('https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/home/ic-development.svg') center center / contain no-repeat",
                                            }}
                                        ></Box>
                                        <Stack direction={"column"} gap={1}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: "1.125rem",
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                Development
                                            </Typography>
                                            <Typography
                                                variant="p"
                                                sx={{
                                                    color: "text.secondary",
                                                    whiteSpace: "pre",
                                                    lineHeight: "1.5",
                                                }}
                                            >
                                                {
                                                    "Easy to customize and extend, saving you time\nand money."
                                                }
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        WebkitBoxAlign: "center",
                                        alignItems: "center",
                                        WebkitBoxPack: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        position: "relative",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            left: "0px",
                                            width: "720px",
                                            borderRadius: "16px",
                                            position: "absolute",
                                            backgroundColor:
                                                "background.default",
                                            boxShadow:
                                                "-40px 40px 80px 0px rgba(145, 158, 171, 0.16)",
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                            variant="square"
                                            src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/home-chart.webp"
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Stack>
        </Stack>
    );
};

export default HeroSection;
