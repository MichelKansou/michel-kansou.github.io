import React from 'react';

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

    render() {

    const trans = this.props.trans;
        return (
            <header className="headerNav">
                <div className="wrap" aria-expanded="true">
                    <div className="navigation-bar">
                        <h2 className="logo"><a>{this.state.navTitle}</a></h2>
                        <a id="menu-icon" onClick={() => this.handleClick()}>&#9776;</a>
                    </div>
                    <nav className={this.state.activeRM ? "navbar active" : "navbar"}>
                        <ul className="menu">
                            <li><a href="#profile"> {trans.navigation.profile} </a></li>
                            <li><a href="#experience"> {trans.navigation.workExperience} </a></li>
                            <li><a href="#skills"> {trans.navigation.skills} </a></li>
                            <li><a href="#portfolio"> {trans.navigation.portfolio} </a></li>
                            <li><a href="#contact"> {trans.navigation.contact} </a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
