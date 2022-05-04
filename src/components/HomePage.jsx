import { Grid, Typography } from "@mui/material";
import CityDropDown from "./CityDropDown";
import data from "../data.json";

const textItem = {
  paddingBottom: "20px",
};

export default function HomePage() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", background: "#94B8EB" }}
    >
      <Grid item sx={textItem}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Welcome!
        </Typography>
      </Grid>
      <Grid item sx={textItem}>
        <Typography variant="h6">
          Click on a city below for more information.
        </Typography>
      </Grid>
      <Grid item sx={{ width: "50%", minWidth: "500px" }}>
        {data.map((city) => {
          const temperatures = city.main;
          return (
            <CityDropDown
              key={city.id}
              name={city.name}
              details={{
                temp: temperatures.temp,
                max: temperatures.temp_max,
                min: temperatures.temp_min,
                wind: city.wind.speed,
                description: city.weather[0].description,
              }}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
