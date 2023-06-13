import React from "react";
import { Button, Desc, Title, Wrapper } from "./styles";
import { browserHistory } from "../../router";

export const NotFound = () => {
  return (
    <Wrapper>
      <Title>4ø4</Title>
      <Desc>Oops, No page found!</Desc>
      <a href="/">
        <Button
          onClick={() => browserHistory.push("/sss")}
          className="learn-more-button"
        >
          Back to home
        </Button>
      </a>
    </Wrapper>
  );
};
