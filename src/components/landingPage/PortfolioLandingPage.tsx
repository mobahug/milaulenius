import { Container, Theme, useMediaQuery } from '@mui/material';
import PortfolioImages from './Images';
import { PortfolioSummary } from './Summary';
import { PortfolioHeader } from '../Header';
import { PortfolioFooter } from '../Footer';
import { ScrollToTop } from '../../utilities';

export const PortfolioLandingPage = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  return (
    <>
      <ScrollToTop />
      <PortfolioHeader />
      <Container maxWidth="lg" sx={{ pt: isSmallScreen ? 10 : 20 }}>
        <PortfolioSummary />
        <PortfolioImages />
      </Container>
      <PortfolioFooter />
    </>
  );
};
