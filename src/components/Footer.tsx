import { Box, Typography, Container, Link } from '@mui/material';
import { grey } from '@mui/material/colors';

export const PortfolioFooter = () => {
  const color = grey[800];

  return (
    <Box component="footer" pt={20} pb={10}>
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          component="div"
          textAlign="center"
          gutterBottom
        >
          Mila Ulenius
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2023 Created by{' '}
          <Link
            href="https://github.com/mobahug"
            underline="none"
            color={color}
          >
            mobahug
          </Link>
          . All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
