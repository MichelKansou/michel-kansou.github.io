import React from 'react';
import ReactDOM from 'react-dom';
import ga from 'react-google-analytics';
import NavigationMenu from './Views/NavigationMenu.jsx';
import Home from './Views/Home.jsx';
import PageContents from './Views/PageContents.jsx';
import Footer from './Views/Footer.jsx';
import PageLoader from './Components/PageLoader.jsx';

import English from 'locales/EN-en.json';
import French from 'locales/FR-fr.json';

const App = React.createClass({
    getInitialState: function() {
        return {
            trans: English,
            loading: true
        };
    },

    //TODO: Update French local
    // componentWillMount() {
    //     const browserLanguage = navigator.language;
    //     if (browserLanguage == 'fr-FR' || browserLanguage == 'fr') {
    //         this.setState({trans: French});
    //     }
    // },

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1313);
    },

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
    },
    render: function() {
        ga('create', 'UA-69121322-1', 'auto');
        ga('send', 'pageview');
        const GAInitiailizer = ga.Initializer;
        const translation = this.state.trans;

        return (
            <div className='container'>
                <PageLoader loading={this.state.loading}>
                    <NavigationMenu trans={translation} handleClick={this.handleClick} />
                    <Home trans={translation} />
                    <PageContents trans={translation} />
                    <Footer trans={translation} />
                </PageLoader>
                <GAInitiailizer />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
