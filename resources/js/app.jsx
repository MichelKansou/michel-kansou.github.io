import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import NavigationMenu from './Views/NavigationMenu.jsx';
import Home from './Views/Home.jsx';
import PageContents from './Views/PageContents.jsx';
import Footer from './Views/Footer.jsx';
import PageLoader from './Components/PageLoader.jsx';

import English from 'locales/EN-en.json';
import French from 'locales/FR-fr.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trans: English,
            loading: true
        };
        ReactGA.initialize('UA-69121322-1');
      }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1313);
    }

    handleClick( language ) {
        if ( language == 'FR' ){
            this.setState({
                trans: French
            });
        }
        else {
            this.setState({
                trans: English
            });
        }
    }

    render() {
        const translation = this.state.trans;
        return (
            <div className='container'>
                <PageLoader loading={this.state.loading}>
                    <NavigationMenu trans={translation} handleClick={this.handleClick} />
                    <Home trans={translation} />
                    <PageContents trans={translation} />
                    <Footer trans={translation} />
                </PageLoader>
            </div>
        );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
