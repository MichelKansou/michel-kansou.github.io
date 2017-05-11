import React from 'react';

const Hobbies = (props) =>  {
    const trans = props.trans;
    return (
        <div className="segment hobbies dark">
            <div className="container">
                <i className="fa fa-heart fa-3x"></i>
                <h3 className="segment-title">{trans.hobbies.title}</h3>
                <hr/>
                <div className="row">
                    <div className="column">
                        <div className="circular-font">
                            <i className="fa fa-music"></i>
                        </div>
                        <h3>{trans.hobbies.music}</h3>
                    </div>
                    <div className="column">
                        <div className="circular-font">
                            <i className="fa fa-gamepad"></i>
                        </div>
                        <h3 className="hobbies-quotes-title">{trans.hobbies.videoGame.title}</h3>
                        <h4 className="hobbies-quotes">{trans.hobbies.videoGame.description}</h4>
                    </div>
                    <div className="column">
                        <div className="circular-font">
                            <i className="fa fa-usb"></i>
                        </div>
                        <h3>{trans.hobbies.technology}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <span className="batmanIcon">X</span>
                        <br/><h3 className="hobbies-quotes-title">{trans.hobbies.movie.title}</h3>
                        <h4 className="hobbies-quotes">"{trans.hobbies.movie.quote}"</h4>
                        <h5 className="hobbies-quotes-name">- {trans.hobbies.movie.name}</h5>
                    </div>
                    <div className="column">
                        <div className="circular-font">
                            <i className="fa fa-apple"></i>
                        </div>
                        <h3 className="hobbies-quotes-title">{trans.hobbies.apple.title}</h3>
                        <h4 className="hobbies-quotes">"{trans.hobbies.apple.quote}"</h4>
                        <h5 className="hobbies-quotes-name">- {trans.hobbies.apple.name}</h5>
                    </div>
                    <div className="column">
                        <div className="circular-font">
                            <i className="fa fa-book"></i>
                        </div>
                        <h3 className="hobbies-quotes-title">{trans.hobbies.book.title}</h3>
                        <h4 className="hobbies-quotes">{trans.hobbies.book.description}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hobbies;
