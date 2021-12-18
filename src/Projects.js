import React, { useState } from "react";
import styled from "styled-components";
import { Box, Avatar, Image, Heading, Paragraph } from "grommet";

export function Projects(props) {
  return (
    <Box direction="column" align="center" width="100%" elevation="medium">
      <HeadingBox pad={{ horizontal: "large" }}>
        <Heading level="2">Projects</Heading>
      </HeadingBox>
    </Box>
  );
}

const HeadingBox = styled(Box)`
  width: 100%;
  max-width: 1180px;
`;
