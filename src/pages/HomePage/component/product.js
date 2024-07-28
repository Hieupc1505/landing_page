"use client";
import { Avatar, Box, IconButton, Rating, Typography } from "@mui/material";
import React from "react";

import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Fab, Slide } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
];
const Product = ({ name, img }) => {
    const containerRef = React.useRef();
    const [checked, setChecked] = React.useState(false);
    const handleMouseEnter = () => {
        setChecked(!checked);
    };
    const handleMouseLeave = () => {
        setChecked(!checked);
    };
    return (
        <Box>
            <Box
                sx={{
                    padding: "0 10px",
                    textAlign: "center",
                    cursor: "pointer",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Box
                    sx={{
                        "&:hover": {
                            boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                        },
                        paddingBottom: "8px",
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            background: "#F6F2ED",
                            paddingTop: "80%",
                            backgroundImage: `url("${img}")`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "0 18px",
                            marginBottom: "20px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                        ref={containerRef}
                    >
                        <Slide
                            direction="up"
                            in={checked}
                            container={containerRef.current}
                            timeout={{
                                appear: 500,
                                enter: 300,
                                exit: 200,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    bottom: "10px",
                                    right: "16px",
                                    justifyContent: "flex-end",
                                    position: "absolute",
                                }}
                            >
                                <IconButton>
                                    <FileCopyIcon />
                                </IconButton>
                                <IconButton>
                                    <SaveIcon />
                                </IconButton>
                                <IconButton>
                                    <PrintIcon />
                                </IconButton>
                                <IconButton>
                                    <ShareIcon />
                                </IconButton>
                            </Box>
                        </Slide>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 1,
                            }}
                        >
                            <Typography
                                sx={{ color: "#BE7374", fontWeight: 600 }}
                            >
                                $234.56
                            </Typography>
                            <Typography
                                sx={{
                                    textDecoration: "line-through",
                                    color: "#7D879C",
                                    fontWeight: 600,
                                }}
                            >
                                $23.45
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                            {name}
                        </Typography>
                        <Rating name="read-only" value={3} readOnly />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Product;
