import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import { ExpandMore, Thermostat, Cloud, Air } from "@mui/icons-material";
import React from "react";

const formatString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const iconStyle = {
  paddingRight: "20px",
  color: "white",
};

interface DropDownProps {
  name: string;
  details: any;
}

export default function CityDropDown({ name, details }: DropDownProps) {
  return (
    <Accordion sx={{ backgroundImage: "url(/imgs/clouds.jpg)" }}>
      <AccordionSummary
        expandIcon={<ExpandMore sx={{ color: "black", padding: "0px 10px" }} />}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h2">{name}</Typography>
          <Typography variant="h6">{`${details.temp} °F`}</Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          <Stack direction="row">
            <Thermostat sx={iconStyle} />
            <Typography>{`${details.max} / ${details.min} °F`}</Typography>
          </Stack>
          <Stack direction="row">
            <Air sx={iconStyle} />
            <Typography>{`${details.wind} m/s`}</Typography>
          </Stack>
          <Stack direction="row">
            <Cloud sx={iconStyle} />
            <Typography>{formatString(details.description)}</Typography>
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
