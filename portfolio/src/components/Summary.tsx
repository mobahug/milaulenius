import { Typography, Grid } from "@mui/material";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/system";

export const PortfolioSummary = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      pt={isSmallScreen ? 0 : 15}
      pb={isSmallScreen ? 5 : 25}
    >
      <Grid item xs={12}>
        <Typography variant={isSmallScreen ? "h5" : "h3"}>
          Mila Ulenius is a Finnish artist and clothing designer.
          <br />
          She is currently studying at the University of Applied Science.
        </Typography>
      </Grid>
    </Grid>
  );
};
