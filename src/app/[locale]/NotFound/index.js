import { Button, Desc, Title, Wrapper } from "./styles";
import { browserHistory } from "../router/index";
import {useTranslations} from 'next-intl';
export const NotFound = () => {
  const t = useTranslations('notfound');
  return (
    <Wrapper>
      <Title>404</Title>
      <Desc>{t('Aradığınız')}</Desc>
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
