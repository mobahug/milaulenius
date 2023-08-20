import { Container, Typography, Grid } from "@mui/material";
import { PortfolioHeader } from "./Header";

export const About: React.FC = () => {
  return (
    <>
      <PortfolioHeader />
      <Container maxWidth="lg" sx={{ pt: 20 }}>
        <Grid container spacing={5} sx={{ align: "center" }}>
          <Grid item xs={12} sm={6}>
            <Typography textAlign="left">
              Hey, I'm Mila Ulenius. I am a cloth & fashion designer based in
              Espoo, Finland. Beyond designing unique fashion pieces, we oversee
              projects from inception to completion, from initial concepts to
              the final presentation of the collections. You can contact me at
              milau97@gmail.com.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=248&fit=crop&auto=format"
              srcSet={`https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="Sink"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
