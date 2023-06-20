import { TextField, styled } from "@mui/material";

export const Wrapper = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  padding-left: 60px;
  padding-right: 60px;
  justify-content: start;
  @media (max-width: 380px) {
    padding: 20px;
  }
`;

export const Title = styled("h1")`
  font-family: "Readex Pro";
  font-style: normal;
  margin-top: 148px;
  font-weight: 600;
  font-size: 56px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  @media (max-width: 1024px) {
    font-size: 37px;
  }
  @media (max-width: 380px) {
    font-size: 32px;
  }
  color: #23372f;
`;
export const Desc = styled("div")`
  font-family: "Nunito";
  font-style: normal;
  margin-top: 32px;
  max-width: 800px;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  /* or 34px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #23372f;
`;
export const Input = styled(TextField)`
  max-width: 800px;
  margin-top: 32px;
  width: 100%;
  .MuiOutlinedInput-root {
    height: 56px;
    border-radius: 18px;
    &:hover fieldset {
      border-color: black;
    }
    &.Mui-focused fieldset {
      border: 1px solid black;
    }
    &.Mui-error fieldset {
      border-color: black;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: black;
  }

  font-weight: 400;
  font-size: 15px;
`;
export const AccordionWrapper = styled("div")`
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
export const AccordionsWrapper = styled("div")`
  width: 100%;
  margin-top: 60px;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  @media (max-width: 1160px) {
    flex-direction: column;
  }
`;
