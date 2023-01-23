import styled from 'styled-components';

export const FavoriteStackContainer = styled.div`
  max-width: 942px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  padding: 0 32px;
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
    background: #cd90ac;
  }
`;

export const TechLogo = styled.img`
  max-width: 80px;
  height: 80px;
  padding: 16px;
  background-color: #1c1d26;
  margin-right: 16px;
`;

export const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width 400px;
`;

export const TechItem = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 16px;

  @media only screen and (max-width: 904px) {
    width: 100%;
  }
`;
export const TechLabel = styled.p`
  font-size: 20px;
  color: #9fa2bc;
`;
