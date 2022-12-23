import { FormattedMessage } from "react-intl";
import { Link } from "components/Link";
import { Button } from "components/Button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "components/DropdownMenu";
import { IconButton } from "components/IconButton";
import { Languages } from "icons/LanguagesMenu";
import { useLocale } from "hooks/useLocale";

const HeaderContent = () => {
  const { changeLocale, SupportedLanguages } = useLocale();

  return (
    <>
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
    </>
  );
};

export default HeaderContent;
