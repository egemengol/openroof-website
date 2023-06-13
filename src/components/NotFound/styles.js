import { styled } from "@mui/material";

export const Wrapper = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled("div")`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #ce6d29;
`;
export const Desc = styled("div")`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  letter-spacing: 0.04em;
  color: #ce6d29;
`;
export const Button = styled("button")`
  margin-top: 30px;
  padding-top: 11px;
  padding-bottom: 11px;
`;
