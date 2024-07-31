import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";
import Section from "./component/section";
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import HeroSection from "./component/hero";
import FeatureSection from "./component/features";
import Slider from "./component/slider";
import SectionInfo from "./component/sectionInfo";
import Slider2 from "./component/slider2";
import GridBox from "./component/gridBox";
import Course from "./component/course";
import EmailIcon from "@mui/icons-material/Email";
import BackToTop from "./component/scrollTop";
import Footer from "@/components/footer";

const LayoutMinimal = () => {
    return (
        <Box id="back-to-top-anchor">
            <Section />
            <HeroSection />
            <FeatureSection />
            <Slider />
            <SectionInfo />
            <Container maxWidth="lg" sx={{ paddingBottom: "64px" }}>
                <GridBox
                    intro={"App Features"}
                    title="Highlight"
                    fade="features"
                    oneline={true}
                />
            </Container>
            <Slider2 />
            <Box>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item md={5.5}>
                            <GridBox
                                intro={"Integrations"}
                                title="Robust integration"
                                fade="framework"
                                sub={
                                    "A comprehensive suite of integrations offers diverse\nfunctionalities."
                                }
                                note={
                                    <span>
                                        * Only includes authentication methods.
                                        <br />* Database not included.
                                    </span>
                                }
                            />
                        </Grid>
                        <Grid item md={6.5}>
                            <Box sx={{ p: "64px" }}>
                                <Avatar
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/illustration-integration.webp"
                                    alt=""
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Course />
            <Stack
                sx={{
                    background:
                        "linear-gradient(270deg, rgba(145 158 171 / 0.08), rgba(145 158 171 / 0))",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "64px 24px",
                }}
                gap={1.25}
                direction={"column"}
            >
                <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    color={"text.primary"}
                >
                    Still have question?
                </Typography>
                <Typography variant="subtitle1" color={"text.secondary"}>
                    Please describe your case to receive the most accurate
                    advice
                </Typography>
                <Box sx={{ margin: "auto" }}>
                    <Button variant="dark" startIcon={<EmailIcon />}>
                        Contac us
                    </Button>
                </Box>
            </Stack>
            <Box>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item md={6}>
                            <GridBox
                                intro={"Looking For a"}
                                title="Landing page"
                                fade="template?"
                                sub="Fuse with dashboards to produce a superior product."
                            />
                        </Grid>
                        <Grid item md={6}>
                            <Box
                                sx={{
                                    p: "64px",
                                    filter: "drop-shadow(0 24px 48px rgba(145 158 171 / 0.16))",
                                }}
                            >
                                <Avatar
                                    variant="square"
                                    src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/zone-landing.webp"
                                    alt=""
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container maxWidth="lg">
                <Stack
                    direction={"row"}
                    gap={5}
                    sx={{
                        padding: "64xp 40px",
                        backgroundColor: "#141A21",
                        border: "solid 1px #1C252E",
                        borderRadius: "24px",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <Box className="fly" sx={{ width: "360px" }}>
                        <Avatar
                            src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/illustration-rocket-large.webp"
                            alt=""
                            sx={{ width: "100%", height: "auto" }}
                        />
                    </Box>
                    <Stack
                        direction={"column"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={5}
                    >
                        <Typography
                            variant="h2"
                            color={"white"}
                            sx={{ fontSize: "3.635rem", fontWeight: 700 }}
                        >
                            Get started with
                            <br />
                            Minimal kittoday
                        </Typography>
                        <Stack direction={"row"} gap={2}>
                            <Button
                                variant="dark"
                                height={"48px"}
                                sx={{
                                    minHeight: "48px",
                                    borderRadius: "8px",
                                    padding: "8px 16px",
                                    backgroundColor: "primary.main",
                                }}
                            >
                                Puchase now
                            </Button>
                            <Button
                                variant="light"
                                height={"48px"}
                                sx={{
                                    minHeight: "48px",
                                    borderRadius: "8px",
                                    padding: "8px 16px",
                                    color: "white",
                                    background: "primary.main",
                                }}
                                endIcon={<OpenInNewIcon fontSize="small" />}
                            >
                                Get free version
                            </Button>
                        </Stack>
                    </Stack>
                    <Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                flexShrink: 0,
                                display: "inline-flex",
                                backgroundColor: "currentcolor",
                                mask: "url(https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/background/shape-grid.svg) center center / auto 100% no-repeat",
                                top: "0px",
                                left: "0px",
                                zIndex: 8,
                                opacity: 0.08,
                                color: "#919EAB",
                                position: "absolute",
                            }}
                        ></Box>
                    </Box>
                </Stack>
            </Container>
            <BackToTop />
            <Container maxWidth="lg">
                <Box sx={{ padding: "32px" }}></Box>
            </Container>
        </Box>
    );
};

export default LayoutMinimal;
