import "./App.css";
import { About } from "./components/About";
import { PortfolioBody } from "./components/Body";
import { PortfolioFooter } from "./components/Footer";
import { PortfolioHeader } from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: '"League Spartan", serif',
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/milaulenius"
        element={
          <>
            <PortfolioHeader />
            <PortfolioBody />
            <PortfolioFooter />
          </>
        }
      />
      <Route path="/about" element={<About />} />
    </>
  )
);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
