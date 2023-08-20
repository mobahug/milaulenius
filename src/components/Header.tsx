import { Box, Grid, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

export const PortfolioHeader = () => {
  const color = grey[800];

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
          p={5}
          direction="row"
          alignItems="center"
        >
          <Grid item xs={7} sm={10} justifyContent="flex-start">
            <MuiLink
              sx={{ fontFamily: "League Spartan", color: color }}
              component={RouterLink}
              to="/milaulenius"
              underline="none"
            >
              Mila Ulenius
            </MuiLink>
          </Grid>
          <Grid item xs={2} sm={1} sx={{ width: 20 }}>
            <MuiLink
              sx={{ fontFamily: "League Spartan", color: color }}
              component={RouterLink}
              to="/about"
              underline="none"
            >
              About
            </MuiLink>
          </Grid>
          <Grid item xs={3} sm={1}>
            <MuiLink
              sx={{ fontFamily: "League Spartan", color: color }}
              component={RouterLink}
              to="mailto:milau97@gmail.com"
              underline="none"
            >
              Contact
            </MuiLink>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
