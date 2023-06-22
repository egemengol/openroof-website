import { Button, Desc, Title, Wrapper } from "./styles";
import { browserHistory } from "../router/index";

export const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Desc>Aradığınız içeriği maalesef bulamadık</Desc>
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
