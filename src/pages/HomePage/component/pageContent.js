"use client";
import {
    Avatar,
    Box,
    Grid,
    Link,
    Paper,
    styled,
    Typography,
} from "@mui/material";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { v4 as uuidv4 } from "uuid";
import { orange } from "@mui/material/colors";
import Slider from "react-slick/lib/slider";
import ListProduct from "../layout/listproduct";

const color = orange[400];

const PageContent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
    };
    const text = [
        {
            icon: <LocalShippingIcon color={color} />,
            sub: "Delivery quality gift",
            sub2: "information on its origins",
        },
        {
            icon: <LibraryAddCheckIcon color={color} />,
            sub: "Gift for all Occession",
            sub2: "information on its origins",
        },
        {
            icon: <SupportAgentIcon color={color} />,
            sub: "Happy Service",
            sub2: "information on its origins",
        },
    ];

    const PageContentWrap = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            width: "calc(100%)",
            marginLeft: 0,
            padding: 0,
        },
    }));

    const BoxItem = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            marginBottom: 0,
        },
    }));

    return (
        <PageContentWrap
            sx={{
                left: "unset",
                position: "relative",
                marginLeft: "1.75rem",
                width: "calc(100% - 3.5rem - 280px)",
                padding: "16px 20px 5px 20px",
            }}
        >
            <Grid container spacing={2}>
                {text.map(({ icon, sub, sub2 }) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={uuidv4()}>
                        <BoxItem
                            sx={{
                                gap: "12px",
                                borderRadius: "8px",
                                display: "flex",
                                flexWrap: "wrap",
                                backgroundColor: "#fff",
                                marginBottom: "2rem",
                                alignItems: "center",
                                padding: "1.5rem 2rem",
                                border: "1px solid #E3E9EF",
                            }}
                        >
                            <Box
                                sx={{
                                    borderRadius: "50%",
                                    bgcolor: "#F6F2ED",
                                    padding: "12px",
                                }}
                            >
                                {icon}
                            </Box>
                            <Box>
                                <Typography variant="h6">{sub}</Typography>
                                <Typography variant="subtitle1">
                                    {sub2}
                                </Typography>
                            </Box>
                        </BoxItem>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <Paper
                        elevation={1}
                        sx={{
                            backgroundColor: "#F6F2ED",
                            color: "#2B3445",
                            transition:
                                "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            borderRadius: "0",
                            boxShadow: "none",
                            overflow: "hidden",
                            height: "250px",
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                paddingInline: "20px",
                                left: "20px",
                            }}
                        >
                            <Typography variant="h6">Holiday Offer!</Typography>
                            <Typography
                                sx={{
                                    fontSize: "25px",
                                    fontWeight: "700",
                                    color: "#BE7374",
                                }}
                                variant="h5"
                            >
                                Sale 50% Off
                            </Typography>
                            <Typography variant="subtitle1">
                                UperCode:Holi
                            </Typography>
                            <Typography variant="subtitle1" fontWeight={600}>
                                ShopNow
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                right: 0,
                                display: "flex",
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Avatar
                                src="https://bazaar.ui-lib.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOffer%20Card.2690ba36.png&w=384&q=75"
                                alt="holi"
                                sx={{ width: "100%", height: "auto" }}
                                variant="square"
                            />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper
                        elevation={1}
                        sx={{
                            color: "#2B3445",
                            transition:
                                "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            borderRadius: "0", // Lưu ý rằng giá trị cuối cùng của border-radius là '0'
                            boxShadow: "none", // Lưu ý rằng giá trị cuối cùng của box-shadow là 'none'
                            overflow: "hidden",
                            height: "250px",
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            background: "#F6F2ED",
                        }}
                    >
                        <Box
                            sx={{
                                top: "25px",
                                zIndex: 1,
                                width: "100%",
                                position: "absolute",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h6">
                                Shop Online Gift Under
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "25px",
                                    fontWeight: "700",
                                    color: "#BE7374",
                                }}
                                variant="h5"
                            >
                                $20.00
                            </Typography>

                            <Typography variant="subtitle1" fontWeight={600}>
                                ShopNow
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                bottom: 0,
                                display: "flex",
                                position: "absolute",
                                width: "100%",
                                height: "auto",
                            }}
                        >
                            <Avatar
                                src="https://bazaar.ui-lib.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOffer%201.72d6d9c1.png&w=384&q=75"
                                alt="holi"
                                variant="square"
                                sx={{ width: "100%", height: "auto" }}
                            />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Box mt={4} mb={6} sx={{ overflow: "hidden" }}>
                <Typography variant="h4" mb={2}>
                    Top Categories
                </Typography>
                {/* <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}> */}
                <Slider {...settings}>
                    {context.map(({ image, title, sub }) => {
                        return slideContent(image, title, sub);
                    })}
                </Slider>
                {/* </Box> */}
            </Box>
        </PageContentWrap>
    );
};

export default PageContent;

const context = [
    {
        image: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%204.png&w=828&q=75",
        title: "Baby Toys",
        sub: "27 Available Itém",
    },
    {
        image: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%201.png&w=828&q=75",
        title: "Birthday Gift",
        sub: "27 Available Itém",
    },
    {
        image: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%202.png&w=828&q=75",
        title: "Couple Gift",
        sub: "27 Available Itém",
    },
];

const slideContent = (image, title, sub) => {
    return (
        <Box
            key={uuidv4()}
            sx={{
                textAlign: "center",
            }}
        >
            <Box sx={{ padding: "0 10px" }}>
                <Box
                    sx={{
                        padding: "20px 40px 20px 40px",
                        background: "#F6F2ED",
                    }}
                >
                    <Avatar
                        src={image}
                        alt="sd"
                        sx={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "124px",
                            "& img": {
                                height: "124px",
                                objectFit: "contain",
                            },
                        }}
                        variant="square"
                    />
                </Box>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: "15px",
                        fontWeight: 600,
                        marginTop: "8px",
                        marginBottom: "2px",
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="subtitle1">{sub}</Typography>
            </Box>
        </Box>
    );
};
