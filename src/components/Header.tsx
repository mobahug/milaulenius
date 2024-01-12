import {
  Box,
  Button,
  Grid,
  Paper,
  Theme,
  useMediaQuery,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItemText,
  ListItemButton,
  Link,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const HEADER_GRID_STYLE = {
  display: 'flex',
  justifyContent: 'flex-end',
};

export const PortfolioHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const greyishFontColor = grey[800];
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const drawer = (
    <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <Box
        sx={{
          width: 250,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="end"
          onClick={toggleDrawer}
          size="large"
          sx={{
            position: 'absolute',
            right: 18,
            top: 6,
          }}
        >
          <CloseIcon />
        </IconButton>
        <List sx={{ mt: 5 }}>
          <ListItemButton component={RouterLink} to="/milaulenius">
            <ListItemText sx={{ ml: 1 }} primary="Home" />
          </ListItemButton>
          <Divider variant="fullWidth" />
          <ListItemButton
            component={Link}
            href={
              process.env.NODE_ENV === 'production'
                ? '/milaulenius/Mila_Ulenius_CV_2024.pdf'
                : '/Mila_Ulenius_CV_2024.pdf'
            }
            target="_blank"
          >
            <ListItemText sx={{ ml: 1 }} primary="CV" />
          </ListItemButton>
          <Divider variant="fullWidth" />
          <ListItemButton component={RouterLink} to="/projects">
            <ListItemText sx={{ ml: 1 }} primary="Projects" />
          </ListItemButton>
          <Divider variant="fullWidth" />
          <ListItemButton component={RouterLink} to="/about">
            <ListItemText sx={{ ml: 1 }} primary="About" />
          </ListItemButton>
          <Divider variant="fullWidth" />
          <ListItemButton component={RouterLink} to="mailto:milau97@gmail.com">
            <ListItemText sx={{ ml: 1 }} primary="Contact" />
          </ListItemButton>
        </List>
      </Box>
    </div>
  );

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: 'transparent',
      }}
    >
      <Paper square elevation={0} sx={{ opacity: 0.9 }}>
        <Grid
          color={greyishFontColor}
          container
          spacing={1}
          p={isSmallScreen ? 2 : 5}
          direction="row"
          alignItems="center"
        >
          <Grid item xs={7} sm={7}>
            <Button
              component={RouterLink}
              to="/milaulenius"
              sx={{
                fontFamily: 'League Spartan',
                color: greyishFontColor,
                textTransform: 'none',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: grey[100],
                },
              }}
              disableElevation
              disableRipple
            >
              Mila Ulenius
            </Button>
          </Grid>
          {isSmallScreen ? (
            <Grid item xs={5} sm={3} sx={{ ...HEADER_GRID_STYLE }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer}
                sx={{ p: isSmallScreen ? 2 : 5 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                {drawer}
              </Drawer>
            </Grid>
          ) : (
            <>
              <Grid item xs={2} sm={1} sx={{ ...HEADER_GRID_STYLE }}>
                <Button
                  component={RouterLink}
                  to="/milaulenius"
                  sx={{
                    color: greyishFontColor,
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: grey[100],
                    },
                  }}
                  disableElevation
                  disableRipple
                >
                  Home
                </Button>
              </Grid>
              <Grid item xs={2} sm={1} sx={{ ...HEADER_GRID_STYLE }}>
                <Link
                  underline="none"
                  href={
                    process.env.NODE_ENV === 'production'
                      ? '/milaulenius/Mila_Ulenius_CV_2024.pdf'
                      : '/Mila_Ulenius_CV_2024.pdf'
                  }
                  target="_blank"
                >
                  <Button
                    sx={{
                      color: greyishFontColor,
                      textTransform: 'none',
                      backgroundColor: 'transparent',
                      '&:hover': {
                        backgroundColor: grey[100],
                      },
                    }}
                    disableElevation
                    disableRipple
                  >
                    CV
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={2} sm={1} sx={{ ...HEADER_GRID_STYLE }}>
                <Button
                  component={RouterLink}
                  to="/projects"
                  sx={{
                    color: greyishFontColor,
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: grey[100],
                    },
                  }}
                  disableElevation
                  disableRipple
                >
                  Projects
                </Button>
              </Grid>
              <Grid item xs={2} sm={1} sx={{ ...HEADER_GRID_STYLE }}>
                <Button
                  component={RouterLink}
                  to="/about"
                  sx={{
                    color: greyishFontColor,
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: grey[100],
                    },
                  }}
                  disableElevation
                  disableRipple
                >
                  About
                </Button>
              </Grid>
              <Grid item xs={1} sm={1} sx={{ ...HEADER_GRID_STYLE }}>
                <Button
                  component={RouterLink}
                  to="mailto:milau97@gmail.com"
                  sx={{
                    fontFamily: 'League Spartan',
                    color: greyishFontColor,
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: grey[100],
                    },
                  }}
                  disableElevation
                  disableRipple
                >
                  Contact
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};
