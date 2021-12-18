import React, { useState, useRef } from "react";
import { Box, Button, Heading, Grommet } from "grommet";
import { grommet } from "grommet";
import styled from "styled-components";
import scrollToComponent from "react-scroll-to-component";

// icons
import { Sun, Moon } from "grommet-icons";

// custom theme stuff
import { customTheme } from "./theme";
import { deepMerge } from "grommet/utils";
const theme = deepMerge(grommet, customTheme);

//sections
import { About } from "./About";
import { Projects } from "./Projects";

const AppBar = (props) => (
  <StickyBar
    tag="header"
    direction="row"
    align="center"
    background="brand"
    pad={{ left: "medium", right: "0px", vertical: "small" }}
    {...props}
  />
);

const StickyBar = styled(Box)`
  position: fixed;
  z-index: 20;
  width: 100%;
`;

export function App() {
  const [navState, setNavSate] = useState(0);
  const [themeMode, setThemeMode] = useState("dark");

  const AboutSection = useRef(null);
  const ProjectSection = useRef(null);
  const ResumeSection = useRef(null);
  const ContactSection = useRef(null);

  const NavButton = (props) => (
    <Button
      {...props}
      primary={navState == props.num}
      onClick={() => {
        setNavSate(props.num);
        scrollToComponent(props.refSection.current, {
          offset: -70,
          align: "top",
          duration: 800,
        });
      }}
      focusIndicator={false}
    />
  );

  return (
    <LongGrommet theme={theme} themeMode={themeMode}>
      <AppBar>
        <Heading level="2" margin="none">
          Trent Slutzky
        </Heading>
        <Box flex="grow" />
        <NavButton num={0} label="About" refSection={AboutSection} />
        <NavButton num={1} label="Projects" refSection={ProjectSection} />
        <NavButton num={2} label="Resume" refSection={ResumeSection} />
        <NavButton num={3} label="Contact" refSection={ContactSection} />
        <Button
          icon={themeMode == "light" ? <Sun /> : <Moon />}
          onClick={() => {
            setThemeMode(themeMode == "light" ? "dark" : "light");
          }}
        />
      </AppBar>
      <Box background={{ light: "#fff", dark: "#181b28" }}>
        <TopBarGap />
        <section ref={AboutSection} />
        <About />
        <section ref={ProjectSection} />
        <Projects />
        <section ref={ResumeSection} />
        <section ref={ContactSection} />
      </Box>
    </LongGrommet>
  );
}

const LongGrommet = styled(Grommet)`
  height: 50000px;
`;

const TopBarGap = styled(Box)`
  height: 70px;
`;
