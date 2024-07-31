import Header from "@/pages/Minimal/component/header";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
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
