import { Container } from "@mui/material";
import PortfolioImages from "./Images";
import { PortfolioSummary } from "./Summary";

export const PortfolioBody = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 20 }}>
      <PortfolioSummary />
      <PortfolioImages />
    </Container>
  );
};
