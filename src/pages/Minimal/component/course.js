import {
    Typography,
    Container,
    Box,
    Grid,
    Stack,
    Avatar,
    Button,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { v4 as uuidv4 } from "uuid";
const Course = () => {
    return (
        <Container maxWidth="lg">
            <Box pt="80px">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        justifyContent: "center",
                        textAlign: "center",
                        marginBottom: "64px",
                    }}
                >
                    <Typography
                        variant="caption"
                        color={"text.secondary"}
                        sx={{
                            fontWeight: 700,
                            textTransform: "uppercase",
                            lineHeight: 1.5,
                            fontSize: ".75rem",
                        }}
                    >
                        Plans
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: "3rem", fontWeight: 800 }}
                    >
                        Transparent{" "}
                        <Typography
                            variant="span"
                            sx={{
                                display: "inline-block",
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
                            pricing
                        </Typography>
                    </Typography>
                    <Typography variant="subtitle1">
                        Choose from flexible pricing options designed to fit
                        your business needs and budget with no hidden fees.
                    </Typography>
                </Box>
            </Box>
            <Grid container>
                <Grid item md={4}>
                    <Stack
                        direction={"column"}
                        sx={{
                            gap: "40px",
                            padding: "64px 48px",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                WebkitBoxAlign: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    WebkitBoxFlex: "1",
                                    flexGrow: 1,
                                }}
                            >
                                <Typography
                                    color={"text.primary"}
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                    }}
                                >
                                    Standard
                                </Typography>
                                <Box>
                                    <Box
                                        sx={{
                                            width: "32px",
                                            height: "6px",
                                            opacity: 0.24,
                                            borderRadius: "8px",
                                            backgroundColor: "primary.main",
                                        }}
                                    ></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "2rem",
                                        lineHeight: 1.5,
                                    }}
                                    color={"text.primary"}
                                >
                                    $69
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Stack
                                direction={"row"}
                                gap={2}
                                sx={{ alignItems: "flex-end" }}
                            >
                                <Avatar
                                    sx={{ width: "24px", height: "24px" }}
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-js.svg"
                                    alt=""
                                />
                                <Avatar
                                    sx={{ width: "24px", height: "24px" }}
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-ts.svg"
                                    alt=""
                                />
                                <Avatar
                                    sx={{ width: "24px", height: "24px" }}
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-figma.svg"
                                    alt=""
                                />
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
                                    {"(only)"}
                                </Typography>
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction={"column"} gap={"20px"}>
                                {list1.map(({ type, text }) => {
                                    return generateBox(type, text);
                                })}
                            </Stack>
                        </Box>
                        <Button variant="light" sx={{ height: "48px" }}>
                            Get started
                        </Button>
                    </Stack>
                </Grid>
                <Grid item md={4}>
                    <Stack
                        direction={"column"}
                        sx={{
                            gap: "40px",
                            padding: "64px 48px",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                WebkitBoxAlign: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    WebkitBoxFlex: "1",
                                    flexGrow: 1,
                                }}
                            >
                                <Typography
                                    color={"text.primary"}
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                    }}
                                >
                                    Plus
                                </Typography>
                                <Box>
                                    <Box
                                        sx={{
                                            width: "32px",
                                            height: "6px",
                                            opacity: 0.24,
                                            borderRadius: "8px",
                                            backgroundColor: "secondary.main",
                                        }}
                                    ></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "2rem",
                                        lineHeight: 1.5,
                                    }}
                                    color={"text.primary"}
                                >
                                    $129
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Stack
                                direction={"row"}
                                gap={2}
                                sx={{ alignItems: "flex-end" }}
                            >
                                <Avatar
                                    sx={{ width: "24px", height: "24px" }}
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-js.svg"
                                    alt=""
                                />
                                <Avatar
                                    sx={{ width: "24px", height: "24px" }}
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-ts.svg"
                                    alt=""
                                />
                                <Avatar
                                    sx={{ width: "24px", height: "24px" }}
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-figma.svg"
                                    alt=""
                                />
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
                                    {"(only)"}
                                </Typography>
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction={"column"} gap={"20px"}>
                                {list2.map(({ type, text }) => {
                                    return generateBox(type, text);
                                })}
                            </Stack>
                        </Box>
                        <Button variant="dark" sx={{ height: "48px" }}>
                            Get started
                        </Button>
                    </Stack>
                </Grid>
                <Grid item md={4}>
                    <Stack
                        direction={"column"}
                        sx={{
                            gap: "40px",
                            padding: "64px 48px",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                WebkitBoxAlign: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    WebkitBoxFlex: "1",
                                    flexGrow: 1,
                                }}
                            >
                                <Typography
                                    color={"text.primary"}
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                    }}
                                >
                                    Extended
                                </Typography>
                                <Box>
                                    <Box
                                        sx={{
                                            width: "32px",
                                            height: "6px",
                                            opacity: 0.24,
                                            borderRadius: "8px",
                                            backgroundColor: "error.main",
                                        }}
                                    ></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "2rem",
                                        lineHeight: 1.5,
                                    }}
                                    color={"text.primary"}
                                >
                                    $599
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Stack
                                direction={"row"}
                                gap={2}
                                sx={{ alignItems: "flex-end" }}
                            >
                                <Avatar
                                    sx={{ width: "24px", height: "24px" }}
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-js.svg"
                                    alt=""
                                />
                                <Avatar
                                    sx={{ width: "24px", height: "24px" }}
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-ts.svg"
                                    alt=""
                                />
                                <Avatar
                                    sx={{ width: "24px", height: "24px" }}
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/platforms/ic-figma.svg"
                                    alt=""
                                />
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
                                    {"(only)"}
                                </Typography>
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction={"column"} gap={"20px"}>
                                {list3.map(({ type, text }) => {
                                    return generateBox(type, text);
                                })}
                            </Stack>
                        </Box>
                        <Button variant="light" sx={{ height: "48px" }}>
                            Get started
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

