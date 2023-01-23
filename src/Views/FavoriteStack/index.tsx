import React from 'react';
import { FavoriteStackContainer, StackList, TechItem, TechLabel, TechLogo, Title } from './styles';

const FavoriteStack = () => {
  return (
    <FavoriteStackContainer>
      <Title>Favorite tech stack</Title>

      <StackList>
        <TechItem>
          <TechLogo alt="Javascript" src={process.env.PUBLIC_URL + '/img/js.svg'} />
          <TechLabel>Javascript</TechLabel>
        </TechItem>
        <TechItem>
          <TechLogo alt="ReactJS" src={process.env.PUBLIC_URL + '/img/react.svg'} />
          <TechLabel>ReactJS</TechLabel>
        </TechItem>
        <TechItem>
          <TechLogo alt="NextJS" src={process.env.PUBLIC_URL + '/img/nextjs.svg'} />
          <TechLabel>NextJS</TechLabel>
        </TechItem>
        <TechItem>
          <TechLogo alt="Typescript" src={process.env.PUBLIC_URL + '/img/ts.svg'} />
          <TechLabel>Typescript</TechLabel>
        </TechItem>
        <TechItem>
          <TechLogo alt="NodeJS" src={process.env.PUBLIC_URL + '/img/node.svg'} />
          <TechLabel>Node.js</TechLabel>
        </TechItem>
        <TechItem>
          <TechLogo alt="Graphql" src={process.env.PUBLIC_URL + '/img/graphql.svg'} />
          <TechLabel>Graphql</TechLabel>
        </TechItem>
        <TechItem>
          <TechLogo alt="jest" src={process.env.PUBLIC_URL + '/img/jest.svg'} />
          <TechLabel>Jest</TechLabel>
        </TechItem>
        <TechItem>
          <TechLogo
            alt="Styled components"
            src={process.env.PUBLIC_URL + '/img/styled-components.svg'}
          />
          <TechLabel>Styled components</TechLabel>
        </TechItem>
      </StackList>
    </FavoriteStackContainer>
  );
};

export default FavoriteStack;
