import { Container, Theme, useMediaQuery } from '@mui/material';
import PortfolioImages from './Images';
import { PortfolioSummary } from './Summary';

export const PortfolioBody = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  return (
    <Container maxWidth="lg" sx={{ pt: isSmallScreen ? 10 : 20 }}>
      <PortfolioSummary />
      <PortfolioImages />
    </Container>
  );
};
