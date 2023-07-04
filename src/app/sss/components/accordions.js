// import * as React from "react";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { AccordionWrapper } from "../styles";
// import { AccordionsTitle, StyledAccordion } from "./styles";

// export const Accordions = (props) => {
//   return (
//     <AccordionWrapper>
//       <AccordionsTitle>
//         {props.title ? props.title : "Merak Edilenler"}
//       </AccordionsTitle>
//       {props.items?.map((item, index) => (
//         <AccordionItem
//           question={item.question}
//           answer={item.answer}
//           terms={item.terms}
//           expanded={item.id === props.expanded}
//           onChange={props.handleChange(item.id)}
//           key={item.id}
//           // length={props.items?.length}
//         />
//       ))}
//     </AccordionWrapper>
//   );
// };
// const AccordionItem = (props) => {
//   // const { index, length } = props;
//   // we want the border radius to be 18px for the first and last accordion
//   return (
//     <StyledAccordion expanded={props.expanded} onChange={props.onChange}>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel1a-content"
//         // sx={{
//         //   borderTopLeftRadius: index === 0 ? "10px" : "0px",
//         //   borderTopRightRadius: index === 0 ? "10px" : "0px",
//         //   borderBottomLeftRadius: index === length ? "10px" : "0px",
//         //   borderBottomRightRadius: index === length ? "10px" : "0px",
//         // }}
//       >
//         <Typography>{props.question}</Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>{props.answer}</Typography>
//       </AccordionDetails>
//     </StyledAccordion>
//   );
// };
