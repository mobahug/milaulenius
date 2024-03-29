import './App.css';
import { AboutPage } from './components/aboutPage/AboutPage';
import { PortfolioLandingPage } from './components/landingPage/PortfolioLandingPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { CircularProgress, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import ProjectPage from './components/projectPage/ProjectPage';

const theme = createTheme({
  typography: {
    fontFamily: '"League Spartan", serif',
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/milaulenius" element={<PortfolioLandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />
    </>,
  ),
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isLoading ? (
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
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
