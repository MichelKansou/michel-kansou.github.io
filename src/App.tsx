import React from 'react';
import NavigationMenu from './Views/NavigationMenu';
import About from './Views/About';
import PageContents from './Views/PageContents';
import Footer from './Views/Footer';
import { AppContainer, GlobalStyle } from './styles/styles';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <NavigationMenu />
      <About />
      <PageContents />
      <Footer />
    </AppContainer>
  );
}

export default App;
