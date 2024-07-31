"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const SectionInfo = () => {
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);

    useEffect(() => {
        let angle = 0;
        const intervalId = setInterval(() => {
            angle = (angle + 1) % 360;
            if (box1Ref.current) {
                // Cập nhật thuộc tính CSS của pseudo-element bằng cách thêm lớp CSS động
                box1Ref.current.style.setProperty(
                    "--angle",
                    `${193 + angle}deg`
                );
                box1Ref.current.style.setProperty(
                    "--angle2",
                    `${340 + angle}deg`
                );
            }
        }, 33); // Cập nhật mỗi 16ms cho ~60fps

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box
            sx={{
                minHeight: "720px",
                backgroundSize: "auto 92%",
                backgroundImage:
                    "url(https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/for-designer.webp)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "#454F5B",
                overflow: "hidden",
            }}
            ref={box1Ref}
            className="wrap"
        >
            <Box width={"100%"}>
                <Box
                    sx={{
                        padding: "0px 64px",
                        top: "0px",
                        left: "0px",
                        position: "absolute",
                        WebkitBoxPack: "center",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        width: "calc(50% + 16px)",
                        height: "calc(50% + 16px)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
                        filter: "none",
                        background:
                            "linear-gradient(135deg, rgba(20 26 33 / 0.8) 0%, #141A21 75%)",
                        borderRadius: "0 0 38px",
                    }}
                >
                    <Box
                        className="box shadow"
                        sx={{
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                        }}
                    >
                        <Box className="sh"></Box>
                    </Box>
                    <Stack direction={"column"} gap={3} className="item">
                        <Typography
                            sx={{
                                marginLeft: "8px",
                                display: ["flex", "inline-block"],
                                background:
                                    "linear-gradient(to right, #ffffff, #bdbaba, #746e6e00, transparent)",
                                backgroundSize: "300% 100%",
                                backgroundPosition: "center",
                                backgroundClip: "text",
                                color: "transparent",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                color: "transparent",
                                fontSize: "12px",
                                textTransform: "uppercase",
                                fontWeight: 700,
                            }}
                        >
                            professional kit
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                marginLeft: "8px",
                                display: ["flex", "inline-block"],
                                background:
                                    "linear-gradient(to right, orange, #5BE49B, #00A)",
                                backgroundSize: "300% 100%",
                                backgroundPosition: "center",
                                backgroundClip: "text",
                                color: "transparent",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                color: "transparent",
                                fontSize: "44px",
                                fontWeight: 700,
                            }}
                        >
                            For designer
                        </Typography>
                        <Typography sx={{ color: "white", whiteSpace: "pre" }}>
                            {`Use variables and variants to save time and\nenergy on designs, design systems.`}
                        </Typography>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#00A76F",
                                padding: "8px 16px",
                                position: "absolute",
                                fontWeight: 600,
                                bottom: "14%",
                                right: "12%",
                            }}
                            endIcon={<NavigateNextIcon />}
                        >
                            Checkout workspace
                        </Button>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        padding: "0px 64px",

                        position: "absolute",
                        WebkitBoxPack: "center",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        width: "calc(50% + 16px)",
                        height: "calc(50% + 16px)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
                        filter: "none",
                        background:
                            "linear-gradient(135deg, rgb(20 26 33 / 4%) 0%, #00000075 75%)",
                        borderRadius: "0 0 38px",
                        transform: "rotate(180deg)",
                        bottom: 0,
                        right: 0,
                    }}
                >
                    <Box
                        className="box2 shadow2"
                        sx={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Box className="sh"></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SectionInfo;
