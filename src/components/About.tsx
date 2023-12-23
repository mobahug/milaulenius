import {
  Container,
  Typography,
  Grid,
  Link,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { PortfolioHeader } from './Header';
import { grey } from '@mui/material/colors';
import { PortfolioFooter } from './Footer';
import React from 'react';

const color = grey[500];

export const About: React.FC = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <PortfolioHeader />
      <Container maxWidth="lg" sx={{ pt: isSmallScreen ? 10 : 20 }}>
        <Grid container spacing={5} sx={{ align: 'center' }}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              textAlign="left"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'opacity 1.5s, transform 1.5s',
              }}
            >
              Hey, I'm Mila Ulenius. I am a cloth & fashion designer based in
              Espoo, Finland.
              <br />
              <br />
              Beyond designing unique fashion pieces, we oversee projects from
              inception to completion, from initial concepts to the final
              presentation of the collections.
              <br />
              <br />
              You can contact me at{' '}
              <Link color={color} href="mailto:milau97@gmail.com">
                milau97@gmail.com
              </Link>
              .{/* Wrapped email in a Link */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="../../public/mila_ulenius_portfolio.jpg"
              alt="Mila Ulenius"
              style={{
                borderRadius: '2%',
                width: '100%',
                maxWidth: '500px',
                aspectRatio: '1/1',
                objectFit: 'cover',
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 1.5s, transform 1.5s',
              }}
              onLoad={() => setIsLoaded(true)}
            />
          </Grid>
        </Grid>
      </Container>
      <PortfolioFooter />
    </>
  );
};
