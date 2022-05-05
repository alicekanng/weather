import { Grid, Typography } from "@mui/material";
import CityDropDown from "./CityDropDown";
import data from "../data.json";
import React from "react";

const textItem = {
  paddingBottom: "20px",
};

interface City {
  main: any;
  id: number;
  name: string;
  wind: any;
  weather: any[];
}

function validateFields(obj: any): obj is City {
  return (
    "main" in obj &&
    "id" in obj &&
    "name" in obj &&
    "wind" in obj &&
    "weather" in obj
  );
}

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
        {data.map((city: any) => {
          if (validateFields(city)) {
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
          }
          return <></>;
        })}
      </Grid>
    </Grid>
  );
}
