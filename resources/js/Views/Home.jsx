import React from 'react';

const Home = (props) =>  {
    const trans = props.trans;
    // <img className="circular-image" src="./resources/images/Avatar.png"/>
    return (
        <section id="home" className="segment home dark">
            <h2 className="header">
              {trans.presentation.hello}<span className="blinker"> |</span>
            </h2>
            <h1>{trans.presentation.title}</h1>
            <div className="row">
                <a className="link" href="mailto:michel.kansou@viacesi.fr"><i className="fa fa-envelope-o"></i></a>
                <a className="link" href="https://twitter.com/MichelKansou"><i className="fa fa-twitter"></i></a>
                <a className="link" href="https://fr.linkedin.com/in/michel-kansou-4384a38a"><i className="fa fa-linkedin"></i></a>
                <a className="link" href="http://stackoverflow.com/users/4724949/michel"><i className="fa fa-stack-overflow"></i></a>
                <a className="link" href="https://github.com/MichelKansou"><i className="fa fa-github"></i></a>
            </div>
        </section>
    );
}

export default Home;
