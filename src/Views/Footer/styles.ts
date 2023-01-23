import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  color: white;
  font-size: 16px;
  max-width: 942px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  min-height: 128px;

  @media only screen and (max-width: 904px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LinkContainer = styled.div`
display flex;
  a {
    &:first-child {
        margin-left: 0;
    }
    margin-left: 16px;
    color: white;
  }
`;

export const DownloadBtn = styled.a`
  color: white;
`;
