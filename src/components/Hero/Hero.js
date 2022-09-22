import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nonpadding>
    <LeftSection>
      <SectionTitle main center>
        Shem Justice Ruzel Austria
      </SectionTitle>
      <SectionText>
        A Web Developer
      </SectionText>
      <Button onclick={() => window.location = 'https://www.docdroid.net/FuOsayx/cv-my-pdf'}>View CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;
