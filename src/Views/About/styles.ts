import styled from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  padding: 128px 64px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 904px) {
    margin-right: 0;
    flex-direction: column;
    padding: 64px 32px;
  }
`;

export const Profile = styled.img`
  margin-right: 64px;
  max-width: 180px;
  background-color: #1c1d26;
  padding: 18px;
  @media only screen and (max-width: 904px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

export const Name = styled.h1`
  font-weight: light;
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Introduction = styled.p`
  color: #9fa2bc;
`;

export const Content = styled.div`
  position: relative;

  max-width: 940px;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 8px;
    height: 64px;
    left: -20px;
    background: #c2e9fb;
  }
`;

export const Highlight = styled.strong`
  color: white;
`;

export const ResumeBtn = styled.a`
  color: white;
`;
