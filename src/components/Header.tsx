import { Box, Grid, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

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
            <Typography variant="body1" component="div">
              Mila Ulenius12
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1} sx={{ width: 20 }}>
            <Typography variant="body1" component="div">
              About
            </Typography>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Typography variant="body1" component="div">
              Contact
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
