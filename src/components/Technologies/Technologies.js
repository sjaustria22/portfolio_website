import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I've recently worked with a range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <br/>
          <ListTitle>jQuery</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <br/>
          <ListTitle>Bootstrap</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <br/>
          <ListTitle>React JS</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
