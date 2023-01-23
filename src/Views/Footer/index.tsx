import React from 'react';
import { DownloadBtn, LinkContainer, StyledFooter } from './styles';

const Footer = () => (
  <StyledFooter>
    <p>
      <i className="fa fa-code" /> with <i className="fa fa-heart" /> © 2023 Michel Kansou.
    </p>

    <DownloadBtn href={process.env.PUBLIC_URL + 'cv/Michel Kansou CV-EN.pdf'}>
      Download my Resume
    </DownloadBtn>

    <LinkContainer>
      <a className="link" href="mailto:michel.kansou@outlook.fr">
        <i className="fa fa-envelope-o" />
      </a>
      <a className="link" href="https://fr.linkedin.com/in/michel-kansou-4384a38a">
        <i className="fa fa-linkedin" />
      </a>
      <a className="link" href="http://stackoverflow.com/users/4724949/michel">
        <i className="fa fa-stack-overflow" />
      </a>
      <a className="link" href="https://github.com/MichelKansou">
        <i className="fa fa-github" />
      </a>
    </LinkContainer>
  </StyledFooter>
);

export default Footer;
