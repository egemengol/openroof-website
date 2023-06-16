import React from "react";
import { Button, Desc, Title, Wrapper } from "./styles";
import { browserHistory } from "../../router";

export const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Desc>Aradığınız içeriği malesef bulamadık</Desc>
      {/* <a href="/">
        <Button
          onClick={() => browserHistory.push("/")}
          className="learn-more-button"
        >
          Anasayfa
        </Button>
      </a> */}
    </Wrapper>
  );
};
