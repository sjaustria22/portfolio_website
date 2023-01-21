import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nonpadding>
    <LeftSection>
      <SectionTitle main center>
        Hello ;)
      </SectionTitle>
      <SectionText>
      This is a sample portfolio website. I code simple things, and I love what I do.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