const generateBox = (type, text) => {
    switch (type) {
        case 1:
            return (
                <Stack
                    key={uuidv4()}
                    sx={{
                        fontWeight: 400,
                        fontSize: "0.875rem",
                        lineHeight: 1.57143,
                    }}
                    direction={"row"}
                    gap={"12px"}
                >
                    <CheckIcon />
                    {text}
                </Stack>
            );
        case 2:
            return (
                <Stack
                    key={uuidv4()}
                    sx={{
                        fontWeight: 400,
                        fontSize: "0.875rem",
                        lineHeight: 1.57143,
                        textDecoration: "line-through",
                    }}
                    direction={"row"}
                    gap={"12px"}
                    color={"text.disabled"}
                >
                    <CloseIcon />
                    {text}
                </Stack>
            );
        default:
            return (
                <Box className="dash" key={uuidv4()}>
                    <Box
                        component={"hr"}
                        sx={{
                            margin: "0px",
                            flexShrink: 0,
                            borderWidth: "0px 0px thin",
                            borderColor: "rgba(145 158 171 / 0.2)",
                            borderStyle: "dashed",
                        }}
                    ></Box>
                </Box>
            );
    }
};

const list1 = [
    {
        type: 1,
        text: "One end products",
    },
    {
        type: 1,
        text: "12 months updates",
    },
    {
        type: 1,
        text: "6 months of support",
    },
    {
        type: 1,
        text: "One-time payments",
    },
    {
        type: 1,
        text: "Lifttime perpetual license",
    },
    {
        type: 0,
    },
    {
        type: 1,
        text: "Jascript version",
    },
    {
        type: 2,
        text: "Typscript version",
    },
    {
        type: 2,
        text: "Design resources (Figma)",
    },
    {
        type: 2,
        text: "Commercial applications",
    },
];

const list2 = [
    {
        type: 1,
        text: "One end products",
    },
    {
        type: 1,
        text: "12 months updates",
    },
    {
        type: 1,
        text: "6 months of support",
    },
    {
        type: 1,
        text: "One-time payments",
    },
    {
        type: 1,
        text: "Lifttime perpetual license",
    },
    {
        type: 0,
    },
    {
        type: 1,
        text: "Jascript version",
    },
    {
        type: 1,
        text: "Typscript version",
    },
    {
        type: 1,
        text: "Design resources (Figma)",
    },
    {
        type: 2,
        text: "Commercial applications",
    },
];

const list3 = [
    {
        type: 1,
        text: "One end products",
    },
    {
        type: 1,
        text: "12 months updates",
    },
    {
        type: 1,
        text: "6 months of support",
    },
    {
        type: 1,
        text: "One-time payments",
    },
    {
        type: 1,
        text: "Lifttime perpetual license",
    },
    {
        type: 0,
    },
    {
        type: 1,
        text: "Jascript version",
    },
    {
        type: 1,
        text: "Typscript version",
    },
    {
        type: 1,
        text: "Design resources (Figma)",
    },
    {
        type: 1,
        text: "Commercial applications",
    },
];

export default Course;
