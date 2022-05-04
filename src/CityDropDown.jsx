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

const formatString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function CityDropDown({ name, details }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore sx={{ color: "black", padding: "0px 10px" }} />}
      >
        <Grid container direction="row" justifyContent="space-between">
          <Typography>{name}</Typography>
          <Typography>{`${details.temp} °F`}</Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          <Stack direction="row">
            <Thermostat sx={{ paddingRight: "20px" }} />
            <Typography>{`${details.max} / ${details.min} °F`}</Typography>
          </Stack>
          <Stack container direction="row">
            <Air sx={{ paddingRight: "20px" }} />
            <Typography>{`${details.wind} m/s`}</Typography>
          </Stack>
          <Stack container direction="row">
            <Cloud sx={{ paddingRight: "20px" }} />
            <Typography>{formatString(details.description)}</Typography>
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
