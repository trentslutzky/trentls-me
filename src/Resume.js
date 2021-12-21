import React, { useState } from "react";
import styled from "styled-components";
import { Box, Avatar, Image, Heading, Button, Paragraph } from "grommet";

import resume from './resume.png';
import { TopoBox } from './CssBackgroundBoxes/TopoBox';

export function Resume(props) {
  return (
    <MainBox
      direction="column"
      align="center"
      width="100%"
      pad={{ vertical: "xlarge" }}
    >
      <CenterBox direction="column" align="center">
          <Box>
              <Image fit="contain" src={resume}/>
          </Box>
      </CenterBox>
    </MainBox>
  );
}

const MainBox = styled(TopoBox)`
  height:calc(100vh - 80px) !important;
  min-height:800px;
`;

const MeImage = styled(Image)`
  border-radius: 10px;
`;

const CenterBox = styled(Box)`
  width: 100%;
  max-width: 1400px;
`;
