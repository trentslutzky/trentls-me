import React, { useState } from "react";
import styled from "styled-components";
import { 
  Box, 
  Image, 
  Heading, 
  Paragraph,
} from "grommet";

//projects json file
import projects_data from './projects.json';

export function Projects(props) {
  return (
    <MainBox
      direction="column"
      align="center"
      width="100%"
    >
      <CenterBox direction="row">
        <Box flex="grow">test</Box>
        <Box basis="1/3" elevation="medium">
          {projects_data.projects.map((p)=>{
            return(
              <Box 
                pad="small" 
                key={p.name}
                border="bottom"
                hoverIndicator={true}
                focusIndicator={false}
                onClick={()=>{console.log(p.name)}}
              >
                <Heading 
                  size="small" 
                  margin={{vertical:"small"}}
                  level="3"
                >
                  {p.name}
                </Heading>
                <Paragraph 
                  fill
                  margin={{vertical:"small"}}
                >
                  {p.desc}
                </Paragraph>
              </Box>
            )
          })}
        </Box>
      </CenterBox>
    </MainBox>
  );
}

const MainBox = styled(Box)`
`;

const MeImage = styled(Image)`
  border-radius: 10px;
`;

const CenterBox = styled(Box)`
  width: 100%;
  height: 87vh;
`;
