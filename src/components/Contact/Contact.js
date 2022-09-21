import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ContactStyles';

const data = [
];

const Contact = () => (
  <Section>
    <SectionTitle>Contact</SectionTitle>
    <SectionText>I'd Love to Hear From You</SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Contact;
