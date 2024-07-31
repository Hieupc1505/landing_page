"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "dark" },
                    style: {
                        fontSize: "0.875rem",
                        lineHeight: 1.71429,
                        minWidth: "64px",

                        color: "#fff",
                        backgroundColor: "#1C252E",

                        padding: "6px 12px",
                        borderRadius: "8px",
                        transition:
                            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        lineHeight: 1.71429,
                        textTransform: "unset",
                        minWidth: "64px",
                    },
                },
                {
                    props: { variant: "light" },
                    style: {
                        alignItems: "center",

                        position: "relative",
                        boxSizing: "border-box",

                        backgroundColor: "transparent",
                        cursor: "pointer",

                        fontWeight: 700,
                        fontSize: "0.875rem",
                        lineHeight: 1.71429,
                        textTransform: "unset",
                        minWidth: "64px",

                        outline: "0px",
                        margin: "0px",
                        textDecoration: "none",
                        padding: "5px 12px",
                        borderRadius: "8px",
                        transition:
                            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderImage: "initial",
                        borderColor: "rgb(145,158,171)",
                        color: "#1C252E",
                    },
                },
            ],
        },
        MuiTypography: {
            variants: [
                {
                    props: { variant: "fade" },

                    style: {
                        marginLeft: "8px",
                        display: "inline-block", // Assuming you want to display as inline-block
                        background:
                            "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.35),  rgba(0, 0, 0, 0.05))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundClip: "text",
                        color: "transparent",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    },
                },
            ],
        },
    },
    palette: {
        primary: {
            light: "#5BE49B",
            main: "#00A76F",
            dark: "#007867",
            darker: "#004B50",
            lighter: "#C8FAD6",
        },
        info: {
            lighter: "#CAFDF5",
            light: "#61F3F3",
            main: "#00B8D9",
            dark: "#006C9C",
            darker: "#003768",
        },
        secondary: {
            light: "#C684FF",
            main: "#8E33FF",
            dark: "#5119B7",
            darker: "#27097A",
        },
        typography: {
            main: "#1C252E",
        },
    },
});

theme.typography.custom = {
    color: "#1C252E",
};

export default theme;
