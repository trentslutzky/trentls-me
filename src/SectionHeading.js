import React, { useState } from "react";
import styled from "styled-components";
import { Box, Avatar, Image, Heading, Paragraph } from "grommet";

export function SectionHeading(props) {
  let title = props.title==null?"":props.title
  return (
    <Container direction="column" align="center" width="100%" elevation="small">
      <HeadingBox pad={{ horizontal:"medium",vertical:"none" }}>
        <Heading level="2" margin={{vertical:"small"}}>{title}</Heading>
      </HeadingBox>
    </Container>
  );
}

const Container = styled(Box)`
  z-index:10;
`;

const HeadingBox = styled(Box)`
  width: 100%;
`;
