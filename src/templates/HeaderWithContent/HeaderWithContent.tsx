import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "components/DropdownMenu";

import { Button } from "components/Button";
import { FormattedMessage } from "react-intl";
import { Header } from "components/Header";
import { IconButton } from "components/IconButton";
import { Languages } from "icons/LanguagesMenu";
import { Link } from "components/Link";
import { Logo } from "icons/Logo";
import { useLocale } from "hooks/useLocale";

const HeaderWithContent = () => {
  const { changeLocale, SupportedLanguages } = useLocale();

  return (
    <Header logo={<Logo />}>
      <Link href="#about">
        <FormattedMessage id="header.about" />
      </Link>
      <Link href="#career">
        <FormattedMessage id="header.career" />
      </Link>
      <Link href="#now">
        <FormattedMessage id="header.now" />
      </Link>
      <Link href="#contact">
        <FormattedMessage id="header.contact" />
      </Link>
      <Button>
        <FormattedMessage id="header.resume" />
      </Button>
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Change language" icon={<Languages />} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => changeLocale(SupportedLanguages.ENGLISH)}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => changeLocale(SupportedLanguages.PORTUGUESE)}
          >
            Português
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => changeLocale(SupportedLanguages.SPANISH)}
          >
            Español
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => changeLocale(SupportedLanguages.FRENCH)}
          >
            Français
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </Header>
  );
};

export default HeaderWithContent;
