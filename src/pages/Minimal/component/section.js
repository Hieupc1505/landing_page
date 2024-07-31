"use client";
import {
    Box,
    Container,
    styled,
    Typography,
    Stack,
    AvatarGroup,
    Avatar,
    Button,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BgSvg from "./bg";

const Section = () => {
    const elementsRef = useRef(null);
    const boxContainerRef = useRef(null);

    const handleScroll = (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio !== 1) {
                entry.target.style.opacity = entry.intersectionRatio - 0.25;
                const children = entry.target.querySelectorAll(".change");

                children.forEach((child, index) => {
                    child.style.transform = `translateY(${
                        (entry.intersectionRatio - 1) *
                        150 *
                        (children.length - index)
                    }px)`;
                });
            } else {
                entry.target.style.opacity = 1;
            }
        });
    };
    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            root: null,
            rootMargin: "0px",
            // rootMargin: "-147px 0px 0px 0px",
            threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        });
        if (boxContainerRef?.current)
            observer.observe(boxContainerRef?.current);

        return () => {
            // observer.unobserve(elementsRef?.current);
            observer.unobserve(boxContainerRef?.current);
        };
    }, []);

    const BoxSection = styled(Box)(({ theme }) => ({
        minHeight: "760px",
        height: "100vh",
        maxHeight: "1440px",
        display: "block",
        willChange: "opacity",
        marginTop: "calc(72px * -1)",
    }));

    const BoxItem = styled(Box)(({ theme }) => ({
        height: "100%",
        position: "fixed",
        maxHeight: "inherit",
        width: "100%",
        display: "flex",
        // position: "fixed",
        flexDirection: "column",
        transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        [theme.breakpoints.down("md")]: {
            height: "100%",
            position: "fixed",
            maxHeight: "inherit",
        },
    }));

    const BoxContainer = styled(Container)(({ theme }) => ({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        padding: "24px 16px",
        gap: "40px",
        zIndex: 9,
        display: "flex",
        WebkitBoxAlign: "center",
        alignItems: "center",
        flexDirection: "column",
    }));

    const MainTitle = styled(Stack)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        textAlign: "center",
    }));
    const BoxTrans = styled(Box)(({ theme }) => ({
        transform: "none",
        opacity: 1,
    }));

    const h1Style = {
        display: "flex",
        flexWrap: "wrap",
        WebkitBoxPack: "center",
        justifyContent: "center",
        fontFamily:
            'Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontWeight: 800,
        fontSize: "2rem",
        lineHeight: 1.33333,
        margin: "0px auto",
        // maxWidth: "680px",
    };
    const TypographySt = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            fontSize: "20px",
            lineHeight: "36px",
        },
    }));

    const BoxTitle = styled(Box)(({ theme }) => ({
        width: "100%",
        opacity: 0.24,
    }));

    const commonBall = {
        width: "14px",
        height: "14px",
        borderRadius: "50%",
    };
    const wrapBall = {
        width: "14px",
        height: "14px",
        top: "50%",
        left: "50%",
        position: "absolute",
    };

    return (
        <BoxSection ref={boxContainerRef}>
            <BoxItem>
                <BoxContainer
                    maxWidth="lg"
                    sx={{
                        flex: "1 1 auto",
                        WebkitBoxPack: "center",
                        justifyContent: "center",
                        paddingTop: "72px",
                        paddingBottom: "72px",
                    }}
                >
                    <MainTitle>
                        <BoxTrans
                            className="change"
                            ref={elementsRef}
                            sx={{
                                scrollBehavior: "smooth",
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    ...h1Style,
                                    fontSize: "72px",
                                    lineHeight: "90px",

                                    fontSize: {
                                        lg: `72px`,
                                        md: `2.75rem`,
                                        xs: "2.5rem",
                                    },
                                    lineHeight: {
                                        lg: "90px",
                                        md: "1.33333",
                                    },
                                }}
                            >
                                <BoxTitle component={"span"}>
                                    Boost your building
                                </BoxTitle>

                                {"process with "}

                                <Box
                                    component={"span"}
                                    sx={{
                                        marginLeft: "8px",
                                        display: ["flex", "inline-block"],
                                        background:
                                            "linear-gradient(to right, #00A76F, #5BE49B, orange, #5BE49B, #00A76F, orange, #5BE49B, #00A76F)",
                                        backgroundSize: "300% 100%",
                                        backgroundPosition: "center",
                                        backgroundClip: "text",
                                        color: "transparent",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        color: "transparent",
                                        animation:
                                            "moveBackground 15s linear infinite",
                                    }}
                                >
                                    {" "}
                                    Minimal
                                </Box>
                            </Typography>
                        </BoxTrans>
                        <Box sx={{}}>
                            <Box
                                className="change"
                                sx={{
                                    textAlign: "center",
                                    opacity: 1,
                                    transform: "none",
                                    // transform: `translateY(-${
                                    //     scrollPercentage * 3.6
                                    // }px)`,
                                }}
                            >
                                <TypographySt
                                    component="p"
                                    variant="body2"
                                    sx={{
                                        whiteSpace: "pre",
                                        fontSize: {
                                            lg: "20px",
                                            md: "0.875rem",
                                        },
                                        lineHeight: {
                                            lg: "36px",
                                            md: "1.57",
                                        },
                                    }}
                                >
                                    {
                                        "The starting point for your next project is based on MUI.\nEasy customization helps you build apps faster and better."
                                    }
                                </TypographySt>
                            </Box>
                        </Box>
                    </MainTitle>
                    <Box
                        className="change"
                        sx={{
                            transform: "none",
                            // transform: `translateY(-${
                            //     scrollPercentage * 3.2
                            // }px)`,
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    gap: "12px",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    WebkitBoxAlign: "center",
                                    alignItems: "center",
                                    WebkitBoxPack: "center",
                                    justifyContent: "center",
                                    fontFamily:
                                        '"Public Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                    fontWeight: 600,
                                    fontSize: "0.875rem",
                                    lineHeight: 1.57143,
                                }}
                            >
                                <AvatarGroup max={4}>
                                    <Avatar alt="Remy Sharp" src="" />
                                    <Avatar alt="Travis Howard" src="" />
                                    <Avatar alt="Cindy Baker" src="" />
                                </AvatarGroup>
                                {"160+ Happy customers"}
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        className="change"
                        sx={{
                            transform: "none",
                            // transform: `translateY(-${
                            //     scrollPercentage * 2.8
                            // }px)`,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "16px",
                            }}
                        >
                            <Box>
                                <Stack
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "20px",
                                        WebkitBoxAlign: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Button
                                        variant="dark"
                                        startIcon={<BoltIcon />}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "4px 14px",
                                        }}
                                    >
                                        <Box component={"span"}>
                                            {"Live preview"}
                                            <Box
                                                component={"small"}
                                                sx={{
                                                    marginTop: "-3px",
                                                    opacity: 0.64,
                                                    display: "flex",
                                                    fontSize: "0.625rem",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                v6.0.1
                                            </Box>
                                        </Box>
                                    </Button>
                                    <Box
                                        component={"span"}
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: "0.875rem",
                                            lineHeight: 1.57143,
                                            textDecoration: "underline",
                                            color: "inherit",
                                            gap: "4px",
                                            WebkitBoxAlign: "center",
                                            alignItems: "center",
                                            display: "inline-flex",
                                        }}
                                    >
                                        Get free version
                                        <OpenInNewIcon
                                            sx={{
                                                width: "12px",
                                                height: "12px",
                                            }}
                                        />
                                    </Box>
                                </Stack>
                            </Box>
                            <Box>
                                <Button
                                    variant="light"
                                    startIcon={<DesignServicesIcon />}
                                    sx={{
                                        padding: "7px 16px",
                                        minHeight: "48px",
                                    }}
                                >
                                    Figma Preview
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            className="change"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px",
                            }}
                        >
                            <Box
                                sx={{
                                    margin: "0px",

                                    fontWeight: 700,
                                    fontSize: "0.75rem",
                                    lineHeight: 1.5,
                                    textTransform: "uppercase",
                                    opacity: 0.4,
                                    textAlign: "center",
                                    // transform: `translateY(-${
                                    //     scrollPercentage * 2
                                    // }px)`,
                                }}
                            >
                                Available For
                            </Box>
                            <Stack
                                direction={"row"}
                                spacing={2.5}
                                sx={{
                                    "& .MuiAvatar-root": {
                                        width: "24px",
                                        height: "24px",
                                    },
                                    // transform: `translateY(-${
                                    //     scrollPercentage / 2
                                    // }px)`,
                                }}
                            >
                                <Avatar src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-js.svg" />
                                <Avatar src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-ts.svg" />
                                <Avatar src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-nextjs.svg" />
                                <Avatar src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-vite.svg" />
                                <Avatar src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-figma.svg" />
                            </Stack>
                        </Box>
                    </Box>

                    <Stack
                        sx={{
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            display: "flex",
                            flexDirection: "column",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            WebkitBoxPack: "center",
                            justifyContent: "center",
                            "--stroke-dasharray": "3",
                            "--stroke-spacing": "80px",
                        }}
                    >
                        <Box
                            sx={{
                                ...wrapBall,
                                transform:
                                    "translate(calc(50% + 430px), calc(50% - 160px))",
                            }}
                        >
                            <Box
                                sx={{
                                    ...commonBall,
                                    boxShadow: "0px -2px 4px 0px #FFAB00 inset",
                                    background: `linear-gradient(135deg, #FFF5CC, #FFD666)`,
                                    // transform:
                                    //     "translate(calc(50% - 356px), calc(50% +37px))",
                                }}
                            ></Box>
                        </Box>
                        <Box
                            sx={{
                                ...wrapBall,
                                transform:
                                    "translate(calc(50% - 457px), calc(50% - 259px))",
                            }}
                        >
                            <Box
                                sx={{
                                    ...commonBall,
                                    boxShadow: "0px -2px 4px 0px #FF5630 inset",
                                    background: `linear-gradient(135deg, #FFE9D5, #FFAC82)`,
                                }}
                            ></Box>
                        </Box>
                        <Box
                            sx={{
                                ...wrapBall,
                                transform:
                                    "translate(calc(50% + 332px), calc(50% + 135px))",
                            }}
                        >
                            <Box
                                sx={{
                                    ...commonBall,
                                    boxShadow: "0px -2px 4px 0px #00B8D9 inset",
                                    background: `linear-gradient(135deg, #CAFDF5, #61F3F3)`,
                                }}
                            ></Box>
                        </Box>
                        <Box
                            sx={{
                                ...wrapBall,
                                transform:
                                    "translate(calc(50% - 356px), calc(50% + 37px))",
                            }}
                        >
                            <Box
                                sx={{
                                    ...commonBall,
                                    boxShadow: "0px -2px 4px 0px #8E33FF inset",
                                    background: `linear-gradient(135deg, #EFD6FF, #C684FF)`,
                                }}
                            ></Box>
                        </Box>
                        <Box
                            sx={{
                                ...wrapBall,
                                transform:
                                    "translate(calc(50% + 136px), calc(50% + 332px))",
                            }}
                        >
                            <Box
                                sx={{
                                    ...commonBall,
                                    boxShadow: "0px -2px 4px 0px #22C55E inset",
                                    background: `linear-gradient(135deg, #D3FCD2, #77ED8B)`,
                                }}
                            ></Box>
                        </Box>
                        <Box
                            className="svg"
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                        >
                            <BgSvg />
                        </Box>
                    </Stack>
                </BoxContainer>
            </BoxItem>
        </BoxSection>
    );
};

export default Section;
