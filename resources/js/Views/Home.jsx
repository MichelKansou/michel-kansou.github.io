import React from 'react';

import {initHeader, initAnimation, mouseMove, scrollCheck, resize} from '../Library/CanvasAnimation.js';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        initHeader();
        initAnimation();
    }

    onMouseMove = (e) => {
        window.addEventListener('scroll', mouseMove(e));
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    render() {

        const trans = this.props.trans;
        return (
            <section id='home' className='segment home dark' onMouseMove={this.onMouseMove}>
                <div id='header' className='header'>
                    <canvas id='canvas' />
                    <div className='content'>
                        <h2 className='header'>
                            {trans.presentation.hello}<span className='blinker'> |</span>
                        </h2>
                        <h1>{trans.presentation.title}<span className='point'>.</span></h1>
                        <div className='row'>
                            <a className='link' href='mailto:michel.kansou@viacesi.fr'><i className='fa fa-envelope-o' /></a>
                            <a className='link' href='https://twitter.com/MichelKansou'><i className='fa fa-twitter' /></a>
                            <a className='link' href='https://fr.linkedin.com/in/michel-kansou-4384a38a'><i className='fa fa-linkedin' /></a>
                            <a className='link' href='http://stackoverflow.com/users/4724949/michel'><i className='fa fa-stack-overflow' /></a>
                            <a className='link' href='https://github.com/MichelKansou'><i className='fa fa-github' /></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Home.propTypes = {
    trans: React.PropTypes.object
};
