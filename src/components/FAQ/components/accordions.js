import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionWrapper } from "../styles";
import { AccordionsTitle, StyledAccordion } from "./styles";

export const Accordions = (props) => {
  return (
    <AccordionWrapper>
      <AccordionsTitle>
        {props.title ? props.title : "Frequently Asked Questions"}
      </AccordionsTitle>
      {props.items?.map((item, index) => (
        <AccordionItem
          title={item.title}
          desc={item.desc}
          index={index}
          key={item.title}
          length={props.items?.length}
        />
      ))}
    </AccordionWrapper>
  );
};
const AccordionItem = (props) => {
  const { index, length } = props;
  // we want the border radius to be 18px for the first and last accordion
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        // sx={{
        //   borderTopLeftRadius: index === 0 ? "10px" : "0px",
        //   borderTopRightRadius: index === 0 ? "10px" : "0px",
        //   borderBottomLeftRadius: index === length ? "10px" : "0px",
        //   borderBottomRightRadius: index === length ? "10px" : "0px",
        // }}
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.desc}</Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};
