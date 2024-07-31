"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import "./test.css";
import { v4 as uuidv4 } from "uuid";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import CookieIcon from "@mui/icons-material/Cookie";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const trigger = useRef(null);
    const container = useRef(null);

    useLayoutEffect(() => {
        const sections = gsap.utils.toArray(".panel");
        const containerElement = container.current;

        if (container) {
            console.log(container.current.offsetWidth);
            let ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: trigger.current,
                        pin: true,
                        scrub: 1,
                        end: `+=${containerElement.offsetWidth}`,
                    },
                });

                tl.to(containerElement, {
                    xPercent: -65,
                    ease: "none",
                    duration: 4,
                })

                    .to(
                        ".container_page",
                        {
                            backgroundImage:
                                "linear-gradient(rgb(91,228,155), rgb(0.120.103))",
                            duration: 1,
                            ease: "none",
                        },
                        "<0"
                    )
                    .to(
                        ".container_page",
                        {
                            backgroundImage:
                                "linear-gradient(rgb(98, 217, 208), rgb(2, 102, 142))",
                            duration: 1,
                            ease: "none",
                        },
                        "<.6"
                    )
                    .to(
                        ".container_page",
                        {
                            backgroundImage:
                                "linear-gradient(rgb(184, 135, 244), rgb(66, 28, 158))",
                            duration: 1,
                            ease: "none",
                        },
                        "<1"
                    )
                    .to(
                        ".container_page",
                        {
                            backgroundImage:
                                "linear-gradient(rgb(255, 195, 169), rgb(183, 37, 49))",
                            duration: 1,
                            ease: "none",
                        },
                        "<1.4"
                    )
                    .to(
                        ".container_page",
                        {
                            backgroundImage:
                                "linear-gradient(rgb(244, 246, 248), rgb(244, 246, 248))",
                            duration: 1,
                            ease: "none",
                        },
                        "<"
                    );
            }, trigger);

            return () => ctx.revert();
        }
    });

    const images = [
        {
            title: "Dark mode",
            sub: "A dark theme that feels easier on the eyes.",
            img: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/highlight-darkmode.webp",
            icon: <NightsStayIcon fontSize="large" />,
        },
        {
            title: "Color presets",
            sub: "Express your own style with just one click.",
            img: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/highlight-presets-1.webp",
            icon: <CookieIcon fontSize="large" />,
        },
        {
            img: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/highlight-presets-2.webp",
        },
        {
            img: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/highlight-presets-3.webp",
        },
        {
            img: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/highlight-presets-4.webp",
        },
        {
            img: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/highlight-presets-5.webp",
        },
        {
            title: "Right-to-left",
            sub: "Support languages such as Arabic, Persian, and Hebrew.",
            img: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/highlight-rtl.webp",
            icon: <AlignHorizontalLeftIcon fontSize="large" />,
        },
    ];

    return (
        <Box className="App">
            <div className="extra">
                <p>scroll down</p>
            </div>
            <Box
                ref={trigger}
                sx={{
                    width: "600%",
                }}
            >
                <Box
                    ref={container}
                    className="container_page"
                    sx={{
                        width: "100%",
                        gap: "64px",
                        paddingLeft: "32px",
                    }}
                >
                    {images.map(({ title = null, sub = null, img, icon }) => (
                        <Box key={uuidv4()} className="panel">
                            <Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "16px",
                                        marginBottom: "48px",
                                        alignItems: "flex-start",
                                        minHeight: "70px",
                                    }}
                                >
                                    <Box mt={"-8px"} color="text.primary">
                                        {icon ? icon : ""}
                                    </Box>
                                    <Stack
                                        direction={"column"}
                                        gap={2}
                                        sx={{ textAlign: "start" }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontSize: {
                                                    lg: "1.875rem",
                                                },
                                                color: "text.primary",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {title ? title : ""}
                                        </Typography>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontSize: {
                                                    lg: "1rem",
                                                },
                                                color: "text.secondary",
                                            }}
                                        >
                                            {sub ? sub : ""}
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box
                                    sx={{
                                        width: "800px",
                                    }}
                                >
                                    <Avatar
                                        src={img}
                                        variant="square"
                                        sx={{
                                            borderRadius: "16px",
                                            width: "100%",
                                            height: "auto",
                                            boxShadow:
                                                "-40px 40px 80px 0px rgba(145 158 171 / 0.16)",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            <div className="extra">
                <p>scroll down</p>
            </div>
        </Box>
    );
}
