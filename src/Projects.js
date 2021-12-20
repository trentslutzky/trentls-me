import React, { useState } from "react";
import styled from "styled-components";
import { 
  Box, 
  Image, 
  Heading, 
  Carousel,
  Paragraph,
} from "grommet";

//projects json file
import projects_data from './projects.json';

export function Projects(props) {

  const [currentProject, setCurrentProject] = useState(projects_data.projects[0])

  return (
    <MainBox
      direction="column"
      align="center"
      width="100%"
    >
      <CenterBox direction="row">
        <Box basis="2/3" pad="none">
          <CarouselBG fill controls="selectors" play={10000}>
          {currentProject.images.map((i)=>{
            return(
              <Image src={"https://raw.githubusercontent.com/trentslutzky/trentls-me/main/src/Images/"+i}
              fill={true}
              fit="cover"
              />
            )
          })}
          </CarouselBG>
          <ProjectBox background="#00000096">
            <Heading 
              size="medium" 
              fill 
              textAlign="center"
              margin={{top:"large"}}
            >
              {currentProject.name}
            </Heading>
            <Box flex="grow"/>
            <Paragraph 
              size="large"
              fill 
              textAlign="center" 
              margin={{horizontal:"large",bottom:"xlarge"}}
            >
              {currentProject.desc}
            </Paragraph>
          </ProjectBox>
        </Box>
        <ProjectList basis="1/3"
          overflow={{vertical:"scroll"}}
          border="horizontal"
        >
          {projects_data.projects.map((p)=>{
            return(
              <ProjectListItem 
                overflow="visible"
                pad="small" 
                key={p.name}
                border="bottom"
                hoverIndicator={true}
                focusIndicator={false}
                onClick={()=>{
                  setCurrentProject(p);
                }}
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
                  size="small"
                  margin="none"
                >
                  {(p.desc.length > 100) ? p.desc.substr(0, 100-1) + '...' : p.desc}
                </Paragraph>
                <Paragraph 
                  fill
                  size="small"
                  margin={{top:"xsmall",bottom:"none"}}
                  textAlign="end"
                >
                  {p.dates}
                </Paragraph>
              </ProjectListItem>
            )
          })}
        </ProjectList>
      </CenterBox>
    </MainBox>
  );
}

const MainBox = styled(Box)`
`;

const CarouselBG = styled(Carousel)`
  position:relative;
`;

const CenterBox = styled(Box)`
  width: 100%;
  height: 87vh;
`;

const ProjectBox = styled(Box)`
  position:absolute;
  height:87%;
  width:66.6666%;
  pointer-events:none;
`;

const ProjectList = styled(Box)`
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const ProjectListItem = styled(Box)`
  min-height:unset;
`;
