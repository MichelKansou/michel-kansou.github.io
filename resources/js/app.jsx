import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import NavigationMenu from './Views/NavigationMenu.jsx';
import Home from './Views/Home.jsx';
import PageContents from './Views/PageContents.jsx';
import Footer from './Views/Footer.jsx';
import PageLoader from './Components/PageLoader.jsx';

import config from 'secret/firebaseConfig.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebase: {},
            loading: true
        };
        firebase.initializeApp(config);
    }
    componentDidMount() {
        return firebase.database().ref('/').once('value').then(function(snapshot) {
            this.setState({
                loading: false,
                firebase: snapshot.val()
            });
        }.bind(this));
    }

    render() {
        const firebase = this.state.firebase;
        return (
            <div className='container'>
                <PageLoader loading={this.state.loading}>
                    <NavigationMenu translation={firebase} />
                    <Home translation={firebase} />
                    <PageContents translation={firebase} />
                    <Footer translation={firebase} />
                </PageLoader>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
