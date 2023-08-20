import { Container, Typography, Grid, Link } from "@mui/material"; // Add Link import
import { PortfolioHeader } from "./Header";
import { grey } from "@mui/material/colors";
import { PortfolioFooter } from "./Footer";

const color = grey[500];

export const About: React.FC = () => {
  return (
    <>
      <PortfolioHeader />
      <Container maxWidth="lg" sx={{ pt: 20 }}>
        <Grid container spacing={5} sx={{ align: "center" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" textAlign="left">
              Hey, I'm Mila Ulenius. I am a cloth & fashion designer based in
              Espoo, Finland.
              <br />
              <br />
              Beyond designing unique fashion pieces, we oversee projects from
              inception to completion, from initial concepts to the final
              presentation of the collections.
              <br />
              <br />
              You can contact me at{" "}
              <Link color={color} href="mailto:milau97@gmail.com">
                milau97@gmail.com
              </Link>
              .{/* Wrapped email in a Link */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=496&fit=crop&auto=format"
              srcSet={`https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=496&fit=crop&auto=format&dpr=2 2x`}
              alt="Sink"
              style={{
                borderRadius: "2%",
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
              }} // Added styles here
            />
          </Grid>
        </Grid>
      </Container>
      <PortfolioFooter />
    </>
  );
};
