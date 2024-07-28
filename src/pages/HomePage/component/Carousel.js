"use client";
import {
    Avatar,
    Box,
    Container,
    Grid,
    Typography,
    Button,
    styled,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const GridItemCustom = styled(Grid)(({ theme }) => ({
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& .title_pg": {
                textAlign: "center",
                fontSize: "30px",
            },
        },
    }));
    return (
        <Box
            sx={{
                marginBottom: "60px",
                overflow: "hidden",
                background: "#F6F2ED",
            }}
        >
            <Container maxWidth="xl">
                <Box>
                    <Slider {...settings}>
                        <Box>
                            <Grid
                                container
                                spacing={0}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "flex",
                                    alignItems: "center",
                                    paddingBlock: "2rem",
                                }}
                            >
                                <Grid item xs={12} sm={6}>
                                    <BoxText
                                        sx={{
                                            paddingBlock: "8rem",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                color: "#BE7374",
                                            }}
                                        >
                                            GRIT SHOP
                                        </Typography>
                                        <Typography
                                            className="title_pg"
                                            variant="h3"
                                            mt={2}
                                            mb={3}
                                            sx={{
                                                fontWeight: "700",
                                                maxWidth: "600px",
                                                lineHeight: 1.3,
                                                fontSize: "45px",
                                            }}
                                        >
                                            The gift of a man is his goodwill.
                                            Take care of gift
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: "#BE7374",
                                                textTransform: "capitalize",
                                                color: "#fff",
                                                fontWeight: "400",
                                                borderRadius: "0",
                                                fontSize: "16px",
                                                padding: "8px 30px",
                                                "&:hover": {
                                                    background: "#D89C98",
                                                },
                                            }}
                                        >
                                            ShopNow
                                        </Button>
                                    </BoxText>
                                </Grid>
                                <GridItemCustom
                                    item
                                    sm={6}
                                    xs={0}
                                    width={"432px"}
                                    height={"213px"}
                                    sx={{
                                        paddingInline: "3rem",
                                    }}
                                >
                                    <Avatar
                                        src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FHeader.png&w=640&q=75"
                                        alt="imag"
                                        variant="square"
                                        sx={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </GridItemCustom>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid
                                container
                                spacing={0}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "flex",
                                    alignItems: "center",
                                    paddingBlock: "2rem",
                                }}
                            >
                                <Grid item xs={12} sm={6}>
                                    <BoxText
                                        sx={{
                                            paddingBlock: "8rem",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                color: "#BE7374",
                                            }}
                                        >
                                            GRIT SHOP
                                        </Typography>
                                        <Typography
                                            className="title_pg"
                                            fontSize={"45px"}
                                            mt={2}
                                            mb={3}
                                            sx={{
                                                fontWeight: "700",
                                                maxWidth: "600px",
                                                lineHeight: 1.3,
                                                fontSize: "30px",
                                            }}
                                        >
                                            The gift of a man is his goodwill.
                                            Take care of gift
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: "#BE7374",
                                                textTransform: "capitalize",
                                                color: "#fff",
                                                fontWeight: "400",
                                                borderRadius: "0",
                                                fontSize: "16px",
                                                padding: "8px 30px",
                                                "&:hover": {
                                                    background: "#D89C98",
                                                },
                                            }}
                                        >
                                            ShopNow
                                        </Button>
                                    </BoxText>
                                </Grid>
                                <GridItemCustom
                                    item
                                    sm={6}
                                    xs={0}
                                    width={"432px"}
                                    height={"213px"}
                                    sx={{
                                        paddingInline: "3rem",
                                    }}
                                >
                                    <Avatar
                                        src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FHeader.png&w=640&q=75"
                                        alt="imag"
                                        variant="square"
                                        sx={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </GridItemCustom>
                            </Grid>
                        </Box>
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default Carousel;
