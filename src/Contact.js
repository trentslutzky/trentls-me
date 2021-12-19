import React, { useState } from "react";
import styled from "styled-components";
import { Box, Avatar, Image, Heading, Button, Paragraph } from "grommet";

export function Contact(props) {
  return (
    <MainBox
      direction="column"
      align="center"
      width="100%"
      pad={{ vertical: "xlarge" }}
    >
      <CenterBox direction="row">
      </CenterBox>
    </MainBox>
  );
}

const MainBox = styled(Box)`
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
