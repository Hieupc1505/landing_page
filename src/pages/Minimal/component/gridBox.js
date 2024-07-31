import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const GridBox = ({
    intro = null,
    title = "",
    fade = "",
    sub = "",
    note = "",
    oneline = false,
}) => {
    return (
        <Box sx={{ paddingTop: "64px" }}>
            <Stack direaction="column" gap={3}>
                {intro && (
                    <Typography
                        sx={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "text.disabled",
                        }}
                    >
                        {intro}
                    </Typography>
                )}
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: "3rem",
                        fontWeight: 800,
                        color: "text.primary",
                        lineHeight: 1.33333,
                    }}
                >
                    {`${title} `}
                    <Typography
                        variant="span"
                        sx={{
                            display: oneline ? "inline-block" : "block",
                            background:
                                "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.05))",
                            WebkitBackgroundSize: "cover",
                            backgroundSize: "cover",
                            WebkitBackgroundPosition: "center",
                            backgroundPosition: "center",
                            WebkitBackgroundClip: ["text", "text"],
                            backgroundClip: "text",
                            color: "transparent",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {fade}
                    </Typography>
                </Typography>
                {sub && (
                    <Typography variant="subtitle1" color={"text.disabled"}>
                        {sub}
                    </Typography>
                )}
                {note && (
                    <Typography
                        variant="caption"
                        fontStyle={"italic"}
                        sx={{ whiteSpace: "pre" }}
                    >
                        {note}
                    </Typography>
                )}
            </Stack>
        </Box>
    );
};

export default GridBox;
