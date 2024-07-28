import { Box, Container, Paper, Typography, Grid, styled } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PetsIcon from "@mui/icons-material/Pets";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ToysIcon from "@mui/icons-material/Toys";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import FeedIcon from "@mui/icons-material/Feed";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import AcUnitIcon from "@mui/icons-material/AcUnit";
// import WidgetsIcon from "@mui/icons-material/Widgets";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
    const title2 = [
        {
            title: "Birthday",
            icon: <CelebrationIcon />,
        },
        {
            title: "Children's",
            icon: <ChildCareIcon />,
        },
        {
            title: "Chrimas Gifts",
            icon: <FilterVintageIcon />,
        },
        {
            title: "Flower",
            icon: <Diversity1Icon />,
        },
        {
            title: "Teddy Bears",
            icon: <FeedIcon />,
        },
        {
            title: "Valentine Gifts",
            icon: <CardGiftcardIcon />,
        },
        {
            title: "Wedding Gifts",
            icon: <AcUnitIcon />,
        },
        {
            title: "New Year Gifts",
            icon: <FiberNewIcon />,
        },
        {
            title: "Toys",
            icon: <ToysIcon />,
        },
        {
            title: "Ball",
            icon: <SportsBasketballIcon />,
        },
        {
            title: "Robot",
            icon: <PrecisionManufacturingIcon />,
        },
        {
            title: "Baby Toys",
            icon: <SmartToyIcon />,
        },
    ];
    const BoxWrap = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));
    return (
        <BoxWrap
            className="navbar"
            sx={{
                width: "280px",
                minWidth: "280px",
                position: "relative",
            }}
        >
            <Box>
                <Paper
                    elevation={0}
                    sx={{
                        position: "relative",
                        paddingBottom: "10px",
                        backgroundColor: "#f3f5f9",
                        color: "#2B3445",
                    }}
                >
                    <Box sx={{ padding: "16px 20px 5px 20px" }}>
                        <Box>
                            <Box
                                className="category_title"
                                sx={{ padding: "16px 0 10px 0" }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    component={"h5"}
                                >
                                    Top Categories
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop: "5px",
                                        marginBottom: "15px",
                                        borderBottomWidth: "2px",
                                        borderBottomStyle: "dashed",
                                        borderBottomColor: "#BE7374",
                                    }}
                                ></Box>
                            </Box>
                            <Box
                                sx={{
                                    color: "#4B566",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    py: 1,
                                }}
                            >
                                <HomeIcon fontSize="small" />
                                <Typography
                                    variant="subtitle2"
                                    color={"#4B566B"}
                                >
                                    Home
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    color: "#4B566",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    py: 1,
                                }}
                            >
                                <WhatshotIcon fontSize="small" />
                                <Typography
                                    variant="subtitle2"
                                    color={"#4B566B"}
                                >
                                    Popular Products
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    color: "#4B566",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    py: 1,
                                }}
                            >
                                <TrendingUpIcon fontSize="small" />
                                <Typography
                                    variant="subtitle2"
                                    color={"#4B566B"}
                                >
                                    Trending Products
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    color: "#4B566",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    py: 1,
                                }}
                            >
                                <ListAltIcon fontSize="small" color="red" />
                                <Typography
                                    variant="subtitle2"
                                    color={"#4B566B"}
                                >
                                    All Products
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {/* Part2 */}
                            <Box
                                className="category_title"
                                sx={{ padding: "16px 0 10px 0" }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    component={"h5"}
                                >
                                    Top Categories
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop: "5px",
                                        marginBottom: "15px",
                                        borderBottomWidth: "2px",
                                        borderBottomStyle: "dashed",
                                        borderBottomColor: "#BE7374",
                                    }}
                                ></Box>
                            </Box>
                            {title2.map(({ title, icon }) => {
                                return (
                                    <Box
                                        key={uuidv4()}
                                        sx={{
                                            color: "#4B566",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            py: 1,
                                        }}
                                    >
                                        {icon}
                                        <Typography
                                            variant="subtitle2"
                                            color={"#4B566B"}
                                        >
                                            {title}
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </BoxWrap>
    );
};

export default Navbar;
