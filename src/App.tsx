import "./App.css";
import { PortfolioBody } from "./components/Body";
import { PortfolioFooter } from "./components/Footer";
import { PortfolioHeader } from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: '"League Spartan", serif',
    // You can also specify other typography properties here
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PortfolioHeader />
        <PortfolioBody />
        <PortfolioFooter />
      </ThemeProvider>
    </>
  );
}

export default App;
