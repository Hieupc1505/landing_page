import Header from "@/pages/Minimal/component/header";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import theme from "../../app/theme";
import LayoutMinimal from "@/pages/Minimal/layout";
export default function Minimal() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Header />
                <LayoutMinimal />
            </Box>
        </ThemeProvider>
    );
}
