import { Accordion, styled } from "@mui/material";

export const StyledAccordion = styled(Accordion)`
  max-width: 500px;
  width: 100%;
  margin-bottom: 0px !important ;
  margin-top: 0px !important ;

  .MuiAccordionSummary-root {
    background-color: #e3d8ca;
  }
  .MuiAccordionDetails-root {
    background-color: #fff5e9;
  }
`;
export const AccordionsTitle = styled("div")`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.06em;
  margin-bottom: 20px;
  color: #23372f;
`;
