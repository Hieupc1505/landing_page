"use client";
import { Box, Container, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "./component/Carousel";
import Navbar from "./component/Navbar";
import PageContent from "./component/pageContent";
import ListProduct from "./layout/listproduct";
import Product from "../HomePage/component/product";
import Slider from "react-slick/lib/slider";
import { v4 as uuidv4 } from "uuid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const popular = [
    {
        name: "Birthday gift for girl",
        img: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2Fpngwing.com%20(3).png&w=640&q=75",
    },
    {
        name: "Gift for boy",
        img: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%205.png&w=640&q=75",
    },
    {
        name: "Baby Toy Gift",
        img: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%203.png&w=640&q=75",
    },
    {
        name: "Baby doll gift",
        img: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%206.png&w=640&q=75",
    },
];

const top = [
    {
        name: "Gold Wedding Ring",
        img: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%207.png&w=640&q=75",
    },
    {
        name: "Gift for baby",
        img: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%204.png&w=640&q=75",
    },
    {
        name: "Special Gift for young",
        img: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FGift%20Box.png&w=640&q=75",
    },
    {
        name: "Gift for boy",
        img: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%205.png&w=640&q=75",
    },
    {
        name: "Jewellery Gift",
        img: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FGift%20box%202.png&w=640&q=75",
    },
];

const HomePage = () => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: sm ? 2 : 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: sm ? 2 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <Box sx={{ background: "#F6F9FC", paddingBottom: "64px" }}>
            <Carousel />
            <Container
                maxWidth="xl"
                sx={{
                    margin: "auto",
                    marginBottom: "2rem",
                    display: "flex",
                }}
            >
                <Navbar />
                <PageContent />
            </Container>
            <Container maxWidth={"xl"}>
                <ListProduct title={"Popular Item"}>
                    <Slider {...settings}>
                        {popular.map(({ name, img }) => (
                            <Box key={uuidv4()}>
                                <Product name={name} img={img} />{" "}
                            </Box>
                        ))}
                    </Slider>
                </ListProduct>
            </Container>
            <Container maxWidth={"xl"}>
                <ListProduct title={"Top Sell Items"}>
                    <Slider {...settings2}>
                        {top.map(({ img, name }) => (
                            <Box key={uuidv4()}>
                                <Product name={name} img={img} />
                            </Box>
                        ))}
                    </Slider>
                </ListProduct>
            </Container>
            <Container maxWidth={"xl"}>
                <ListProduct title={"All Gift Items"} isButton={true}>
                    <Grid container>
                        {[...popular, ...top, ...popular]
                            .slice(0, 12)
                            .map(({ img, name }) => (
                                <Grid item xs={12} sm={6} md={3} key={uuidv4()}>
                                    <Product name={name} img={img} />
                                </Grid>
                            ))}
                    </Grid>
                </ListProduct>
            </Container>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        minHeight: 400,
                        backgroundImage:
                            'url("https://bazaar.ui-lib.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-54.635ad6ee.png&w=1920&q=75")',
                        backgroundSize: "",
                        mt: 6,
                    }}
                >
                    <Box
                        sx={{
                            textAlign: "center",
                            transform: "translateY(90%)",
                        }}
                    >
                        <Box>
                            <Typography variant="h6">Summer Offer!</Typography>
                        </Box>
                        <Box sx={{ mt: 2, mb: 3 }}>
                            <Typography variant="h4" fontWeight={700}>
                                30% off for All Items
                            </Typography>
                        </Box>
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
                                    boxShadow:
                                        "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                    minWidth: 0,
                                    minHeight: 0,
                                    fontWeight: 600,
                                    textTransform: "capitalize",
                                    padding: "0.75em 1.5rem",
                                    "&:hover": {
                                        background: "#883948",
                                    },
                                }}
                            >
                                Load More...
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePage;
