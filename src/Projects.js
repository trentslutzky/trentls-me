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

  const focusProjects = props.focusProjects;
  const [currentProject, setCurrentProject] = useState(projects_data.projects[0]);

  return (
    <MainBox
      direction="column"
      align="center"
      width="100%"
    >
      <CenterBox direction="row">
        <Box basis="2/3" pad="none">
          {currentProject.images&&
          <CarouselBG fill controls="selectors" play={4000}>
          {currentProject.images.map((i)=>{
            return(
              <Image key={i} src={"https://raw.githubusercontent.com/trentslutzky/trentls-me/main/src/Images/"+i}
                fit="cover"
              />
            )
          })}
          </CarouselBG>
          }
          <ProjectBox 
              border={{horizontal:"xsmall",right:"xsmall"}}
              direction="column"
              align="center"
          >
            <PBHeading 
              size="medium" 
              textAlign="center"
              margin={{top:"large"}}
            >
              {currentProject.name}
            </PBHeading>
            <Box flex="grow"/>
            {currentProject.desc&&
            <PBParagraph 
              size="large"
              fill 
              textAlign="center" 
              margin={{horizontal:"large",bottom:"xlarge"}}
            >
             {currentProject.desc}
            </PBParagraph>
            }
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
                key={p.id}
                border={
                    p.id==currentProject.id
                    ?[
                      {size:"30px",side:"left",color:"#6977ac"},
                      {size:"xsmall",side:"bottom"}
                    ]
                    :"bottom"
                }
                hoverIndicator={{background:{light:"light-1",dark:"dark-1",}}}
                focusIndicator={false}
                onClick={()=>{
                  focusProjects();
                  setCurrentProject(p);
                }}
              >
                <Heading 
                  truncate={true}
                  size="small" 
                  margin={{vertical:"small"}}
                  level="3"
                >
                  {p.name}
                </Heading>
                {p.desc&&
                <Paragraph 
                  fill
                  size="small"
                  margin="none"
                >
                  {(p.desc.length > 100) ? p.desc.substr(0, 100-1) + '...' : p.desc}
                </Paragraph>
                }
                {p.dates&&
                <Paragraph 
                  fill
                  size="small"
                  margin={{top:"xsmall",bottom:"none"}}
                  textAlign="end"
                >
                  {p.dates}
                </Paragraph>
                }
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
  height:calc(100vh - 135px) !important;
`;

const ProjectBox = styled(Box)`
  position:absolute;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.6491596638655462) 2%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 100%);
  height:calc(100vh - 135px) !important;
  width:66.6666%;
  pointer-events:none;
  color:white;
`;

const ProjectList = styled(Box)`
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const ProjectListItem = styled(Box)`
  min-height:unset;
  transition:all 0.25s;
`;

const PBParagraph = styled(Paragraph)`
  background:#000000a6;
  padding:10px;
`;

const PBHeading = styled(Heading)`
  background:#000000cc;
  padding:10px 30px 10px 30px;
`;
