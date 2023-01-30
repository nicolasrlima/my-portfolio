import * as Tabs from "@radix-ui/react-tabs";

import {
  AboutContainer,
  PictureContainer,
  TAB_TRIGGER_CLASS,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "./About.styles";
import { FormattedMessage, useIntl } from "react-intl";

import AboutPicture from "assets/about-picture.png";
import Image from "next/image";
import { Typography } from "components/Typography";

const ABOUT_CATEGORIES: Array<"personal" | "professional"> = [
  "professional",
  "personal",
];

const About = () => {
  const { formatMessage } = useIntl();
  const pictureAlt = formatMessage({ id: "about.picture-alt" });
  const tablistAlt = formatMessage({
    id: "about.professional.tablist.label",
  });

  return (
    <AboutContainer id="about">
      <Typography variant="medium">
        <FormattedMessage id="about.title" />
      </Typography>
      <PictureContainer>
        <Image alt={pictureAlt} src={AboutPicture} />
      </PictureContainer>
      <TabsRoot defaultValue="professional">
        <TabsList aria-label={tablistAlt}>
          {ABOUT_CATEGORIES.map((category) => (
            <TabsTrigger key={`${category}-trigger`} value={category}>
              <Typography className={TAB_TRIGGER_CLASS} variant="subtitle">
                <FormattedMessage id={`about.${category}.tab.label`} />
              </Typography>
            </TabsTrigger>
          ))}
        </TabsList>

        {ABOUT_CATEGORIES.map((category) => (
          <TabsContent key={`${category}-content`} value={category}>
            <Typography color="subdued" variant="small">
              <FormattedMessage id={`about.${category}.subtitle`} />
            </Typography>
            <Typography color="subdued" variant="body">
              <FormattedMessage id={`about.${category}.content`} />
            </Typography>
          </TabsContent>
        ))}
      </TabsRoot>
    </AboutContainer>
  );
};

export default About;
