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
import { CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          pt: 20,
        }}
        maxWidth="lg"
      >
        <CircularProgress color="inherit" />
      </Container>
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        {isLoading ? (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              pt: 20,
            }}
            maxWidth="lg"
          >
            <CircularProgress color="inherit" />
          </Container>
        ) : (
          <RouterProvider router={router} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
