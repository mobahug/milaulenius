import { Container, Theme, useMediaQuery } from '@mui/material';
import { PortfolioHeader } from '../Header';
import { PortfolioFooter } from '../Footer';
import { Projects } from './Projects';

export const PortfolioLandingPage = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  return (
    <>
      <PortfolioHeader />
      <Container maxWidth="lg" sx={{ pt: isSmallScreen ? 10 : 20 }}>
        <Projects />
      </Container>
      <PortfolioFooter />
    </>
  );
};

export default PortfolioLandingPage;
