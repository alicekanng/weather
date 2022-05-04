import { Grid } from "@mui/material";
import City from "./City";

export default function HomePage() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", background: "blue" }}
    >
      <Grid item sx={{ minWidth: "75%" }}>
        <City name="city1" details="details1" />
        <City name="city2" details="details2" />
      </Grid>
    </Grid>
  );
}
