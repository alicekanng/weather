import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default function City({ name, details }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore sx={{ color: "black" }} />}>
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
