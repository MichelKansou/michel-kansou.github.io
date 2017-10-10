import React from 'react';
import PropTypes from 'prop-types';

const Portfolio = (props) =>  {
    const translation = props.translation;
    const portfolioList = translation.portfolio.list.map((data, index) =>
        <div className='card' key={index}>
            <div className='image'>
                <img src={data.img} />
            </div>
            <div className='content' key={index}>
                <a className='header' href={data.url}>{data.projectName}</a>
                <div className='description'>
                    {data.description}
                </div>
            </div>
        </div>
    )
    return (
        <div className='segment portfolio dark'>
            <span className='backgroundPattern' />
            <div className='container'>
                <h3 className='segment-title light'>{translation.portfolio.title}</h3>
                <div className='portfolio-cards'>
                    {portfolioList}
                </div>
            </div>
        </div>
    );
}

Portfolio.propTypes = {
    translation: PropTypes.object
};

export default Portfolio;
