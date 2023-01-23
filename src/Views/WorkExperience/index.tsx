import React from 'react';
import {
  CompanyContainer,
  CompanyWhiteLogo,
  CompanyLogo,
  ExperienceContainer,
  Highlight,
  JobDate,
  JobDetails,
  JobTitle,
  RoleDescription,
  TechLogo,
  TechnicalStack,
  TechnicalStackLabel,
  Title,
  WorkXP,
  Spaceship,
} from './styles';

const Experience = () => (
  <ExperienceContainer>
    <Spaceship alt="" src={process.env.PUBLIC_URL + '/img/spaceship.png'} />

    <Title>Work History</Title>

    <WorkXP>
      <CompanyContainer>
        <CompanyLogo alt="Disney" src={process.env.PUBLIC_URL + '/img/disney.svg'} />

        <RoleDescription>
          My mission was at Disneyland Paris formerly Euro Disney Resort, is an entertainment resort
          in Chessy, France, a town located 32 km (20 mi) east of the centre of Paris. It
          encompasses two theme parks, many resort hotels, Disney Nature Resorts, a shopping,
          dining, and entertainment complex, and a golf course, in addition to several additional
          recreational and entertainment venues. Disneyland Paris made up of several business
          sectors and different teams, this entertainment group targeting individuals and businesses
          (B2B) I have integrated two teams (Rasta & Rockett), which are made up of several
          Front-End & Back-End developers. I participated in the maintenance and development of the
          site <a href="https://www.disneylandparis.com/en-gb/">disneylandparis.com</a>
          <br></br>
          <br></br>
          Main tasks:
          <br></br>
          Project refactoring with <Highlight>React Hooks</Highlight> and
          <Highlight> React Context API</Highlight>
          <br></br>
          Optimization of Code performance by reducing complexity
          <br></br>
          Replacement and improvement of SASS style structure with
          <Highlight> styled-components</Highlight>
          <br></br>
          Improved application security through front application hacking sessions
          <br></br>
          Improvement and reduction of business rules on the front end application
          <br></br>
          Participation in the delivery of releases and production meetings
          <br></br>
          Development of modular components with ReactJS and Redux
          <br></br> Migrating the whole app to <Highlight>NextJS</Highlight>
          <br></br>Loading atomic components on the fly with NextJS and Dynamic Imports Design of
          the technical overhaul of the legacy specifications by atomic component
          <br></br>Participation in internal Disney workshops to improve the development of the
          application
        </RoleDescription>
      </CompanyContainer>

      <JobDetails>
        <JobTitle>Full Stack Engineer React | NextJS</JobTitle>
        <JobDate>January 2020 - Present</JobDate>

        <TechnicalStackLabel>Tech Stack:</TechnicalStackLabel>
        <TechnicalStack>
          <TechLogo alt="Javascript" src={process.env.PUBLIC_URL + '/img/js.svg'} />
          <TechLogo alt="ReactJS" src={process.env.PUBLIC_URL + '/img/react.svg'} />
          <TechLogo alt="NextJS" src={process.env.PUBLIC_URL + '/img/nextjs.svg'} />
          <TechLogo alt="Typescript" src={process.env.PUBLIC_URL + '/img/ts.svg'} />
          <TechLogo alt="NodeJS" src={process.env.PUBLIC_URL + '/img/node.svg'} />
          <TechLogo alt="Graphql" src={process.env.PUBLIC_URL + '/img/graphql.svg'} />
          <TechLogo alt="Docker" src={process.env.PUBLIC_URL + '/img/docker.svg'} />
          <TechLogo alt="AWS" src={process.env.PUBLIC_URL + '/img/aws.svg'} />
          <TechLogo alt="Github" src={process.env.PUBLIC_URL + '/img/github.svg'} />
          <TechLogo alt="jenkins" src={process.env.PUBLIC_URL + '/img/jenkins.svg'} />
          <TechLogo alt="jest" src={process.env.PUBLIC_URL + '/img/jest.svg'} />
          <TechLogo alt="redux" src={process.env.PUBLIC_URL + '/img/redux.svg'} />
          <TechLogo
            alt="Styled components"
            src={process.env.PUBLIC_URL + '/img/styled-components.svg'}
          />
        </TechnicalStack>
      </JobDetails>
    </WorkXP>

    <WorkXP>
      <CompanyContainer>
        <CompanyLogo alt="AXA" src={process.env.PUBLIC_URL + '/img/axa.svg'} />

        <RoleDescription>
          My mission at AXA was to update and maintain the main website{' '}
          <a href="https://www.axa.fr/">axa.fr</a>
          <br></br>I joined two teams, which are made up of several Front and Back developers
          <br></br>
          <br></br>
          Main tasks:
          <br></br>
          <br></br> Development of atomic components for{' '}
          <Highlight>AEM (Adobe Experience Manager)</Highlight>
          <br></br> Development of generic forms for the creation of quotes with{' '}
          <Highlight>JS and Redux</Highlight>
          <br></br> Loading atomic components on the fly thanks to <Highlight>Webpack </Highlight>{' '}
          Code Splitting
          <br></br> Design of the technical overhaul of legacy quotes in atomic component
          <br></br> Integration of the Payline cash register system for home quotes
          <br></br> Participation in AXA internal workshops
          <br></br> Technical presentation of the <Highlight>blockchain</Highlight>, explanation of
          the <Highlight>Bitcoin</Highlight> and <Highlight>Ethereum</Highlight> Smart Contract
          protocol Project refactoring with{' '}
        </RoleDescription>
      </CompanyContainer>

      <JobDetails>
        <JobTitle>Front End Engineer</JobTitle>
        <JobDate>October 2018 - December 2019</JobDate>

        <TechnicalStackLabel>Tech Stack:</TechnicalStackLabel>
        <TechnicalStack>
          <TechLogo alt="Javascript" src={process.env.PUBLIC_URL + '/img/js.svg'} />
          <TechLogo alt="ReactJS" src={process.env.PUBLIC_URL + '/img/react.svg'} />
          <TechLogo alt="Java" src={process.env.PUBLIC_URL + '/img/java.svg'} />
          <TechLogo alt="Typescript" src={process.env.PUBLIC_URL + '/img/ts.svg'} />
          <TechLogo alt="Less" src={process.env.PUBLIC_URL + '/img/less.svg'} />
          <TechLogo alt="Azure" src={process.env.PUBLIC_URL + '/img/azure.svg'} />
          <TechLogo alt="jest" src={process.env.PUBLIC_URL + '/img/jest.svg'} />
          <TechLogo alt="redux" src={process.env.PUBLIC_URL + '/img/redux.svg'} />
          <TechLogo
            alt="Adobe Experience Manager"
            src={process.env.PUBLIC_URL + '/img/adobe.svg'}
          />
        </TechnicalStack>
      </JobDetails>
    </WorkXP>

    <WorkXP>
      <CompanyContainer>
        <CompanyWhiteLogo alt="Neopixl" src={process.env.PUBLIC_URL + '/img/neopixl.png'} />

        <RoleDescription>
          Neopixl, a subsidiary of the Smile group, is an expert studio in the mobile digital field.
          In response to a customer request, Neopixl has developed an{' '}
          <Highlight>iOS and Android</Highlight>
          mobile application that allows users to create, share and participate in events. It also
          allows room reservations thanks to an integrated calendar. Finally, it embeds instant
          messaging with private and public sessions. I joined a team of 20 web and mobile
          developers as an intern Front End developer. I was responsible for developing :<br></br>
          <br></br>The application management API, serving the web and mobile fronts.
          <br></br>The instant messaging session and message management API
          <br></br>Mobile application
          <br></br>Prototypes as part of feasibility studies on various customer projects
          <br></br>
          Main tasks:
          <br></br>
          <br></br> Development of an API with <Highlight>Directus</Highlight> which manages both
          the data for the Back Office and the mobile application
          <br></br> Development of an API that manages messages & sessions for instant messaging
          with <Highlight>Socket IO and Redis</Highlight>
          <br></br> Development of a hybrid mobile application with <Highlight>Ionic</Highlight>{' '}
          which will be the platform used by users.
          <br></br> Development of mobile prototypes (R&D):
          <br></br> Navigation application on iOS using the <Highlight>mapbox</Highlight> library
          <br></br> Responsive web application for mobile with Angular, involving the scanning of QR
          Codes from the browser using ngx-scanner
          <br></br> Constant discussions in autonomy with the Design team for the front line.
        </RoleDescription>
      </CompanyContainer>

      <JobDetails>
        <JobTitle>Mobile Developer</JobTitle>
        <JobDate>January 2018 - August 2018</JobDate>

        <TechnicalStackLabel>Tech Stack:</TechnicalStackLabel>
        <TechnicalStack>
          <TechLogo alt="Angular" src={process.env.PUBLIC_URL + '/img/angular.svg'} />
          <TechLogo alt="Javascript" src={process.env.PUBLIC_URL + '/img/js.svg'} />
          <TechLogo alt="PHP" src={process.env.PUBLIC_URL + '/img/php.svg'} />
          <TechLogo alt="ios" src={process.env.PUBLIC_URL + '/img/ios.svg'} />
          <TechLogo alt="android" src={process.env.PUBLIC_URL + '/img/android.svg'} />
          <TechLogo alt="swift" src={process.env.PUBLIC_URL + '/img/swift.svg'} />
          <TechLogo alt="bitbucket" src={process.env.PUBLIC_URL + '/img/bitbucket.svg'} />
        </TechnicalStack>
      </JobDetails>
    </WorkXP>
  </ExperienceContainer>
);

export default Experience;
