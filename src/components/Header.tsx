import { Box, Button, Grid, Paper, Theme, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";

export const PortfolioHeader = () => {
  const color = grey[800];
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: "transparent",
      }}
    >
      <Paper square elevation={0} sx={{ opacity: 0.9 }}>
        <Grid
          color={color}
          container
          spacing={1}
          p={isSmallScreen ? 2 : 5}
          direction="row"
          alignItems="center"
        >
          <Grid item xs={7} sm={10}>
            <Button
              component={RouterLink}
              to="/milaulenius"
              sx={{
                fontFamily: "League Spartan",
                color: color,
                textTransform: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
              disableElevation
              disableRipple
            >
              Mila Ulenius
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sm={1}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              component={RouterLink}
              to="/about"
              sx={{
                fontFamily: "League Spartan",
                color: color,
                textTransform: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
              disableElevation
              disableRipple
            >
              About
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
            sm={1}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              component={RouterLink}
              to="mailto:milau97@gmail.com"
              sx={{
                fontFamily: "League Spartan",
                color: color,
                textTransform: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
              disableElevation
              disableRipple
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
