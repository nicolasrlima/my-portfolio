import {
  AboutContainer,
  AboutContent,
  AboutDecorationDivider,
  AboutTitleContainer,
  PictureContainer,
  TAB_SLIDER_CLASS,
  TAB_TRIGGER_CLASS,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "./About.styles";
import type { AboutTabSliderDimensions, AboutTabs } from "./types";
import { FormattedMessage, useIntl } from "react-intl";
import { useMemo, useRef, useState } from "react";

import AboutPicture from "assets/about-picture.png";
import Image from "next/image";
import { Typography } from "components/Typography";
import { theme } from "styles/theme";

const ABOUT_CATEGORIES: Array<AboutTabs> = ["professional", "personal"];

const About = () => {
  const [selectedTabId, setSelectedTabId] = useState<AboutTabs>(
    ABOUT_CATEGORIES[0]
  );
  const tabsListRef = useRef<HTMLDivElement>(null);
  const { formatMessage } = useIntl();
  const pictureAlt = formatMessage({ id: "about.picture-alt" });
  const tablistAlt = formatMessage({
    id: "about.professional.tablist.label",
  });

  const getTabRelativeLeftDistance = (tab: Element) => {
    const tabAbsoluteLeftDistance = tab.getBoundingClientRect().left || 0;
    const tabListAbsoluteLeftDistance =
      tab.parentElement?.getBoundingClientRect().left || 0;
    return tabAbsoluteLeftDistance - tabListAbsoluteLeftDistance;
  };

  const getTabRelativeTopDistance = (tab: Element) => {
    const tabAbsoluteTopDistance = tab.getBoundingClientRect().top || 0;
    const tabListAbsoluteTopDistance =
      tab.parentElement?.getBoundingClientRect().top || 0;
    return tabAbsoluteTopDistance - tabListAbsoluteTopDistance;
  };

  const selectedTabDimensions = useMemo<AboutTabSliderDimensions>(() => {
    let filteredTab;
    if (tabsListRef.current) {
      const { children } = tabsListRef.current;
      filteredTab = Array.from(children).find(
        (_, index) =>
          children[index].getAttribute("data-value") === selectedTabId
      );
    }
    const left = filteredTab ? getTabRelativeLeftDistance(filteredTab) : 0;
    const top = filteredTab ? getTabRelativeTopDistance(filteredTab) : 0;
    const height = filteredTab ? filteredTab.clientHeight : 56;
    const width = filteredTab ? filteredTab.clientWidth : 82;

    return {
      left,
      height,
      top,
      width,
    };
  }, [tabsListRef, selectedTabId]);

  const isInMobileView = useMemo(() => {
    if (typeof window === "undefined") return false;
    const { innerWidth } = window;
    const { mobile } = theme.breakpoints;
    return innerWidth <= parseInt(mobile, 10);
  }, []);

  return (
    <AboutContainer id="about">
      <AboutTitleContainer>
        <Typography className="about__title" variant="medium">
          <FormattedMessage id="about.title" />
        </Typography>
        <AboutDecorationDivider />
      </AboutTitleContainer>
      <AboutContent>
        <PictureContainer>
          <Image alt={pictureAlt} src={AboutPicture} />
        </PictureContainer>
        <TabsRoot
          defaultValue={ABOUT_CATEGORIES[0]}
          orientation={isInMobileView ? "horizontal" : "vertical"}
          onValueChange={(e) => setSelectedTabId(e as AboutTabs)}
        >
          <TabsList
            aria-label={tablistAlt}
            left={selectedTabDimensions.left}
            height={selectedTabDimensions.height}
            ref={tabsListRef}
            top={selectedTabDimensions.top}
            width={selectedTabDimensions.width}
          >
            {ABOUT_CATEGORIES.map((category) => (
              <TabsTrigger
                data-value={category}
                key={`${category}-trigger`}
                value={category}
              >
                <Typography className={TAB_TRIGGER_CLASS} variant="subtitle">
                  <FormattedMessage id={`about.${category}.tab.label`} />
                </Typography>
              </TabsTrigger>
            ))}
            <div className={TAB_SLIDER_CLASS}></div>
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
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
