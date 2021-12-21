import React, { useState } from "react";
import styled from "styled-components";
import { Box, Avatar, Image, Heading, Button, Paragraph } from "grommet";

import { Mail, Instagram, Linkedin, Github, Archlinux } from "grommet-icons";

import { TopoBox } from "./CssBackgroundBoxes/TopoBox";
import { TextureBox } from "./CssBackgroundBoxes/TextureBox";

import trent_img from "./Images/trent.jpg";

export function About(props) {
  return (
    <MainBox
      direction="column"
      align="center"
      width="100%"
      pad={{ vertical: "xlarge" }}
    >
      <Box direction="row" align="center" height="80%">
      <CenterBox direction="row">
        <Box flex="grow" direction="column" align="center">
          <Box width="450px">
            <MeImage src={trent_img} />
          </Box>
        </Box>
        <Box basis="1/2" direction="column">
          <Heading level="2" margin="0">
            Hello! My name is Trent Slutzky.
          </Heading>
          <Paragraph size="large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>
          <Box direction="row">
            <Button icon={<Instagram />} />
            <Button icon={<Linkedin />} />
            <Button icon={<Github />} />
            <Button icon={<Archlinux />} />
            <Button icon={<Mail />} />
          </Box>
          <Paragraph size="large">Explore my portfolio below!</Paragraph>
        </Box>
      </CenterBox>
      </Box>
    </MainBox>
  );
}

const MainBox = styled(TopoBox)`
  height:100vh;
  min-height:800px;
`;

const MeImage = styled(Image)`
  border-radius: 10px;
`;

const CenterBox = styled(Box)`
  width: 100%;
  max-width: 1400px;
`;
