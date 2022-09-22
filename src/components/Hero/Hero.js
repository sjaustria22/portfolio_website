import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nonpadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, I'm Shem ;)
      </SectionTitle>
      <SectionText>
      I design and code beautifully simple things, and I love what I do.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
