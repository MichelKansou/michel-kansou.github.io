import React, { useState } from 'react';
import { StyledHeader, Hamburger, NavBar, Menu, Link } from './styles';

const NavigationMenu = () => {
  const [activeRM, setActiveRM] = useState(false);

  return (
    <StyledHeader isActive={activeRM}>
      <Hamburger aria-expanded={activeRM} onClick={() => setActiveRM(!activeRM)}>
        &#9776;
      </Hamburger>
      <NavBar isActive={activeRM}>
        <Menu>
          <Link>
            <a href="#about" onClick={() => setActiveRM(false)}>
              About
            </a>
          </Link>
          <Link>
            <a href="#work" onClick={() => setActiveRM(false)}>
              XP
            </a>
          </Link>
          <Link>
            <a href="#skills" onClick={() => setActiveRM(false)}>
              Skills
            </a>
          </Link>
          <Link>
            <a
              href="https://medium.com/@michel.kansou"
              target="_blank"
              onClick={() => setActiveRM(false)}
              rel="noreferrer"
            >
              Blog
            </a>
          </Link>
          {/* <Link>
            <a href="#contact" onClick={() => setActiveRM(false)}>
              Contact
            </a>
          </Link> */}
        </Menu>
      </NavBar>
    </StyledHeader>
  );
};

export default NavigationMenu;
