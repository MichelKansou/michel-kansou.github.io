import React from 'react';

const Hobbies = (props) =>  {
    const trans = props.trans;
    return (
        <div className='segment hobbies dark'>
            <div className='container'>
                <i className='fa fa-heart fa-3x' />
                <h3 className='segment-title'>{trans.hobbies.title}<span className='point'>.</span></h3>
                <hr />
                <div className='row'>
                    <div className='column'>
                        <div className='circular-font'>
                            <i className='fa fa-music' />
                        </div>
                        <h3>{trans.hobbies.music}</h3>
                    </div>
                    <div className='column'>
                        <div className='circular-font'>
                            <i className='fa fa-gamepad' />
                        </div>
                        <h3 className='hobbies-quotes-title'>{trans.hobbies.videoGame.title}</h3>
                        <h4 className='hobbies-quotes'>{trans.hobbies.videoGame.description}</h4>
                    </div>
                    <div className='column'>
                        <div className='circular-font'>
                            <i className='fa fa-usb' />
                        </div>
                        <h3>{trans.hobbies.technology}</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <span className='batmanIcon'>X</span>
                        <br /><h3 className='hobbies-quotes-title'>{trans.hobbies.movie.title}</h3>
                        <h4 className='hobbies-quotes'>'{trans.hobbies.movie.quote}'</h4>
                        <h5 className='hobbies-quotes-name'>- {trans.hobbies.movie.name}</h5>
                    </div>
                    <div className='column'>
                        <div className='circular-font'>
                            <i className='fa fa-apple' />
                        </div>
                        <h3 className='hobbies-quotes-title'>{trans.hobbies.apple.title}</h3>
                        <h4 className='hobbies-quotes'>'{trans.hobbies.apple.quote}'</h4>
                        <h5 className='hobbies-quotes-name'>- {trans.hobbies.apple.name}</h5>
                    </div>
                    <div className='column'>
                        <div className='circular-font'>
                            <i className='fa fa-book' />
                        </div>
                        <h3 className='hobbies-quotes-title'>{trans.hobbies.book.title}</h3>
                        <h4 className='hobbies-quotes'>{trans.hobbies.book.description}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

Hobbies.propTypes = {
    trans: React.PropTypes.object
};

export default Hobbies;
