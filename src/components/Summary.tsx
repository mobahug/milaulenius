import { Typography, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/system";
import React from "react";

export const PortfolioSummary = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

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
        <Typography
          variant={isSmallScreen ? "h5" : "h3"}
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: !isLoaded ? "translateY(-20px)" : "translateY(0)",
            transition: "opacity 1.5s, transform 1.5s",
          }}
        >
          Mila Ulenius is a Finnish artist and clothing designer.
          <br />
          She is currently studying at the University of Applied Science.
        </Typography>
      </Grid>
    </Grid>
  );
};
