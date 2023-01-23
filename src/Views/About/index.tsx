import React from 'react';
import {
  Content,
  Highlight,
  AboutSection,
  Introduction,
  Name,
  Profile,
  ResumeBtn,
  Title,
} from './styles';

const About = () => (
  <AboutSection id="about">
    <Profile alt="profile" src={process.env.PUBLIC_URL + '/img/15091838.png'} />
    <Content>
      <Name>Michel Kansou</Name>
      <Title>JS Dev.</Title>
      {/* <hr /> */}
      <Introduction>
        <br></br>
        I'm a French full stack developer and interface hacker working with{' '}
        <Highlight>JavaScript</Highlight>,<Highlight>Typescript</Highlight>,{' '}
        <Highlight>React</Highlight>,<Highlight>NextJS and NodeJS</Highlight> to deliver exceptional
        customer experiences.
        <br></br>
        <br></br>I love to experiment with graphics and interactivity, I adapt at contributing to a
        highly collaborative work environment, finding solutions, and determining customer
        satisfaction.
        <br></br>
        <br></br>
        My work consists of a healthy mix of useful interface libraries and performance
        optimization.
      </Introduction>
      <ResumeBtn href={process.env.PUBLIC_URL + 'cv/Michel Kansou CV-EN.pdf'}>
        Download my Resume
      </ResumeBtn>
    </Content>
  </AboutSection>
);

export default About;
