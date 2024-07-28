"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";

const ListProduct = ({ title, children, isButton = false }) => {
    return (
        <Box sx={{ overflow: "hidden" }}>
            <Typography fontWeight={"bold"} variant="h5" mb={"24px"}>
                {title}
            </Typography>
            {children}
            {isButton ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        sx={{
                            minWidth: 64,
                            padding: "6px 16px",
                            transition:
                                "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            color: "#fff",
                            backgroundColor: "#BE7374",
                            boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                            minWidth: 0,
                            minHeight: 0,
                            fontWeight: 600,
                            textTransform: "capitalize",
                            padding: "0.75em 1.5rem",
                            "&:hover": {
                                background: "#883948",
                            },
                            mt: 8,
                        }}
                    >
                        Load More...
                    </Button>
                </Box>
            ) : (
                ""
            )}
        </Box>
    );
};

export default ListProduct;
