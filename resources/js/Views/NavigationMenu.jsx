import React from 'react';
import PropTypes from 'prop-types';
import scrollToElement from 'scroll-to-element';

export default class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navTitle: 'MK',
            activeRM: false
        };
    }

    handleClick() {
        this.state.activeRM ? this.setState({'activeRM': false}) : this.setState({'activeRM': true});
    }

    smoothScroll(sectionId) {
        scrollToElement(sectionId, {
        	offset: -100,
        	ease: 'out-circ',
        	duration: 1400
        });
    }

    render() {
        const translation = this.props.translation;
        return (
            <header className='headerNav'>
                <div className='wrap' aria-expanded='true'>
                    <div className='navigation-bar'>
                        <h2 className='logo'><a>{this.state.navTitle}</a></h2>
                        <a id='menu-icon' onClick={() => this.handleClick()}>&#9776;</a>
                    </div>
                    <nav className={this.state.activeRM ? 'navbar active' : 'navbar'}>
                        <ul className='menu'>
                            <li><a onClick={() => this.smoothScroll('#home')} href='#home'> {translation.navigation.home} </a></li>
                            <li><a onClick={() => this.smoothScroll('#about')} href='#about'> {translation.navigation.about} </a></li>
                            <li><a onClick={() => this.smoothScroll('#skills')} href='#skills'> {translation.navigation.skills} </a></li>
                            <li><a onClick={() => this.smoothScroll('#portfolio')} href='#portfolio'> {translation.navigation.portfolio} </a></li>
                            <li><a onClick={() => this.smoothScroll('#contact')} href='#contact'> {translation.navigation.contact} </a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

NavigationMenu.propTypes = {
    translation: PropTypes.object,
};
