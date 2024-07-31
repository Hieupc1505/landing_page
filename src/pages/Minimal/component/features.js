import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Features = () => {
    return (
        <Box>
            <Stack direction={"column"} pt={10}>
                <Box>
                    <Box>
                        <Container maxWidth="lg">
                            <Grid container>
                                <Grid item></Grid>
                                <Grid item md={6} xs={12}>
                                    <Stack
                                        gap={"24"}
                                        direction={"column"}
                                        mb={0}
                                    >
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
                                            Interface Starter Kit
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
                                                whiteSpace: "pre",
                                            }}
                                        >
                                            {"Large bundle of\n"}
                                            <Typography
                                                component={"span"}
                                                variant="fade"
                                                sx={{
                                                    paddingLeft: 0,
                                                    marginLeft: 0,
                                                }}
                                            >
                                                Elements
                                            </Typography>
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Box pl={8}>
                                        <Typography
                                            variant="body1"
                                            component={"p"}
                                            sx={{
                                                fontSize: "20px",
                                                lineHeight: 1.8,
                                                color: "text.disabled",
                                            }}
                                        >
                                            <Typography
                                                component={"span"}
                                                sx={{
                                                    color: "typography.main",
                                                    fontSize: "20px",
                                                    lineHeight: 1.8,
                                                }}
                                            >
                                                Explore a comprehensive range of
                                                elements
                                            </Typography>
                                            like menus, sliders, buttons,
                                            inputs, and others, all conveniently
                                            gathered here.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box>
                                <Button
                                    variant="light"
                                    endIcon={<ArrowForwardIosIcon />}
                                    sx={{
                                        padding: "7px 16px",
                                        mt: "40px",
                                    }}
                                >
                                    Brower Components
                                </Button>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default Features;
