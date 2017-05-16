import React from 'react';
import scrollToElement from 'scroll-to-element';

export default class NavigationMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          navTitle: 'Michel Kansou',
          activeRM: false
      };
    }

    handleClick() {
        this.state.activeRM ? this.setState({'activeRM': false}) : this.setState({'activeRM': true});
    }

    smoothScroll(sectionId) {
        scrollToElement(sectionId, {
        	offset: 0,
        	ease: 'out-circ',
        	duration: 1400
        });
    }

    render() {

    const trans = this.props.trans;
        return (
            <header className="headerNav">
                <div className="wrap" aria-expanded="true">
                    <div className="navigation-bar">
                        <h2 className="logo"><a>{() => this.state.navTitle}</a></h2>
                        <a id="menu-icon" onClick={() => this.handleClick()}>&#9776;</a>
                    </div>
                    <nav className={this.state.activeRM ? "navbar active" : "navbar"}>
                        <ul className="menu">
                            <li><a onClick={() => this.smoothScroll('#about')} href="#about"> {trans.navigation.profile} </a></li>
                            <li><a onClick={() => this.smoothScroll('#experience')} href="#experience"> {trans.navigation.workExperience} </a></li>
                            <li><a onClick={() => this.smoothScroll('#skills')} href="#skills"> {trans.navigation.skills} </a></li>
                            <li><a onClick={() => this.smoothScroll('#portfolio')} href="#portfolio"> {trans.navigation.portfolio} </a></li>
                            <li><a onClick={() => this.smoothScroll('#contact')} href="#contact"> {trans.navigation.contact} </a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
