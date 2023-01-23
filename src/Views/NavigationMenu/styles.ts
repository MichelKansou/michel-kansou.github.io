import styled, { css } from 'styled-components';

interface NavBarProps {
  readonly isActive: boolean;
}

export const StyledHeader = styled.header<NavBarProps>`
  width: 100%;
  height: 80px;
  z-index: 21000000;
  position: sticky;
  top: 0;
  background-color: #171821;
  opacity: 0.8;

  ${props =>
    props.isActive &&
    css`
      @media only screen and (max-width: 904px) {
        position: fixed;
        height: 100%;
        opacity: 1;
      }
    `}
`;

export const Hamburger = styled.button`
  display: none;
  @media only screen and (max-width: 904px) {
    display: flex;
    background: transparent;
    border: none;
    color: white;
    font-size: 48px;
    margin-left: auto;
    margin-right: 8px;
  }
`;

export const NavBar = styled.nav<NavBarProps>`
  display: block;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 904px) {
    display: ${props => (props.isActive ? 'block' : 'none')};
    position: relative;
  }
`;

export const Link = styled.li`
  a  {
    &:hover {
      color: rgb(175 124 213);
      text-decoration: none;
    }
    color: white;
    font-size: 24px;
  }

  @media only screen and (max-width: 904px) {
    a  {
      font-size: 32px;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  max-width: 942px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 904px) {
    flex-direction: column;
    justify-content: start;
    margin-left: auto;
    max-width: 200px;
    margin-top: 24px;
    margin-right: 40px;
  }

  ${Link} {
    margin-left: 64px;
    &:first-child {
      margin-left: 0;
    }

    @media only screen and (max-width: 904px) {
      margin-left: 0;
      width: 100%;
      a {
        text-align: left;
      }
    }
  }
`;
