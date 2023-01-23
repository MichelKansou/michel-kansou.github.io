import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  max-width: 942px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 904px) {
    padding: 0 32px;
  }
`;

export const Spaceship = styled.img`
  position: absolute;
  bottom: 0;
  left: 10px;
  @media only screen and (max-width: 1310px) {
    display: none;
  }
`;

export const Title = styled.h1`
  position: relative;
  font-size: 40px;
  margin-bottom: 32px;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 8px;
    height: 64px;
    left: -20px;
    background: #9a6ff1;
  }
`;

export const WorkXP = styled.div`
  display: flex;
  margin-bottom: 128px;

  @media only screen and (max-width: 904px) {
    flex-direction: column;
    margin-bottom: 64px;
  }
`;

export const CompanyContainer = styled.div`
  width: 100%;

  @media only screen and (max-width: 904px) {
    margin-bottom: 16px;
  }
`;

export const CompanyLogo = styled.img`
    max-width 200px;
    max-height: 80px;
    margin-bottom: 24px;
`;

export const CompanyWhiteLogo = styled(CompanyLogo)`
  background-color: white;
`;

export const JobTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 16px;
`;
export const JobDate = styled.p`
  font-style: italic;
`;

export const RoleDescription = styled.p`
  color: #9fa2bc;
  a {
    color: white;
  }
`;

export const JobDetails = styled.div`
  max-width: 30%;
  margin-left: 24px;

  @media only screen and (max-width: 904px) {
    max-width: 100%;
    margin-left: 0;
    padding: 0 32px;
  }
`;

export const Highlight = styled.strong`
  font-weight: bold;
  color: white;
`;

export const TechLogo = styled.img`
  max-width: 80px;
  padding: 16px;
  background-color: #1c1d26;
`;

export const TechnicalStackLabel = styled.p`
  margin-top: 20px;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const TechnicalStack = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
