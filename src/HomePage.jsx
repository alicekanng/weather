import { Grid } from "@mui/material";
import CityDropDown from "./CityDropDown";

const data = require("./data.json");

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
